<template>
  <div class="wrapperContainer">
    <Menu>
      <InputSearch style="margin-bottom: 20px" />
      <Tree :node="root" />
    </Menu>
    <Container>
      <ProductSelect />
      <hr width="100%" style="margin: 20px 0px" color="#eee" />
      <AllProducts />
    </Container>
  </div>
</template>

<script>
import { compileData } from "./services/nodeData.service";

import Tree from "./components/Tree.vue";
import ProductSelect from "./components/ProductSelect.vue";
import Menu from "./components/Menu.vue";
import InputSearch from "./components/InputSearch.vue";
import AllProducts from "./components/AllProducts.vue";
import Container from "./components/Container.vue";

export default {
  name: "App",
  data() {
    return {
      selectProduct: {},
      root: [],
    };
  },

  methods: {
    test(value) {
      console.log(value);
    },
  },
  mounted() {
    console.log(this.$store);
    this.root = compileData.getCompile();
    this.$store.commit("changeProducts", compileData.getAllProduct());
  },
  components: {
    Tree,
    ProductSelect,
    Menu,
    InputSearch,
    AllProducts,
    Container,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 60px;
  font-size: 20px;
  background-color: #111;
  color: #fff;
}

.navigate {
  & > ul {
    & > li {
      padding: 5px 15px;

      border: 1px solid #ffb841;
      margin: 10px;
      border-radius: 10px;
      cursor: pointer;
      .right-arrow {
        max-width: 20px;
      }
      transition: 0.2s linear;
      &:hover {
        background-color: #ffb841;
      }

      .group {
        display: flex;
        align-items: center;
      }
    }
  }
}

.wrapperContainer {
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}
</style>
