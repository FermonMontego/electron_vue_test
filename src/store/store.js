import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    currentProduct: {},
    allProducts: [],
    duplicateAllProducts: [],
  },
  mutations: {
    changeCurrentProduct(state, value) {
      state.currentProduct = value;
    },
    changeProducts(state, value) {
      state.duplicateAllProducts = value;
      state.allProducts = value;
    },
    searchFilter(state, value) {
      if (value == "") return (state.allProducts = state.duplicateAllProducts);
      state.allProducts = state.duplicateAllProducts.filter((item) => {
        return item.product.name.toLowerCase().includes(value.toLowerCase());
      });
    },
  },
});
export default store;
