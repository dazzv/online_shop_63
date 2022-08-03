<template>
  <header>
    <div class="nav">
      <router-link to="/"><img src="./assets/img/nav/b_logo.png" alt="logo" class="logo"></router-link>
        <ul class="open_cart" @click="openCart()">
          <li><span class="logo_cart"></span></li>
          <li class="cart_name"><span>Корзина</span></li>
          <li><span class="cart_length">1</span></li>
        </ul>
      </div>
  </header>
  <router-view/>
  <footer>
    <p>Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0</p>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters ({
      cartProducts: 'cartProducts'
    })
  },
  methods: {
    openCart() {
      if(this.cartProducts.length) {
        this.$router.push("/cart");
      }
    }
  }
}
</script>

<style lang="scss">
@import url(./assets/style/nullstyle.scss);
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@500;600;700&family=Roboto&display=swap');

$green: #00A82D;
$font: 'Montserrat', sans-serif;

body {
   font-family: $font;
}

header {
  max-width: 1170px;
  margin: 0 auto;

  @media (max-width: 1170px) {
    max-width: 930px;
  }
  @media (max-width: 930px) {
    max-width: 690px;
  }
  @media (max-width: 690px) {
    max-width: 510px;
  }
  @media (max-width: 452px) {
    max-width: 290px;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 37px 0 60px;
  height: auto;
  width: 100%;

  .logo {
    width: 215px;
    height: 37px;
  }
  .open_cart {
    display: flex;
    align-items: center;
    li + li {
      margin-left: 10px;
    }

    .logo_cart {
    width: 28px;
    height: 23px;
    mask-image: url("./assets/img/nav/cart.svg");
    background-color: #000;
    display: block;
    }
    
    .cart_length {
      background-color: $green;
      color: white;
      border-radius: 20px;
      font-size: 12px;
      padding: 3px 8px;
    }
  }
  .open_cart:hover {
    cursor: pointer;
    transition: 0.3s;
  }
  .open_cart:hover > .cart_name {
    color: $green;
  }
  .open_cart:hover > li .logo_cart {
    background-color: $green;
  }
  @media (max-width: 690px) {
    margin: 28px 0 75px;
    height: 30px;
    .logo {
      width: 180px;
      height: 29.5px;
    }
    .cart_name {
      display: none;
    }
  }
  @media (max-width: 510px) {
    margin: 26px 0 50px;

    .logo {
      width: 180px;
      height: 27.8px;
    }
    .open_cart .logo_cart {
    width: 28px;
    height: 26px;
    }
  } 
}
footer {
  border-top: 2px solid #A8AFBB;
  max-width: 1170px;
  height: 36px;
  margin: 70px auto 20px;
  font-family: $font;
  position: relative;
  display: flex;
  justify-content: flex-start;

  p {
    font-size: 12px;
    color: #7C828B;
    line-height: 15.6px;
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 1170px) {
    max-width: 930px;
  }
  @media (max-width: 930px) {
    max-width: 690px;
  }
  @media (max-width: 690px) {
    max-width: 510px;
  }
  @media (max-width: 452px) {
    max-width: 290px;
  }
}

</style>
