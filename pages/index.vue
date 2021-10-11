<template>
  <div>
    <headerPage/>
    <main>
      <div class="container">
        <section class="info__block">
          <h1>Низкие цены, большой ассортимент трубопроводной арматуры и быстрые сроки доставки</h1>
          <nuxt-link class="info__block-button" to="/catalog">
            Перейти к покупкам
            <img class="info__block-icon" src="@/assets/images/main/arrow-right.svg" alt="Стрелка вправо">
          </nuxt-link>
        </section>
        <section class="product__categories">
          <h2>Категории товаров</h2>
        </section>

        <productCategory/>

        <section class="special__offer-block">
          <h3>Нашли дешевле?</h3>
          <p>Напишите нам, и если предложение соответствует действительности, <span>мы снизим цену!</span></p>
          <button class="special__offer-btn">
            Написать
          </button>
        </section>

        <section class="bestsellers__block">
          <div class="bestsellers__title">
            <h2>Хиты продаж</h2>
          </div>
          <div class="bestsellers__main">
            <div class="bestsellers__card">
              <div class="card-info">
                <div class="card-info__icons">
                  <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
                </div>
                <div class="card-info__small-icons">
                  <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение">
                  <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Сравнение">
                </div>
              </div>
              <p>Задвижка параллельная литая с выдвижным шпинделем фланцевая ручная 30ч6бр DN 150 PN 1,0 МПа У3, корпус чугун, класс герметичности «D» по ГОСТ 9544-2015</p>
              <div class="card-info__buy">
                <p class="card-info__price">11630</p>
                <div class="card-info__add">
                  <button class="item__delete">&minus;</button>
                  <input class="item__count" placeholder="1"/>
                  <button class="item__add">
                    <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
                  </button>
                </div>
                <button class="add-to-cart">
                  <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
                </button>
              </div>
            </div>
            <div class="bestsellers__card">
              <div class="card-info">
                <div class="card-info__icons">
                  <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
                </div>
                <div class="card-info__small-icons">
                  <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение">
                  <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Сравнение">
                </div>
              </div>
              <p>Задвижка параллельная литая с выдвижным шпинделем фланцевая ручная 30ч6бр DN 150 PN 1,0 МПа У3, корпус чугун, класс герметичности «D» по ГОСТ 9544-2015</p>
              <div class="card-info__buy">
                <p class="card-info__price">11630</p>
                <div class="card-info__add">
                  <button class="item__delete">&minus;</button>
                  <input class="item__count" placeholder="1"/>
                  <button class="item__add">
                    <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
                  </button>
                </div>
                <button class="add-to-cart">
                  <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
                </button>
              </div>
            </div>
            <div class="bestsellers__card">
              <div class="card-info">
                <div class="card-info__icons">
                  <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
                </div>
                <div class="card-info__small-icons">
                  <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение">
                  <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Сравнение">
                </div>
              </div>
              <p>Задвижка параллельная литая с выдвижным шпинделем фланцевая ручная 30ч6бр DN 150 PN 1,0 МПа У3, корпус чугун, класс герметичности «D» по ГОСТ 9544-2015</p>
              <div class="card-info__buy">
                <p class="card-info__price">11630</p>
                <div class="card-info__add">
                  <button class="item__delete">&minus;</button>
                  <input class="item__count" placeholder="1"/>
                  <button class="item__add">
                    <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
                  </button>
                </div>
                <button class="add-to-cart">
                  <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
                </button>
              </div>
            </div>
            <div class="bestsellers__card">
              <div class="card-info">
                <div class="card-info__icons">
                  <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
                </div>
                <div class="card-info__small-icons">
                  <img class="icon__diff" src="@/assets/images/header/icon-diff.svg" alt="Сравнение">
                  <img class="icon__like" src="@/assets/images/header/icon-like.svg" alt="Сравнение">
                </div>
              </div>
              <p>Задвижка параллельная литая с выдвижным шпинделем фланцевая ручная 30ч6бр DN 150 PN 1,0 МПа У3, корпус чугун, класс герметичности «D» по ГОСТ 9544-2015</p>
              <div class="card-info__buy">
                <p class="card-info__price">11630</p>
                <div class="card-info__add">
                  <button class="item__delete">&minus;</button>
                  <input class="item__count" placeholder="1"/>
                  <button class="item__add">
                    <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
                  </button>
                </div>
                <button class="add-to-cart">
                  <img src="@/assets/images/main/add-to-cart.svg" alt="Добавить в корзину">
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section class="subscription__block">
        <div class="container subscription__container">
          <div class="subscription__main-info">
            <img src="@/assets/images/main/subscription.svg" alt="Подписка">
            <div class="subscription__title">
              <h2>ПОДПИШИТЕСЬ НА РАССЫЛКУ</h2>
              <p>И будьте в курсе всех новинок и акций</p>
            </div>
          </div>
          <div class="subscription__button">
            <img src="@/assets/images/main/mail-icon.svg" alt="Иконка почты">
            <input class="subscribe-input" type="text" placeholder="E-mail">
            <button class="subscribe-btn">Подписаться</button>
          </div>
        </div>
      </section>

      <section class="about__company">
        <div class="container">
          <div class="about__company-title">
            <h2>О компании</h2>
          </div>
          <div class="about__company-info">
            <p>ООО «Вектор Индастриал» — является комплексным поставщиком трубопроводной арматуры для газовой, нефтяной, химической и энергетической отраслей, горюче-смазочных материалов торговых марок Mobil, Shell, Total, Elf, FUCHS, Castrol, Atlas Copco, Газпромнефть, Лукойл, Роснефть и прочих, технических жидкостей, а также магистральных, гидравлических, воздушных фильтров, сепараторов и сервисных наборов и запчастей для компрессоров.</p>
            <p>Наша главная цель — <strong>комплексное и оперативное решение задач клиентов.</strong> Вам не придется тратить время на поиск нескольких поставщиков.</p>
          </div>
          <div class="about__company-pay">
            <div class="pay-block">
              <img class="pay-icon" src="@/assets/images/main/advantages/wallet.svg" alt="Кошелек">
              <p>Наличный и безналичный расчёт</p>
            </div>
            <div class="pay-block">
              <img class="pay-icon" src="@/assets/images/main/advantages/delivery.svg" alt="Доставка">
              <p>Доставка по всей России</p>
            </div>
            <div class="pay-block">
              <img class="pay-icon" src="@/assets/images/main/advantages/manufacture.svg" alt="Производитель">
              <p>Прямые поставки от производителя</p>
            </div>
            <div class="pay-block">
              <img class="pay-icon" src="@/assets/images/main/advantages/warranty.svg" alt="Гарантия">
              <p>Гарантия качества всех товаров</p>
            </div>
            <div class="pay-block">
              <img class="pay-icon" src="@/assets/images/main/advantages/inventory.svg" alt="Ассортимент">
              <p>Широкий ассортимент</p>
            </div>
          </div>
        </div>
      </section>

      <section class="official__dillers">
        <div class="container">
          <div class="official__dillers-title">
            <h2>Мы являемся официальными диллерами</h2>
          </div>
          <div class="official__dillers-main">
            <img class="dillers-icon" src="@/assets/images/main/dillers/atlas.png" alt="atlas">
            <img class="dillers-icon" src="@/assets/images/main/dillers/castrol.png" alt="castrol">
            <img class="dillers-icon" src="@/assets/images/main/dillers/elf.jpg" alt="elf">
            <img class="dillers-icon" src="@/assets/images/main/dillers/fuchs.png" alt="fuchs">
            <img class="dillers-icon" src="@/assets/images/main/dillers/mobil.png" alt="mobil">
            <img class="dillers-icon" src="@/assets/images/main/dillers/rosneft.png" alt="rosneft">
          </div>
        </div>
      </section>

      <footerComponent/>
    </main>
  </div>
