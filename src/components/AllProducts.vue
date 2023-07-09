<template>
  <div>
    <article class="allProductsWrapper">
      <div
        class="cardItem"
        v-for="(item, index) in $store.state.allProducts"
        :key="index"
        @click="changeCurrentProduct(item.product)"
      >
        <div class="containerImg">
          <img :src="item.product.urlImg" :alt="item.product.name" />
        </div>

        <div class="containerInfo">
          <h3>
            {{ item.product.name }} |
            <small>{{ item.product.weight }} {{ item.product.unitType }}</small>
          </h3>
          <p>{{ item.product.description }}</p>

          <span>
            {{
              item.product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "RUB",
              })
            }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeCurrentProduct(value) {
      this.$store.state.currentProduct = value;
      window.scrollTo(0, 0);
    },
  },
  props: {},
};
</script>

<style scoped lang="scss">
.allProductsWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .cardItem {
    box-shadow: 0px 0px 10px #bbb;
    border-radius: 6px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: 0.15s linear;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 20px #bbb;
    }
    .containerImg {
      img {
        height: 400px;
        width: 100%;
        object-fit: cover;

        @media (max-width: 960px) {
          height: 300px;
        }
      }
    }

    .containerInfo {
      h3 {
        font-size: 21px;
        font-weight: 500;

        small {
          font-size: 18px;
          color: #bbb;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 5px;
      }

      span {
        display: block;
        font-size: 18px;
        margin-top: 15px;
      }
    }
  }
}
</style>
