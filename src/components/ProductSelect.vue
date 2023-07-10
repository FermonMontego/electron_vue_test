<template>
  <div
    v-if="Object.keys($store.state.currentProduct).length"
    class="productSelect"
  >
    <div class="cardItemSelect">
      <div class="imgWrapperSelect">
        <img
          :src="$store.state.currentProduct.urlImg"
          :alt="$store.state.currentProduct.name"
        />
      </div>

      <div class="contentInfoSelectProduct">
        <h3>
          {{ $store.state.currentProduct.name }}
          {{ $store.state.currentProduct.weight }}
          {{ $store.state.currentProduct.unitType }}
        </h3>
        <p>
          {{ $store.state.currentProduct.description }}
        </p>
        <span>
          {{
            $store.state.currentProduct.price.toLocaleString("en-US", {
              style: "currency",
              currency: "RUB",
            })
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.wrapperAllProducts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}
.cardItemSelect {
  display: flex;
  align-items: center;
  gap: 30px;

  @media(max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
}
.productSelect {
  width: 100%;
  padding: 10px;

  box-shadow: 0px 0px 15px #bbb;
  border-radius: 6px;

  .imgWrapperSelect {
    img {
      height: 400px;
      object-fit: cover;
    }
  }

  .contentInfoSelectProduct {
    h3 {
      font-size: 24px;
    }

    p {
      font-size: 21px;
    }

    span {
      display: block;
      font-size: 21px;
      margin-top: 15px;
    }
  }
}
</style>
