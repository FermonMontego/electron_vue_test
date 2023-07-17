<template>
  <div class="bread-crambs">

    <div class="item-crumbs" v-for="(item, index) in $store.state.currentProduct.crumb" :key="index">
        {{ item }} {{ $store.state.currentProduct.crumb.length - 1 == index ? '' : '/' }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrambs",
};
</script>

<style scoped lang="scss">
.bread-crambs {
  box-shadow: 0px 0px 10px #bbb;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  gap: 5px;

  a {
    color: #111;
  }
}
</style>
