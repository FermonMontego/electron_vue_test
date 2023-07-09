<template>
  <div class="container">
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
.container {
  padding: 10px 30px;
}
</style>
