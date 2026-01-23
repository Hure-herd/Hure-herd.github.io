---
title: 在1.21.5+如何实现CCE和IAE
date: 2025-07-28
tags: Java, 开发思路
order: 1
---
# 在1.21.5+如何实现CCE和IAE
### 在1.21.5-的AbstractBlock的java文件里
```java
    protected void onStateReplaced(BlockState state, World world, BlockPos pos, BlockState newState, boolean moved) {
    if (state.hasBlockEntity() && !state.isOf(newState.getBlock())) {
        world.removeBlockEntity(pos);
    }
}
```
<!-- truncate -->
### 在1.21.5+的AbstractBlock的java文件里
```java
    protected void onStateReplaced(BlockState state, World world, BlockPos pos, BlockState newState, boolean moved) {}
```
我们对比可以得到，我们不再调用
```
world.removeBlockEntity(pos);
```
也就是说在我们不知道的地方，游戏进行了一次方块实体的删除或者核对？ 我暂时不想深挖，于是我采取了比较取巧的一个方法。  
我们可以在更新抑制发出异常的时候进行对LecternBlock和SculkSensorBlock标记，在我们挖掉LecternBlock和SculkSensorBlock的时候再次标记。进行对比，如果满足两个条件的情况下，在我们放置新的含有方块实体的方块时，我手动进行删除方块实体，并且给它添加一个方块实体，完成CCE和IAE的功能。