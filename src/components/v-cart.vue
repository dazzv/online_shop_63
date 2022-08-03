<template>
    <section v-if="cartProducts.length">
        <div class="container">
            <div class="cart">
                <h1 class="cart_name">Корзина</h1>
                <v-cart-item></v-cart-item>
            </div>
        </div>
        <form @submit.prevent class="order" novalidate>
          <h2>Пожалуйста, представьтесь</h2>
          <input 
              @blur="v$.name.$touch()"
              type="text"
              v-model="name" 
              class="input_name" 
              placeholder="Ваше имя">
          <div class="invalid_data">
            <p v-if="v$.name.$errors.length">Поле обязательно для заполнения</p>
          </div>
          <input  @blur="v$.phone.$touch()" v-model="phoneMasked" class="input_phone" placeholder="+7(___) ___ - __ - __">
          <div class="invalid_data">
            <p v-if="v$.phone.$errors.length">Поле обязательно для заполнения</p>
            <p v-if="phone.length > 1 && phone.length < 11">Номер телефона состоит из 11 цифр</p>
          </div>
          <input  @blur="v$.email.$touch()" type="text" v-model="email" class="input_email" placeholder="Email">
          <div class="invalid_data">
            <p v-if="v$.email.$errors.length">Поле заполнено неверно</p>
          </div>
            <button @click="submitForm()" class="cart_btn active_order_btn" ref="orderBtn">оформить заказ</button>
        </form>
    </section>
</template>

<script>
import vCartItem from '../components/v-cart-item.vue'
//для ошибок
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
//для маски номера телефона
import { createMask } from "imask";

const maskField = (field, maskOptions) => {
    const mask = createMask(maskOptions);
 
    return {
      get: function() {
        return mask.resolve(this[field]);
      },
      set: function(value) {
        mask.resolve(value);
        // TEMP CHANGE HERE
        this[field] = value;
        // END TEMP CHANGE
        this[field] = mask.unmaskedValue;
      }
    };
  };

import {mapGetters} from 'vuex'
export default {
  name: 'Catalog',
  components: {
    vCartItem,
  },

  data() {
    return {
      v$: useVuelidate(), // для реактивности библиотеки

      name: '',
      phone: '',
      email: '',
      orderNumber: 12345,
     
      isOrderCompleted: false,
    }
  },

  validations () {
    return {
      name: { required },
      phone: { required }, 
      email: { required, email } 
    }
  },

  methods: {
    async submitForm() {
        await this.v$.$validate()
        if(!this.v$.$error) {
          this.$router.push({name: 'cartPopup', params: {name: this.name, phone: this.phoneMasked, orderNumber: this.orderNumber}})
          this.isOrderCompleted = true
        }
    }
  },
  
  computed: {
    phoneMasked: maskField("phone", {
      mask: "+{7}(000)000-00-00",
    }),
    ...mapGetters({
      cartProducts: 'cartProducts'
    })
  },
  
}
</script>

<style lang="scss" scoped>

$blue: #296DC1;
$green: #00A82D;

section {
  min-height: calc(100vh - 80px);
}
.container {
  max-width: 1170px;
  margin: 0 auto;

  .cart {
  margin: 0 auto;

    .cart_name {
      text-align: center;
      font-size: 30px;
      line-height: 39px;
      margin: 0 0 40px 0;

      @media (max-width: 930px) {
        margin: 0 0 28px 0;
      }
      @media (max-width: 510px) {
        margin: 0 0 30px 0;
        font-size: 26px;
        line-height: 33.8px;
      }
    }
  }

  @media (max-width: 1170px) {
    max-width: 930px;
    .cart {
      max-width: 930px;
    }
  }

  @media (max-width: 930px) {
    max-width: 690px;
    .cart {
      max-width: 444px;
    }
  }
  @media (max-width: 690px) {
    max-width: 510px;
    .cart {
      max-width: 334px;
    }
  }
  @media (max-width: 510px) {
    max-width: 290px;
    .cart {
      max-width: 250px;
    }
  }

}
.order {
  background-color: #F2F5F9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 800px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;  
    text-align: center;
    margin: 70px 0 30px;  
  }
  input {
    width: 430px;
    height: 60px;
    padding: 20px;
    background-color: #fff;
    color: #535860;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
  }
  .input_name {
    text-transform: capitalize;
  }
  .invalid_data {
    height: 30px;
    width: 430px;
    p{
      margin: 4px 0 0;
      font-size: 13px;
      color: red;
      text-align: start;
    }
  }
  .cart_btn {
    width: 430px;
    height: 60px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    margin-bottom: 76px;

  }
  @media (max-width: 510px) {
    h2 {
      margin: 50px 0 30px;
      width: 280px;  
    }
    input {
      width: 290px;
    }
    .cart_btn {
      width: 290px;
    }
    .invalid_data {
      width: 290px;
    }
  }

  .order_btn {
    background-color: grey;
  }
  .active_order_btn {
    background-color: $blue;
  }
}

</style>
