<template>
    <section>
        <div class="modal">
            <div class="modal-wrapper">
                <div class="v-popup">
                    <div class="popup_header">
                        <div class="btn">
                            <router-link to="/"><button class="btn_close"><span></span></button></router-link>
                        </div>
                    </div>
                    <div class="popup_content">
                        <h2 class="popup_title">Спасибо <span class="popup_title_bold">{{name}}</span>, ваш заказ <span class="popup_title_bold">№ {{orderNumber}}</span> оформлен.</h2>
                        <p class="popup_text">
                            В ближайшее время мы свяжемся с вами по телефону <span class="popup_title_bold">{{phone}}</span> для его подтверждения.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'cartPopup',
    props: [
        'name', 'phone', 'orderNumber'
        ],
}
</script>

<style lang="scss">
$blue: #296DC1;
section {
    min-height: calc(100vh - 80px);
}
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    background-color: rgba(40, 40, 40, 0.4);
    width: 100%;
    height: 100%;
    display: table;
    transition: opacity 0.3s ease;
    
    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .v-popup {
    width: 510px;
    margin: 0 auto;
    background-color: #fff;
    transition: all 0.3s ease;

        .popup_content {
            padding: 0 33px 40px;
        
            .popup_title {
                font-weight: 500;
                font-size: 24px;
                line-height: 130%;
                text-align: center;
                margin-bottom: 20px;
            }
            .popup_title_bold {
                font-weight: 700;
            }
            .popup_text {
                font-size: 16px;
                line-height: 130%;
                font-weight: 500;
            }
        }

    .btn {
        display: flex;
        justify-content: end;
    }
    .btn_close {
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
    .btn_close:hover {
        background-color: $blue;
    }
    .btn_close:hover > span {
        background-color: #fff;
    }


    @media (max-width: 511px) {
        width: 290px;
        .popup_content {
            padding: 0 20px 30px;

            .popup_title {
                font-size: 18px
            }
            .popup_text {
                span {
                    display: block;
                }
            }
        }
    }
    }
}
</style>