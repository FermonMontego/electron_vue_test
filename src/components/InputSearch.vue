<template>
  <form class="inputSearch">
    <label>
      <input
        @input="searchTarget(search)"
        v-model="search"
        type="text"
        placeholder="Введите запрос"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "InputSearch",
  data() {
    return {
      search: "",
    };
  },

  methods: {
    searchTarget(value) {
      if(value.length <= 3) return;
      this.$store.commit("searchFilter", value);
    },
  },
};
</script>

<style scoped lang="scss">
.inputSearch {
  input {
    width: 100%;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 10px;
    outline: none;
    border: none;
    border: 2px solid transparent;

    transition: 0.1s ease-in-out;
    &:focus {
      box-shadow: 0px 0px 5px #80daeb;
      border: 2px solid #80daeb;
    }
  }
}
</style>
