import { createStore } from 'vuex'

let cart = window.localStorage.getItem('cartData')

export default createStore({
  state: {
    listOfProducts: [],
    cart:cart ? JSON.parse(cart) : [],
  },

  actions: {
    async getDataFromBackend({commit}) {
      // const res = await fetch('')
      // const data = res.json()
      const rawData = [{id: 0, img: 'image_0.png', title: "Увлажнитель воздуха STARWIND SHC1322, 3л, белый", price: 1650, about: "", quantity: 10}, {id: 1, img: 'image_1.png', title: "Триммер PHILIPS HC3521/15 серебристый/черный", price: 2290, about: "", quantity: 10}, {id: 2, img: 'image_2.png', title: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, розовый", price: 2390, about: "", quantity: 10}, {id: 4, img: 'image_4.png', title: "Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95, черный", price: 2390, about: "", quantity: 10}, {id: 5, img: 'image_5.png', title: "Пылесос SINBO SVC 3497, 2500Вт, синий/серый", price: 5670, about: "", quantity: 5}, {id: 6, img: 'image_6.png', title: "Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый", price: 9490, about: "", quantity: 7}, {id: 7, img: 'image_7.png', title: "Монитор игровой ACER Nitro RG241YPbiipx 23.8 черный", price: 16800, about: "", quantity: 8}, {id: 8, img: 'image_8.png', title: "Экшн-камера DIGMA DiCam 310 4K, WiFi, черный", price: 2290, about: "", quantity: 6}, {id: 9, img: 'image_9.png', title: "Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый", price: 5670, about: "", quantity: 10}, {id: 10, img: 'image_10.png', title: "Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый", price: 60990, about: "", quantity: 4}, {id: 11, img: 'image_11.png', title: "Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий", price: 11960, about: "", quantity: 10}, {id: 12, img: 'image_12.png', title: "МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный", price: 35310, about: "", quantity: 10}, {id: 13, img: 'image_13.png', title: "Смарт-часы AMAZFIT Bip U, 1.43, зеленый / зеленый", price: 4490, about: "", quantity: 10}, {id: 14, img: 'image_14.png', title: "Кофемашина PHILIPS EP1224/00, серый/черный", price: 29990, about: "", quantity: 6}, {id: 15, img: 'image_15.png', title: "Гироскутер MIZAR MZ10,5CN, 10.5, карбон", price: 12990, about: "", quantity: 10}]
      commit('rawDataFromBackend', rawData)
    },

    setItemToCart({commit}, product) {
      commit("setItemToCart", product)
      commit('setCartOnLS')
    },

    deleteItemFromCart({commit}, id){
      commit("deleteItemFromCart", id)
      commit('setCartOnLS')
    },

    decreamentItemQuantity({commit}, id){
      commit("decreament", id)
      commit('setCartOnLS')
    },
    increamentItemQuantity({commit}, id){
      commit("increament", id)
      commit('setCartOnLS')
    }
  },
  mutations: {
    rawDataFromBackend(state, rawData){
      state.listOfProducts = rawData
    },
    setItemToCart(state, product) {
      let isProductExcist = false;      
      state.cart.map(function (item) {
        if (item.id === product.id) { //чтобы проверить наличие товара в корзине проверяуться артикул выбранного товара с артиклом товаров в корзине
          isProductExcist = true;
          if (item.value <= item.quantity - 1) { return } //если он уже в корзине не добавится больше
        }})

      isProductExcist || state.cart.push({ ...product, value: 1 }) //если товара нету в корзине то добавляться объект и просвоится кол-во 1
      state.listOfProducts.filter(t => t.id === product.id).isItemInCart = true //если товар уже в корзине, чтобы кнопку менять
    },

    deleteItemFromCart(state, id) {
      state.cart = state.cart.filter(t => t.id !== id)
    },

    setCartOnLS(state) {
      window.localStorage.setItem("cartData", JSON.stringify(state.cart))
    },

    decreament(state, id) {
      state.cart.find(t => {
        if(t.id === id){
          if(t.value > 1)
            t.value -= 1
        }})
    },
    increament(state, id) {
      state.cart.find(t => {
        if(t.id === id) {
          if(t.value <= t.quantity - 1)
            t.value += 1
      }})
    }
    
    
  },

  getters: {
    products(state) {
      return state.listOfProducts
    },
    cartProducts(state) {
      return state.cart
    }
  }
  
})
