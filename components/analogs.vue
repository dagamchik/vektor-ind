<template>
  <div>
    <section class="bestsellers__block">
      <div class="container">
        <div class="bestsellers__title">
          <h2>Модификации и аналоги</h2>
        </div>
        <div class="bestsellers__main">
          <div class="bestsellers__card" v-for="product in modificationArr" :key="product._id">
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
              <p class="card-info__price">{{product.price || product.product_price}}</p>
              <!-- Добавление в корзину через кнопки -->
              <addToCart :product="product" @updateCount="newCount"/>
              <button class="add-to-cart" @click.prevent="addToCart(product, numberCount)">
                <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modificationArr: [],
      numberCount: 1,
    }
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
  },
  mounted() {
    this.modificationArr = this.$store.state.products.products[0].slice(0, 4);
    console.log(this.modificationArr)
  }
}
</script>

<style lang="scss">
  .bestsellers__block {
    margin-bottom: 70px;
    .bestsellers__title {
      overflow: hidden;
      text-align: left;
      margin-bottom: 35px;
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
    }
    .bestsellers__main {
      display: flex;
      justify-content: space-between;
      .bestsellers__card {
        border: 1px solid $text-gray-light;
        border-radius: 10px;
        position: relative;
        padding-top: 25px;
        padding-left: 30px;
        padding-right: 20px;
        padding-bottom: 20px;
        margin-right: 25px;
        .link__to-item {
          @include font-light ();
          font-size: 14px;
          overflow: hidden;
          line-height: 18px;
          color: #000;
        }
        &:nth-child(4) {
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
        p {
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
  }
</style>
