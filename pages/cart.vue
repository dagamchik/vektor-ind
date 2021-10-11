<template>
  <div>
    <headerPage/>

    <div class="container">

      <div class="way__block">
        <div class="link__way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <p>Корзина</p>
        </div>
        <h2>Корзина</h2>
      </div>

      <div class="cart__block" v-if="this.$store.state.products.cart.length > 0">
        <div class="cart__block-titles">
          <span>Наименование</span>
          <span>Цена за ед.</span>
          <span>Количество</span>
          <span>Сумма всего</span>
          <span>Наличие</span>
          <span>Удалить</span>
        </div>

        <div class="cart__block-item" v-for="item of this.$store.state.products.cart" :key="item._id">
          <div class="item">
            <img class="item-img" src="@/assets/images/main/image__category.png" alt="Фото">
            <span>{{item.product_name || item.name}} <p>Арт. {{item.article || item.art}}</p></span>
          </div>
          <span class="item-price">{{item.product_price || item.price}}</span>
          <div class="add-count">
            <button class="item__delete" @click.prevent="deleteCount(item)">&minus;</button>
            <input class="item__count" :placeholder="`${item.quantity}`"/>
            <button class="item__add" @click.prevent="addCount(item)">
              <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
            </button>
          </div>
          <span class="total-price" v-if="item.price">{{item.quantity * Number(item.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))}} ₽</span>
          <span class="total-price" v-else>{{item.quantity * Number(item.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))}} ₽</span>

          <span class="availability">В наличии</span>
          <img @click.prevent="removeItem(item)" class="item-delete" src="@/assets/images/main/delete.svg" alt="Удалить">
        </div>

      </div>

      <div class="main__info" v-if="this.$store.state.products.cart.length > 0">

        <div class="personal__info">
          <div class="personal__name">
            <div class="info">
              <div>Фамилия <span>*</span></div>
              <input type="text" placeholder="Введите фамилию" v-model="surname" maxlength="20">
              <div class="error" v-show='surname && !isSurnameValid'>
                <span>Некорректная фамилия</span>
              </div>
            </div>
            <div class="info">
              <div>Имя <span>*</span></div>
              <input type="text" placeholder="Введите имя" v-model="name" maxlength="20">
              <div class="error" v-show='name && !isNameValid'>
                <span>Некорректное имя</span>
              </div>
            </div>
          </div>
          <div class="personal__contacts">
            <div class="info">
              <div>Email <span>*</span></div>
              <input type="email" placeholder="Введите email" v-model="email">
              <div class="error" v-show='email && !isEmailValid'>
                <span>Некорректный email</span>
              </div>
            </div>
            <div class="info">
              <div>Телефон <span>*</span></div>
              <input type="number" placeholder="+7(999)-999-99-99" v-model="phone" max="22">
              <div class="error" v-show='phone && !isPhoneValid'>
                <span>Некорректный номер телефона</span>
              </div>
            </div>
          </div>

          <p>Данные для доставки</p>

          <div class="city__info">
            <div class="info">
              <div>Область</div>
              <input type="text" placeholder="Введите область" v-model="region">
            </div>
            <div class="info">
              <div>Город</div>
              <input type="text" placeholder="Введите город" v-model="city">
            </div>
            <div class="info">
              <div>Отделение</div>
              <input type="text" placeholder="Введите отделение">
            </div>
          </div>
          <div class="home__info">
            <div class="info">
              <div>Улица</div>
              <input type="text" placeholder="Введите улицу" v-model="street">
            </div>
            <div class="info">
              <div>Дом</div>
              <input type="number" placeholder="Введите номер дома" v-model="home">
            </div>
            <div class="info">
              <div>Квартира</div>
              <input type="number" placeholder="Введите номер квартиры" v-model="apartament">
            </div>
          </div>
        </div>

        <div class="order__info">
          <p class="order__title">Ваш заказ</p>
          <div class="order__count">
            <p>Всего наименований:</p>
            <p>{{this.$store.state.products.cart.length}}</p>
          </div>
          <div class="price">
            <p>Сумма заказа:</p>
            <p>{{totalPrice}} ₽</p>
          </div>
          <div class="total__price">
            <p>Всего к оплате:</p>
            <span>{{totalPrice}} ₽</span>
          </div>
          <a href="/order-page" class="add-order-btn" @click="successOrder({surname, name, email, phone, region, city, home, street, apartament})" v-if="isPhoneValid === true & isNameValid === true & isSurnameValid === true & isEmailValid === true">Оформить заказ</a>
          <a href="/order-page" class="add-order-btn disabled" @click.prevent="popUp" v-else>Оформить заказ</a>
          <!-- МОДАЛЬНОЕ ОКНО -->
          <div v-if="show" class="modal-shadow" @click.self="closeModal">
              <div class="modal">
                  <div class="modal-close" @click="closeModal(); goScroll()">&#10006;</div>
                  <slot name="title">
                      <h3 class="modal-title"></h3>
                  </slot>
                  <slot name="body">
                      <div class="modal-content">
                          Пожалуйста, заполните корректно основные поля
                      </div>
                  </slot>
                  <slot name="footer">
                      <div class="modal-footer">
                          <button class="modal-footer__button" @click="closeModal(); goScroll()">
                              Ок
                          </button>
                      </div>
                  </slot>
              </div>
          </div>
        </div>
      </div>



      <div class="cart__block" v-else>
        <h1>Ваше корзина пуста</h1>

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
      email: '',
      name: '',
      surname: '',
      phone: '',
      apartament: '',
      home: '',
      street: '',
      region: '',
      city: '',
      show: false,
    }
  },
  components: {
    headerPage,
    footerComponent,
  },
  methods: {
    removeItem(item) {
      this.$store.commit('products/removeItem', item)
    },
    addCount(item) {
      this.$store.commit('products/addCount', item);
      this.$store.commit('products/updateTotalPrice', item)
    },
    deleteCount(item) {
      this.$store.commit('products/deleteCount', item)
      this.$store.commit('products/updateTotalPrice', item)
    },
    successOrder({surname, name, email, phone, region, city, home, street, apartament}) {
      this.$store.commit('products/successOrder');
      this.$store.commit('products/saveName', {surname, name, email, phone, region, city, home, street, apartament});
    },
    showModal() {
      this.show = true;
      this.noScroll();
    },
    closeModal() {
      this.show = false;
    },
    popUp() {
      this.showModal();
    },
    noScroll() {
      document.body.style.overflow = 'hidden';
    },
    goScroll() {
      document.body.style.overflow = "scroll"
    },
    updateTotalPrice(item) {
      if (item.price) {
        return item.quantity * Number(item.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
      } else {
        return item.quantity * Number(item.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))
      }
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
        for (let product of this.$store.state.products.cart) {
            total += product.totalPrice;
        }
      return total.toFixed(2);
    },
    isEmailValid() {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
    },
    isPhoneValid() {
        return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(this.phone);
    },
    isNameValid() {
      return /^[А-ЯЁ][а-яё]+$/.test(this.name);
    },
    isSurnameValid() {
      return /^[А-ЯЁ][а-яё]+$/.test(this.surname);
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

    .cart__block {
      margin-bottom: 45px;
      .cart__block-titles {
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
          &:first-child {
            flex-grow: 0.24;
          }
        }
      }
      .cart__block-item {
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
        input {
          @include font-regular();
          font-size: 14px;
          line-height: 18px;
          border: none;
          max-width: 30px;
          text-align: center;
          outline: none;
        }
        .total-price {
          flex-grow: 0.02;
        }
        .availability {
          flex-grow: 0.05;
        }
        .add-count {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 130px;
          margin-right: 30px;
          span {
            @include font-semibold ();
            font-size: 16px;
            line-height: 18px;
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
        .item-delete {
          cursor: pointer;
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

    .main__info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      .personal__info {
        .personal__name {
          display: flex;
          .info {
            display: flex;
            flex-direction: column;
            margin-right: 30px;
            margin-bottom: 20px;
            div {
              margin-bottom: 10px;
              @include font-regular();
              font-size: 14px;
              line-height: 19px;
              span {
                color: red;
              }
            }
            input {
              padding: 15px 20px;
              text-align: left;
              background-color: $background-input;
              outline: none;
              border: none;
              border-radius: 10px;
            }
          }
        }
        .personal__contacts {
          display: flex;
          margin-bottom: 50px;
          .info {
            display: flex;
            flex-direction: column;
            margin-right: 30px;
            div {
              margin-bottom: 10px;
              @include font-regular();
              font-size: 14px;
              line-height: 19px;
              span {
                color: red;
              }
            }
            input {
              padding: 15px 20px;
              text-align: left;
              background-color: $background-input;
              outline: none;
              border: none;
              border-radius: 10px;
            }
          }
        }
        p {
          @include font-regular();
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 20px;
        }
        .city__info {
          display: flex;
          margin-bottom: 20px;
          .info {
            display: flex;
            flex-direction: column;
            margin-right: 30px;
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            div {
              margin-bottom: 10px;
              span {
                color: red;
              }
            }
            input {
              padding: 15px 20px;
              text-align: left;
              background-color: $background-input;
              outline: none;
              border: none;
              border-radius: 10px;
            }
          }
        }
        .home__info {
          display: flex;
          .info {
            display: flex;
            flex-direction: column;
            margin-right: 30px;
            @include font-regular();
            font-size: 14px;
            line-height: 19px;
            div {
              margin-bottom: 10px;
              span {
                color: red;
              }
            }
            input {
              padding: 15px 20px;
              text-align: left;
              background-color: $background-input;
              outline: none;
              border: none;
              border-radius: 10px;
            }
          }
        }
      }
      .order__info {
        border: 1px solid $text-gray-light;
        border-radius: 10px;
        padding: 27px 30px;
        max-height: 240px;
        .order__title {
          @include font-semibold();
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 20px;
        }
        .order__count {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          p {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
        .price {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          p {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
        .nds-price {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          p {
            @include font-light();
            font-size: 14px;
            line-height: 19px;
          }
        }
        .total__price {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          p {
            @include font-regular();
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
        .add-order-btn {
          border: none;
          border-radius: 10px;
          background-color: $text-blue;
          color: #fff;
          padding: 14px 110px;
          @include font-semibold();
          font-size: 16px;
          line-height: 22px;
          cursor: pointer;
          transition: .3s ease-in-out;
          &:hover {
            transform: scale(1.02);
          }
        }
        .disabled {
          background-color: $text-gray;
        }
      }
    }
  }
</style>
