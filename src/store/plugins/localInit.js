import storage from '@/utils/storage';

export default (store) => {
  if (localStorage) {
    // TOTO store初始化的时候，将存储在localStoreage中的数据还原
  }

  // 如果用户相关状态发生变化，自动存入localStoreage
  store.subscribe((mutation, state) => {
    mutation.type === 'SET_WAREHOUSE_LIST' && storage.set('scada_warehouse_ids', state.warehouseIds);
    mutation.type === 'SET_WAREHOUSE_ID' && storage.set('scada_warehouse_id', state.warehouseId);
  });
};
