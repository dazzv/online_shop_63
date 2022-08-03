<template>
    <div class="cart_items">
        <div 
            v-for="(product, index) in cartProducts"
            :key="index"
            class="item"
            >
            <img class="item_image" v-bind:src="require('../assets/img/' + product.img)">
            <p class="item_name">{{product.title}}</p>
            <div class="counter">
                <div @click="decreament(product.id)" class="decrease"><span></span></div>
                <hr/>
                <div class="quantity">{{product.value}}</div>
                <hr/>
                <div @click="increament(product.id)" class="increase"><span></span></div>
            </div>
            <h2 class="item_price">{{product.price}} ₽</h2>
            <div class="btn">
               <button @click="deleteFromCart(product.id)" class="btn_delete"><span></span></button> 
               <button @click="deleteFromCart(product.id)" class="btn_delete_2"><span></span>Удалить</button> 
            </div>
            <span class="line"/>
        </div>        
    </div>
    <h1 class="sum">Сумма {{priceSum}} ₽</h1>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            
        }
    },

    methods: {
        ...mapActions({
            deleteItemFromCart: "deleteItemFromCart",
            decreamentItemQuantity: 'decreamentItemQuantity',
            increamentItemQuantity: "increamentItemQuantity"
        }),
        deleteFromCart(id) {
            this.deleteItemFromCart(id)
            if(!this.cartProducts.length) {
                this.$router.push('/')
            }
        },
        decreament(id) {
            this.decreamentItemQuantity(id)
        },
        increament(id) {
            this.increamentItemQuantity(id)
        }

    },

    computed: {
        ...mapGetters({
            cartProducts: 'cartProducts',
        }),
        priceSum() {
            let result = [];
            this.cartProducts.forEach(element => {
                result.push(element.price * element.value)                
            });
            if (result.length){
                result = result.reduce((sum, el) => sum + el)
            }
            return result;
        },
    }
}
</script>

<style lang="scss" scoped>
$blue: #296DC1;

.cart_items {
    display: grid;
    grid-gap: 40px;
    @media (max-width: 930px) {
        grid-gap: 35px;
    }      
}

    .item {
        display: grid;
        align-items: center;
        justify-items: center;

        .item_image {
            height: 150px;
            width: 125px;
            margin: 0 64px 0 12px;
        }

        .item_name {
            width: 273px;
        }

        .item_price {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            width: 81px;
        }
        
        .btn_delete {
            margin: 0 15px 0 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 40px;
            background-color: #fff;
            cursor: pointer;
            span {
                mask-image: url("../assets/img/nav/delete.svg");
                background-color: #000;
                width: 13px;
                height: 13px;
            } 
        }
        .btn_delete:hover {
            background-color: $blue;
        }
        .btn_delete:hover > span {
            background-color: #fff;
        }
        .btn_delete_2 {
            display: none;
        }

        .line {
            grid-column-start: span 5;
            // grid-column-end: 6;
            justify-content: center;
            width: 100%;
            height: 2px;
            background-color: #A8AFBB;
            margin-top: 40px;
        }

        .counter {
        width: 160px;
        height: 40px;
        display: flex;
        margin: 0 150px;

            .decrease {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 40px;
                border: 2px solid #A8AFBB;
                cursor: pointer;
                span {
                    mask-image: url("../assets/img/nav/decrease.svg");
                    background-color: #000;
                    width: 18px;
                    height: 1.5px;
                } 
            }
            .quantity {
                width: 80px;
                height: 100%;
                display: flex;
                font-weight: 600;
                justify-content: center;
                align-items: center;
                border-bottom: 2px solid #A8AFBB;
                border-top: 2px solid #A8AFBB;   
            }
            .increase {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 40px;
                border: 2px solid #A8AFBB;
                cursor: pointer;
                span {
                    mask-image: url("../assets/img/nav/increase.svg");
                    background-color: #000;
                    width: 18px;
                    height: 18px;
                }
            }
            .decrease:hover,
            .increase:hover {
                background-color: $blue;
                border-color: $blue;
            }
            .decrease:hover > span,
            .increase:hover > span {
                background-color: #fff;
            }  
        }
        
        @media (max-width: 1170px) {
            .item_image {
                margin: 0 55px 0 12px;
            }
            .item_name {
                width: 275px;
            }
            .counter {
                margin: 0 75px 0 46px;
            }
            .btn_delete {
                margin: 0 15px 0 35px;
            }
        }
        @media (max-width: 930px) {
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(6, max-content);
            .item_image {
                width: 334px;
                height: 400px;
                margin: 0 auto;
            }
            .item_name {
                text-align: center;
                margin: 15px 0;
            }
            .item_price {
                grid-column-start: 1;
                grid-row-end: 4;
                text-align: center;
            }
            .counter {
                grid-column-start: 1;
                grid-row-end: 5;
                margin: 15px 0;
            }
            .btn_delete {
                display: none;
            }
            .btn_delete_2 {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                width: 171px;
                background-color: $blue;
                color: #fff;
                cursor: pointer;
                span {
                    mask-image: url("../assets/img/nav/delete.svg");
                    background-color: #fff;
                    width: 13px;
                    height: 13px;
                    margin-right: 10px;
                }
            }
            .line {
                margin-top: 30px;
            }

        }
        @media (max-width: 510px) {
            .item_image {
                width: auto;
                height: 200px;
                margin: 0 auto;
            }
            .item_name {
                width: 250px;
            }

        }
}
.sum {
    font-size: 30px;
    line-height: 130%;
    display: flex;
    justify-content: end;
    margin: 30px 0 60px 0;

    @media(max-width: 1170px){
        font-size: 24px;
    }
    @media(max-width: 930px){
        justify-content: center;
    }
}    
</style>