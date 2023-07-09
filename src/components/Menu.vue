<template>
  <div class="menu-left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.menu-left {
  background-color: #2D4059;
  height: 100%;
  padding: 25px;
  box-shadow: 0px 0px 15px #bbb;
}
</style>
