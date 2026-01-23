---
title: 完美模拟1.21.5-的方块实体保存与替换
date: 2025-12-31
tags: Java, 开发思路
order: 2
---
# 完美模拟1.21.5-的方块实体保存与替换
在2025年7月28日的blog中，我发现了1.21.5导致方块实体保存与替换彻底失效的元凶，但我使用的是巧思，只是替换了方块实体，但并没有保存方块实体。于是在考研的这段时间里我痛定思痛，沉淀了下自己，终于是做出了完美和1.21.5-一样的方块实体保留与替换。
***
一样，我也是从更新抑制出发，在破坏方块的时候，游戏调用的是**WorldChunk.setBlockState**，于是我可以在这里直接标记原来的方块实体是什么和原来的方块是什么。  
例如：
```java
    private void captureBE(BlockPos pos, BlockState newState, int flags, CallbackInfoReturnable<BlockState> cir,
                           @Share("capturedBE") LocalRef<BlockEntity> capturedBE,
                           @Share("oldState") LocalRef<BlockState> oldStateRef) {
        BlockEntity existingBe = this.getBlockEntity(pos);
        if (!this.world.isClient && this.world.getServer() != null) {
            if (existingBe != null && !(existingBe instanceof ComparatorBlockEntity)) {
                BlockState trueOldState = existingBe.getCachedState();
                SuppressionManager.mark2(pos);
                capturedBE.set(existingBe);
                oldStateRef.set(trueOldState);
            }
        }
        BlockEntity savedBe = capturedBE.get();
        BlockState originalState = oldStateRef.get();
        if (savedBe == null) return;
        if (savedBe instanceof ComparatorBlockEntity) return;
        if (!newState.hasBlockEntity()) {
            if (!newState.isAir()) return;
            SuppressionManager.setRestorable(true);
            SuppressionManager.posmark(pos);
            SuppressionManager.capturedBEmark(savedBe);
            SuppressionManager.statemark(newState);
            SuppressionManager.oldStatemark(originalState);
        }
    }
```
于是我们就传入了**SuppressionManager**一系列的参数，由上次我们得知，在发生更新抑制的时候，会调用**NeighborUpdater.tryNeighborUpdate**，于是在这里我们就可以进行方块实体的保存（恢复）。在发生更新抑制后，我们进行标记，并于我们之前传入的进行对比，如果是一样的，则就是需要保存（恢复）的方块实体，于是我们调用
```java
    @Unique
    private static void handleMarkedPos(World world, BlockPos blockPos) {
        if (!SuppressionManager.isMarked2(blockPos)) return;
        SuppressionManager.mark(blockPos);
        if (!world.isClient && world.getServer() != null) {
            if (SuppressionManager.isMarked(SuppressionManager.getMarkedPos()) && SuppressionManager.isRestorable()) {

                BlockPos markedPos = SuppressionManager.getMarkedPos();
                if (SuppressionManager.getMarkedPos() == null)return;
                Chunk chunk = world.getChunk(markedPos);

                if (SuppressionManager.getMarkedOldState() != null) {
                    SuppressionManager.forceSetBlockState(chunk, markedPos, SuppressionManager.getMarkedOldState());
                }
                ((BlockEntityAccessor) SuppressionManager.getMarkedCapturedBE()).setRemoved(false);
                world.removeBlockEntity(markedPos);
                world.addBlockEntity(SuppressionManager.getMarkedCapturedBE());
                SuppressionManager.forceSetBlockState(chunk, markedPos, SuppressionManager.getMarkedState());
            } else {
                if (SuppressionManager.getMarkedPos() == null)return;
                world.removeBlockEntity(SuppressionManager.getMarkedPos());
            }

            SuppressionManager.clear();
            SuppressionManager.clear2();
            SuppressionManager.clears();
            SuppressionManager.setRestorable(false);
        }
    }
```
最后成功恢复方块实体，也就是保存下来了。