<template>
<section class="block-with-filter" v-if="changeView === false">
  <section class="product__block">
    <div class="product__main" v-for="product in products" :key="product._id">
      <div class="product__card">
        <div class="card-info">
          <div class="card-info__icons">
            <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
          </div>
          <div class="card-info__small-icons">
            <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение" @click.prevent="addToComparison(product)">
            <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Избранное" @click.prevent="addToFavorite(product)">
          </div>
        </div>
        <nuxt-link :to="`/product-item/${product._id}`" class="link__to-item">{{ product.product_name || product.name }}</nuxt-link>
        <div class="card-info__buy">
          <p class="card-info__price">{{ product.product_price || product.price }}</p>
          <!-- Добавление в корзину через кнопки -->
          <addToCart :product="product" @updateCount="newCount"/>
          <button class="add-to-cart" @click.prevent="addToCart(product, numberCount)">
            <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
          </button>
        </div>
      </div>
    </div>
  </section>
</section>

<section class="block-with-filter-active" v-else>
  <section class="product__block-active">
    <div class="product__main-active" v-for="product in products" :key="product._id">
      <div class="product__card-active">
        <div class="card-info">

          <div class="card-info__icons">
            <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
          </div>

          <div class="product-info">
            <nuxt-link :to="`/product-item/${product._id}`" class="link__to-item">{{ product.product_name || product.name }}</nuxt-link>
            <div class="product-character">
              <div class="character">
                <p>Артикул</p>
                <span>{{product.article || product.art || "-"}}</span>
              </div>
              <div class="character">
                <p>Таблица фигур</p>
                <span>{{product.table_figure || product.tab_figure || product.figure_table || product.figure || "-"}}</span>
              </div>
              <div class="character">
                <p>Принцип устройства</p>
                <span>{{product.principe_device || "-"}}</span>
              </div>
              <div class="character">
                <p>DN, мм</p>
                <span>{{product.DN || "-"}}</span>
              </div>
              <div class="character">
                <p>PN, кгс/см²</p>
                <span>{{product.PN || "-"}}</span>
              </div>
              <allCharacteristics :product="product"/>
            </div>
          </div>
        </div>
        <div class="card-info__buy">
          <p class="card-info__price">{{ product.product_price || product.price }}</p>

          <addToCart :product="product" @updateCount="newCount"/>
          <div class="add-to-cart">
            <img class="add-btn" src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину" @click.prevent="addToCart(product, numberCount)">
            <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение" @click.prevent="addToComparison(product)">
            <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Избранное" @click.prevent="addToFavorite(product)">
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import allCharacteristics from '@/components/allCharacteristics.vue';
import addToCart from '@/components/addToCart.vue';

export default {
  props: ['products', 'changeView'],
  data() {
    return {
      linkName: '',
      numberCount: 1,
    }
  },
  components: {
    allCharacteristics,
    addToCart
  },
  mounted() {
    this.linkName = this.$route.name.substring(this.$route.name.indexOf("catalog") + 16);
    localStorage.setItem('linkName', this.linkName);
  },
  methods: {
    newCount(number) {
      this.numberCount = number;
    },
    addToCart(product, numberCount) {
      this.$store.commit('products/addToCart', { product, numberCount });
    },
    addToFavorite(product) {
      this.$store.commit('products/addToFavorite', product);
    },
    addToComparison(product) {
      this.$store.commit('products/addToComparison', product);
    }
  }
}
</script>

