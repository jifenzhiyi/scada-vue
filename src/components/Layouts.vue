<template>
  <div class="layouts">
    <base-header />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import baseHeader from 'comps/Base/Header';

export default {
  name: 'Layouts',
  components: {
    baseHeader,
  },
};
</script>

<style lang="less" scoped>
.layouts {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
</style>
