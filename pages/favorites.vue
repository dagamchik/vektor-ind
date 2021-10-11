<template>
  <div>
    <headerPage/>

    <div class="container">

      <div class="way__block">
        <div class="link__way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <p>Избранное</p>
        </div>
        <h2>Избранное</h2>
      </div>

      <div class="favorite__block" v-if="this.$store.state.products.favorites.length > 0">
        <div class="favorite__block-titles">
          <span>Наименование</span>
          <span style="flex-grow: 0.05;">Цена за ед.</span>
          <span>Удалить</span>
        </div>

        <div class="favorite__block-item" v-for="item of this.$store.state.products.favorites" :key="item._id">
          <div class="item">
            <img class="item-img" src="@/assets/images/main/image__category.png" alt="Фото">
            <span>{{item.product_name || item.name}} <p>Арт. {{item.article || item.art}}</p></span>
          </div>
          <span class="item-price">{{item.product_price || item.price}}</span>
          <button class="add-to-cart-btn" @click.prevent="addToCartFromFavorites(item)">
            <img class="to-cart-img" src="@/assets/images/main/add-to-cart.svg" alt="Корзина">
            В корзину
          </button>
          <img @click.prevent="removeItemFromFavorites(item)" class="item-delete" src="@/assets/images/main/delete.svg" alt="Удалить">
        </div>

      </div>

      <div class="favorite__block" v-else>
        <h1>Ваше "Избранное" пустое</h1>

        <p class="description">
          Вы всегда сможете выбрать что-нибудь подходящее из нашего ассортимента.
        </p>
        <p class="description">
          Для того, чтобы добавить товар в избранное, перейдите в <nuxt-link to="/catalog" class="to-catalog">каталог продукции</nuxt-link>.
        </p>

        <nuxt-link to="/" class="to-main">
          <svg class="arrow" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.6595 8.67803L17.22 1.23844C16.766 0.784533 16.0299 0.784533 15.576 1.23844C15.122 1.69244 15.122 2.4284 15.576 2.8824L21.0312 8.33758H1.16244C0.520492 8.33758 0 8.85807 0 9.50001C0 10.1419 0.520492 10.6624 1.16244 10.6624H21.0312L15.5762 16.1176C15.1222 16.5716 15.1222 17.3076 15.5762 17.7616C15.8031 17.9884 16.1007 18.102 16.3982 18.102C16.6956 18.102 16.9931 17.9884 17.2201 17.7616L24.6595 10.322C25.1135 9.86799 25.1135 9.13203 24.6595 8.67803Z" fill="white"/>
          </svg>

          <span>На главную</span>
        </nuxt-link>
      </div>
    </div>

    <footerComponent/>
  </div>
</template>

<script>
import headerPage from "@/components/header.vue";
import footerComponent from "@/components/footer.vue";

export default {
  data() {
    return {
    }
  },
  components: {
    headerPage,
    footerComponent,
  },
  methods: {
    removeItemFromFavorites(item) {
      this.$store.commit('products/removeItemFromFavorites', item);
    },
    addToCartFromFavorites(item) {
      this.$store.commit('products/addToCartFromFavorites', item);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
        for (let product of this.$store.state.products.cart) {
            total += product.totalPrice;
        }
      return total.toFixed(2);
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .container {
    .way__block {
      overflow: hidden;
      text-align: left;
      margin-bottom: 35px;
      margin-top: 30px;
      h2 {
        display: inline-block;
        vertical-align: middle;
        @include font-bold ();
        @include forH2 ();
      }
      &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        height: 1px;
        background-color: $text-gray-light;
        position: relative;
        margin-right: -100%;
        right: -8px;
        margin-top: 4px;
      }
      .link__way {
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
        .catalog__link {
          margin-left: 10px;
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

    .favorite__block {
      margin-bottom: 45px;
      max-width: 1150px;
      .favorite__block-titles {
        display: flex;
        justify-content: space-between;
        background-color: $text-blue-light;
        border-radius: 10px;
        padding: 25px 30px;
        margin-bottom: 15px;
        span {
          @include font-regular();
          font-size: 14px;
          line-height: 19px;
          color: $text-gray;
        }
      }
      .favorite__block-item {
        display: flex;
        border: 1px solid $text-gray-light;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 20px;
        padding-bottom: 15px;
        margin-bottom: 15px;
        .item {
          display: flex;
          align-items: center;
          .item-img {
            margin-right: 25px;
          }
          span {
            text-align: left;
            max-width: 272px;
            @include font-regular();
            font-size: 14px;
            line-height: 18px;
            p {
              @include font-light();
              font-size: 14px;
              line-height: 18px;
              color: $text-gray;
              margin-top: 10px;
            }
          }
        }
        span {
        }
        .item-delete {
          cursor: pointer;
        }
        .add-to-cart-btn {
          background: none;
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          display: flex;
          align-items: center;
          @include font-semibold();
          font-size: 14px;
          line-height: 18px;
          padding: 13px 45px;
          cursor: pointer;
          transition: .3s ease-in-out;
          &:hover {
            background-color: $text-blue-light;
          }
          .to-cart-img {
            margin-right: 20px;
          }
        }
      }

        h1 {
          @include font-semibold();
          font-size: 28px;
          line-height: 28px;
          margin-bottom: 40px;
        }
        .description {
          @include font-regular();
          font-size: 18px;
          line-height: 28px;
          .to-catalog {
            color: $text-blue;
            border-bottom: 1px solid $text-blue;
          }
        }
        .to-main {
          border: none;
          border-radius: 10px;
          background-color: $text-blue;
          color: #fff;
          display: flex;
          align-items: center;
          max-width: 185px;
          padding: 10px 25px;
          cursor: pointer;
          transition: .3s ease-in-out;
          margin-top: 40px;
          .arrow {
            margin-right: 15px;
          }
          &:hover {
            transform: scale(1.03);
          }
        }

    }
  }
</style>
