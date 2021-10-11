<template>
  <div>
    <headerPage/>

    <div class="container order__container">

      <div class="way-block">
        <div class="link-way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <p>Оформление заказа</p>
        </div>
      </div>

      <div class="order__success">
        <h2>Ваш заказ оформлен <img src="@/assets/images/main/success.svg" alt="Зеленая галочка"></h2>
        <p>Заказ #{{Math.floor(Math.random() * 1000)}} от {{new Date().toLocaleDateString()}} г. успешно сформирован</p>
      </div>

      <div class="order__main">
        <div class="order__left-block">

          <div class="order__titles">
            <span>Наименование</span>
            <span>Цена за ед.</span>
            <span>Количество</span>
            <span>Сумма всего</span>
          </div>

          <div class="order__items">

            <div class="item" v-for="product in this.$store.state.products.successOrderItems" :key="product._id">
              <div class="item-info">
                <img class="item-img" src="@/assets/images/main/image__category.png" alt="Фото">
                <div class="item-name">
                  <p>{{product.name || product.product_name}}</p>
                  <span>Арт. {{product.article || product.art}}</span>
                </div>
              </div>

              <span class="item-price">{{product.product_price || product.price}}</span>

              <span class="item-count">{{product.quantity}}</span>

              <span class="item-total-price" v-if="product.price">{{product.quantity * Number(product.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))}} ₽</span>
              <span class="item-total-price" v-else>{{product.quantity * Number(product.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))}} ₽</span>
            </div>

          </div>

        </div>
        <div class="order__right-block">
          <div class="right-block-main">
            <h3 class="personal-info">Информация о заказчике</h3>
            <p>{{this.$store.state.products.personSurname}} {{this.$store.state.products.personName}}</p>
            <p>{{this.$store.state.products.personPhone}}</p>
            <p>{{this.$store.state.products.personEmail}}</p>
            <p class="address" v-if="this.$store.state.products.personRegion">{{this.$store.state.products.personRegion}}, {{this.$store.state.products.personCity}}, {{this.$store.state.products.personStreet}}, {{this.$store.state.products.personHome}}</p>
            <p class="address" v-else>Нам не совсем были понятны данные по адресу, уточним у вас через менеджера, спасибо за заказ!</p>
            <p class="info">По вопросам оплаты и доставки в ближайшее время с Вами свяжется наш менеджер</p>
          </div>
          <div class="right-block-total">
            <p>Итого:</p>
            <span>{{totalPrice}} ₽</span>
          </div>
        </div>
      </div>
    </div>

    <footerComponent/>
  </div>
</template>

<script>
import headerPage from "@/components/header.vue";
import footerComponent from "@/components/footer.vue"

export default {
  components: {
    headerPage,
    footerComponent,
  },
  computed: {
    totalPrice() {
      let total = 0;
        for (let product of this.$store.state.products.successOrderItems) {
            total += product.totalPrice;
        }
      return total.toFixed(2);
    },
  }
}
</script>

<style lang="scss">
  .order__container {
    margin-bottom: 50px;
    .way-block {
      overflow: hidden;
      text-align: left;
      margin-bottom: 35px;
      margin-top: 30px;
      .link-way {
        @include font-light ();
        font-size: 14px;
        line-height: 19px;
        color: $text-gray-light;
        display: flex;
        margin-bottom: 20px;
        .main__link {
          @include font-light ();
          font-size: 14px;
          line-height: 19px;
          color: $text-gray-light;
          margin-right: 10px;
        }
        p {
          margin-left: 10px;
        }
      }
    }

    .order__success {
      margin-bottom: 30px;
      h2 {
        margin-bottom: 15px;
        @include font-bold();
        font-size: 24px;
        line-height: 33px;
        color: $text-blue;
        display: flex;
        align-items: center;
        img {
          margin-left: 15px;
        }
      }
      p {
        @include font-regular();
        font-size: 18px;
        line-height: 24px;
      }
    }

    .order__main {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .order__left-block {
        flex: 3;
        margin-right: 25px;
        .order__titles {
          border-radius: 10px;
          padding-top: 25px;
          padding-bottom: 25px;
          padding-left: 30px;
          padding-right: 85px;
          background-color: $text-blue-light;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          span {
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            color: $text-gray;
            &:nth-child(1) {
              flex-grow: 0.4;
            }
          }
        }
        .order__items {
          .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px;
            border: 1px solid $text-gray-light;
            margin-bottom: 15px;
            padding-top: 15px;
            padding-left: 15px;
            padding-bottom: 15px;
            padding-right: 100px;
            .item-info {
              display: flex;
              align-items: center;
              .item-name {
                max-width: 272px;
                p {
                  @include font-regular();
                  font-size: 14px;
                  line-height: 18px;
                  margin-bottom: 10px;
                }
                span {
                  @include font-light();
                  font-size: 14px;
                  line-height: 18px;
                  color: $text-gray-light;
                }
              }
            }
            .item-price {

            }
            .item-count {

            }
            .item-total-price {

            }
          }
        }
      }
      .order__right-block {
        flex: 1;
        .right-block-main {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          margin-bottom: 20px;
          padding-top: 27px;
          padding-bottom: 27px;
          padding-left: 30px;
          padding-right: 40px;
          .personal-info {
            @include font-semibold ();
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 20px;
          }
          p {
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            color: $text-gray-light;
            margin-bottom: 10px;
          }
          .address {
            margin-bottom: 45px;
          }
          .info {
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            color: #000;
            position: relative;
            &:before {
              content: '';
              width: 100%;
              position: absolute;
              height: 1px;
              background-color: $text-gray-light;
              top: -20px;
            }
          }
        }
        .right-block-total {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          padding: 13px 30px;
          display: flex;
          justify-content: space-between;
          p {
            @include font-semibold();
            font-size: 16px;
            line-height: 22px;
          }
          span {
            @include font-semibold();
            font-size: 16px;
            line-height: 22px;
            color: $text-blue;
          }
        }
      }
    }
  }
</style>
