---
title: How to implement CCE and IAE in 1.21.5+
---

### In the java file of AbstractBlock of 1.21.5-
```java
    protected void onStateReplaced(BlockState state, World world, BlockPos pos, BlockState newState, boolean moved) {
    if (state.hasBlockEntity() && !state.isOf(newState.getBlock())) {
        world.removeBlockEntity(pos);
    }
}
```
### In the java file of AbstractBlock of 1.21.5+
```java
    protected void onStateReplaced(BlockState state, World world, BlockPos pos, BlockState newState, boolean moved) {}
```
We can get it by comparison, we no longer call.
```
world.removeBlockEntity(pos);
```
In other words, the game deleted or checked the block entity in a place we didn't know about? I don't want to dig deep for now, so I took a tricky approach.  
We can mark LecternBlock and SculkSensorBlock when the update suppression issues an exception, and mark them again when we remove LecternBlock and SculkSensorBlock. For comparison, if both conditions are met, when we place a new block containing a block entity, I manually delete the block entity and add a block entity to it to complete the functions of CCE and IAE.