</template>

<script>
import headerPage from "@/components/header.vue";
import productCategory from "@/components/productCategory.vue";
import footerComponent from "@/components/footer.vue";

export default {
  components: {
    headerPage,
    productCategory,
    footerComponent,
  },
}
</script>

<style lang="scss">
  .container {
    max-width: 1600px;
    margin: 0 auto;
    .info__block {
      background: url('@/assets/images/main/background.png') no-repeat;
      padding-top: 40px;
      padding-left: 55px;
      padding-right: 300px;
      padding-bottom: 32px;
      margin-top: 55px;
      margin-bottom: 40px;
      h1 {
        @include font-bold ();
        color: #fff;
        @include forH1 ();
      }
      .info__block-button {
        @include font-regular ();
        font-size: 18px;
        line-height: 24px;
        color: #fff;
        margin-top: 25px;
        padding: 14px;
        display: flex;
        align-items: center;
        border: 1px solid #fff;
        border-radius: 10px;
        background-color: transparent;
        cursor: pointer;
        transition: .3s ease-in-out;
        max-width: 270px;
        &:hover {
          transform: scale(1.02);
        }
        .info__block-icon {
          margin-left: 25px;
        }
      }
    }
    .product__categories {
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
    .special__offer-block {
      background-color: rgba(31, 75, 153, 0.1);
      padding: 45px 55px;
      margin-bottom: 60px;
      h3 {
        @include forH2 ();
        @include font-bold ();
        line-height: 52px;
        color: $text-blue;
      }
      p {
        color: $text-gray;
        @include font-light ();
        font-size: 24px;
        margin-bottom: 15px;
        span {
          @include font-bold ();
          color: $text-blue;
        }
      }
      .special__offer-btn {
        background-color: $text-blue;
        color: #fff;
        padding: 10px 35px;
        border: none;
        border-radius: 10px;
        @include font-semibold ();
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
        transition: .3s ease-in-out;
        &:hover {
          transform: scale(1.02);
        }
      }
    }
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
  }
  .subscription__block {
    margin-bottom: 40px;
    background-color: $text-blue-light;
    .subscription__container {
      display: flex;
      justify-content: space-between;
      padding-top: 65px;
      padding-bottom: 65px;
      .subscription__main-info {
        display: flex;
        align-items: center;
        .subscription__title {
          margin-left: 35px;
          h2 {
            @include forH2 ();
            @include font-bold ();
            color: $text-blue;
          }
          p {
            @include font-light ();
            font-size: 24px;
            line-height: 33px;
            color: #000;
          }
        }
      }
      .subscription__button {
        border: 1px solid $text-gray-light;
        border-radius: 10px;
        padding-right: 5px;
        padding-left: 20px;
        max-height: 50px;
        display: flex;
        align-items: center;
        .subscribe-input {
          margin-left: 10px;
          border: none;
          outline: none;
          background-color: transparent;
        }
        .subscribe-btn {
          background-color: $text-blue;
          color: #fff;
          border: none;
          border-radius: 10px;
          text-align: center;
          padding: 10px 20px;
          cursor: pointer;
        }
      }
    }
  }

  .about__company {
    margin-bottom: 40px;
    .container {
      .about__company-title {
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
      .about__company-info {
        @include font-regular ();
        font-size: 16px;
        line-height: 24px;
        p {
          margin-bottom: 40px;
        }
      }
      .about__company-pay {
        display: flex;
        justify-content: space-between;
        position: relative;
        .pay-block {
          display: flex;
          align-items: center;
          max-width: 270px;
          @include font-regular ();
          font-size: 16px;
          line-height: 24px;
          .pay-icon {
            width: 45px;
            height: 45px;
            margin-right: 35px;
          }
        }
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: $text-gray-light;
        top: -20px;
      }
      }
    }
  }

  .official__dillers {
    margin-bottom: 40px;
    .container {
      .official__dillers-title {
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
      .official__dillers-main {
        display: flex;
        justify-content: space-between;
        .dillers-icon {
          filter: grayscale(100%);
          cursor: pointer;
          transition: .3s ease-in-out;
          &:hover {
            filter: grayscale(0%);
          }
        }
      }
    }
  }
</style>
