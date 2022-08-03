<template>
  <div class="catalog_item">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="item"
      >
      <img class="item_image" v-bind:src="require('../assets/img/' + product.img)">
      <p class="item_name">{{product.title}}</p>
      <h2 class="item_price">{{product.price}}</h2>
      <button @click="addToCart(product)" v-if="!product.isItemInCart" class="btn addToCart">Добавить в корзину</button>
      <button class="btn added" v-else>В корзине</button>
    </div>     
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      isItemInCart: false,

      selectedItem: '',

    }
  },
  methods: {
    ...mapActions({
      setItemToCart: "setItemToCart"
    }),

    addToCart(product) {
      this.setItemToCart(product)
      this.selectedItem = product

      product.isItemInCart = true
      this.isItemInCart = true
    },

  },

  computed: {
    ...mapGetters({
        products: 'products',
    }),
  },

  mounted() {
    this.$store.dispatch("getDataFromBackend")
  },

  watch: {
    // selectedItem() {
    //   this.isItemInCart = true
    // },
  }
}
</script>

<style lang="scss" scoped>

$blue: #296DC1;
$green: #00A82D;

.catalog_item {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 380px;

  .item {
    // width: 270px;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 2px solid #DEDEDE;
    cursor: pointer;
  }
  @media (min-width: 930px) {
      .item:hover > .item_name{
       margin: 4px auto 0px;
      }
      .item:hover > .item_price {
        margin: 15px 0px 15px;
      }
      .item:hover > .addToCart {
        display: block;
      }
      .item:hover > .added {
        display: block;
      }
    }

  .item_image {
    width: auto;
    height: 200px;
    margin: 10px auto 0px;

    @media (max-width: 930px) {
      height: 400px;
      margin: 20px auto 0px;
    }
    @media (max-width: 452px) {
      height: 200px;
      margin: 10px auto 0px;
    }
    
  }

  .item_name {
    margin: 34px auto 0;
    width: 230px;
    text-align: center;
    line-height: 20px;
    transition: 0.3s;

    @media (max-width: 930px) {
      margin: 15px auto 0;
      width: 330px;
    }
    @media (max-width: 452px) {
      margin: 4px auto 0;
      width: 230px;
    }
  }

  .item_price {
    margin: 15px 0px 35px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    transition: 0.3s;

     @media (max-width: 930px) {
      margin: 15px 0px 15px;
    }
  }

  .btn {
    width: 186px;
    height: 40px;
    margin: 0 auto;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    // transition: opacity 0.3s ease;
  }
  .addToCart {
    background-color: $blue;
    margin-bottom: 10px;
    display: none;

    @media (max-width: 930px) {
      display: block;
      margin-bottom: 18px;
    }
    @media (max-width: 452px) {
      margin-bottom: 10px
    }
  }
  .added {
    margin-bottom: 10px;
    background-color: $green;
    display: none;

    @media (max-width: 930px) {
      display: block;
      margin-bottom: 18px;
    }
    @media (max-width: 452px) {
      margin-bottom: 10px
    }
  }
  //item
  @media (max-width: 1170px) {
    gap: 40px;
    grid-template-columns: repeat(3, 270px);
    grid-auto-rows: 380px;
  }
  @media (max-width: 930px) {
    gap: 42px;
    grid-template-columns: repeat(1, 450px);
    grid-auto-rows: 590px;
  }
  @media (max-width: 452px) {
    gap: 30px;
    grid-template-columns: repeat(1, 270px);
    grid-auto-rows: 380px;
  }
  
  // 
  
}
</style>