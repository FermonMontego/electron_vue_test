<template>
  <div>
    <ul>
      <li v-for="(item, index) in $props.node" :key="item.name">
        <p
          class="tree-element"
          :style="{ 'margin-left': `${deep * 15}px` }"
          @click="expanded == index ? (expanded = null) : (expanded = index)"
        >
          <a
            v-if="item?.product?.name"
            @click="$store.commit('changeCurrentProduct', item.product)"
            >{{ item.product.name }}</a
          >
          <span v-else> {{ item.name }}</span>
        </p>

        <Tree v-if="expanded == index" :node="item.children" :deep="deep + 1" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {
      expanded: null,
    };
  },
  methods: {},

  mounted() {},
  props: {
    deep: {
      type: Number,
      default: 0,
    },
    selectProduct: Object,
    node: Object,
  },
};
</script>

<style scoped lang="scss">
.tree-element {
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #80daeb;
  margin: 10px;
  display: block;
  color: #80daeb;
  border-radius: 10px;
  transition: 0.15s ease-in-out;
  a {
    display: block;
  }
  &:hover {
    background-color: #80daeb;
    color: #2d4059;
  }
}
</style>