<style scoped lang="scss">
  .block-with-filter {
    display: flex;
    .product__block {
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .product__main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .product__card {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          padding-top: 25px;
          padding-left: 30px;
          padding-right: 20px;
          padding-bottom: 20px;
          max-width: 350px;
          margin-bottom: 40px;
          &:nth-child(3) {
            margin-right: 0;
          }
          &:nth-child(6) {
            margin-right: 0;
          }
          &:nth-child(9) {
            margin-right: 0;
          }
          &:nth-child(12) {
            margin-right: 0;
          }
          .card-info {
            display: flex;
            justify-content: center;
            .card-info__icons {
              margin-bottom: 15px;
            }
            .card-info__small-icons {
              position: absolute;
              right: 20px;
              top: 15px;
              display: flex;
              align-items: center;
              .icon__diff {
                height: 18px;
                margin-right: 10px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
              .icon__like {
                width: 30px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
            }
          }
          .link__to-item {
            @include font-light ();
            font-size: 14px;
            overflow: hidden;
            line-height: 18px;
            color: #000;
          }
          .card-info__buy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            .card-info__price {
              @include font-semibold ();
              font-size: 16px;
              line-height: 18px;
            }
            .card-info__add {
              border: 1px solid $text-gray-light;
              border-radius: 10px;
              padding: 10px 15px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 130px;
              input {
                @include font-semibold ();
                font-size: 16px;
                line-height: 18px;
                border: none;
                max-width: 30px;
                text-align: center;
                outline: none;
              }
              .item__delete {
                border: none;
                background: none;
                color: $text-gray-light;
                cursor: pointer;
              }
              .item__add {
                border: none;
                background: none;
                cursor: pointer;
              }
            }
            .add-to-cart {
              background: none;
              border: 1px solid $text-gray-light;
              border-radius: 10px;
              height: 100%;
              padding: 8px 7px;
              cursor: pointer;
            }
            &:before {
              content: '';
              display: block;
              position: absolute;
              width: 100%;
              height: 1px;
              background-color: $text-gray-light;
              right: 0px;
              bottom: 20%;
            }
          }
        }
      }
      .pagination__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid $text-gray-light;
        border-radius: 10px;
        padding: 15px 30px;
        .back__btn {
          display: flex;
          align-items: center;
          cursor: pointer;
          .prev-page {
            transform: rotate(180deg);
            margin-right: 20px;
          }
          span {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
        .pages__info {
          span {
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            color: $text-gray-light;
            margin-right: 10px;
          }
          input {
            max-width: 60px;
            border-radius: 10px;
            border: 1px solid $text-gray-light;
            outline: none;
            text-align: center;
            padding: 11px 20px;
            margin-right: 11px;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }
          }
          .pages {
            color: #000;
            margin-right: 25px;
          }
        }
        .next__btn {
          display: flex;
          align-items: center;
          cursor: pointer;
          span {
            margin-right: 20px;
          }
          span {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
      }
    }
  }

  .block-with-filter-active {
    display: block;
    .product__block-active {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      .product__main-active {
        display: flex;
        flex-direction: column;
        .product__card-active {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 20px;
          padding-left: 70px;
          padding-right: 60px;
          padding-bottom: 20px;
          width: 100%;
          margin-bottom: 40px;
          &:nth-child(3) {
            margin-right: 0;
          }
          &:nth-child(6) {
            margin-right: 0;
          }
          &:nth-child(9) {
            margin-right: 0;
          }
          &:nth-child(12) {
            margin-right: 0;
          }
          .card-info {
            display: flex;
            justify-content: center;
            .card-info__icons {
              margin-bottom: 15px;
              margin-right: 95px;
            }
            .card-info__small-icons {
              position: absolute;
              right: 20px;
              top: 15px;
              display: flex;
              align-items: center;
              .icon__diff {
                height: 18px;
                margin-right: 10px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
              .icon__like {
                width: 30px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
            }
            .product-info {
              max-width: 320px;
              .link__to-item {
                @include font-light ();
                font-size: 14px;
                overflow: hidden;
                line-height: 18px;
                color: #000;
              }
              .product-character {
                margin-top: 20px;
                .character {
                  display: flex;
                  p {
                    @include font-light();
                    font-size: 12px;
                    line-height: 18px;
                    color: $text-gray-light;
                    margin-right: 5px;
                  }
                  span {
                    @include font-regular();
                    font-size: 12px;
                    line-height: 18px;
                    color: #000;
                  }
                }
              }
            }
          }
          .card-info__buy {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: left;
            .card-info__price {
              @include font-semibold ();
              font-size: 16px;
              line-height: 18px;
              margin-bottom: 12px;
            }
            .add-to-cart {
              background: none;
              height: 100%;
              display: flex;
              align-items: center;
              .add-btn {
                cursor: pointer;
                border: 1px solid $text-gray-light;
                border-radius: 10px;
                padding: 8px;
                margin-right: 11px;
              }
              .icon__diff {
                height: 18px;
                margin-right: 10px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
              .icon__like {
                width: 30px;
                transition: .3s ease-in-out;
                cursor: pointer;
              }
            }
          }
        }
      }
      .pagination__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid $text-gray-light;
        border-radius: 10px;
        padding: 15px 30px;
        .back__btn {
          display: flex;
          align-items: center;
          cursor: pointer;
          .prev-page {
            transform: rotate(180deg);
            margin-right: 20px;
          }
          span {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
        .pages__info {
          span {
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            color: $text-gray-light;
            margin-right: 10px;
          }
          input {
            max-width: 60px;
            border-radius: 10px;
            border: 1px solid $text-gray-light;
            outline: none;
            text-align: center;
            padding: 11px 20px;
            margin-right: 11px;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }
          }
          .pages {
            color: #000;
            margin-right: 25px;
          }
        }
        .next__btn {
          display: flex;
          align-items: center;
          cursor: pointer;
          span {
            margin-right: 20px;
          }
          span {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
      }
    }
  }
</style>
