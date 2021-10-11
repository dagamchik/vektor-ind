<template>
  <div>
    <headerPage/>

    <section class="product__item">
    <div class="container product__item-container">

      <div class="way__block">
        <div class="link__way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <nuxt-link to="/catalog" class="catalog__link">Каталог</nuxt-link> - <nuxt-link to="/catalog-chapter" class="catalog__link">Задвижки</nuxt-link> - <p>Задвижка параллельная литая</p>
        </div>
      </div>

      <div class="product__block-top">
        <div class="product__item-img">
          <img class="item-img" src="@/assets/images/main/item-img.png" alt="Фото">
        </div>
        <div class="product__item-info">
          <h2>
            Задвижка параллельная литая с выдвижным шпинделем фланцевая ручная 30ч6бр DN 150 PN 1,0 МПа У3, корпус чугун, класс герметичности «D» по ГОСТ 9544-2015
          </h2>
          <div class="item__main-info">
            <span>Арт. A00000000026302</span>
            <p>11630 ₽ <span>(за штуку)</span></p>
            <div><img class="icon-instock" src="@/assets/images/main/instock.svg" alt="Галочка"> В наличии</div>
          </div>
          <div class="add-to-cart">
            <p>Кол-во товара:</p>
            <div class="card-info">
              <div class="add-count">
                <button class="item__delete">&minus;</button>
                <input class="item__count" placeholder="1"/>
                <button class="item__add">
                  <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
                </button>
              </div>
              <div class="card-price">34890 ₽</div>
            </div>
            <button class="add-to-cart-btn">
              <img class="to-cart-img" src="@/assets/images/main/add-to-cart.svg" alt="Корзина">
              В корзину
            </button>
          </div>
        </div>
      </div>

      <div class="product__block-bottom">
        <div id="tabs" class="container">

          <div class="tabs">
              <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Характеристики</a>
              <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Чертежи</a>
              <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Описание</a>
              <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Доставка и оплата</a>
          </div>

          <div class="content">
              <div v-if="activetab === 1" class="tabcontent">
                <div class="characteristics">
                  <div class="info-gray">
                    <p>Артикул</p>
                    <span>A00000000026303</span>
                  </div>
                  <div class="info-white">
                    <p>Таблица фигур</p>
                    <span>30чббр</span>
                  </div>
                  <div class="info-gray">
                    <p>Вид затвора</p>
                    <span>Параллельная</span>
                  </div>
                  <div class="info-white">
                    <p>Тип присоединения</p>
                    <span>Фланцевое</span>
                  </div>
                  <div class="info-gray">
                    <p>DN, мм</p>
                    <span>200</span>
                  </div>
                  <div class="info-white">
                    <p>Материал корпуса</p>
                    <span>Чугун</span>
                  </div>
                  <div class="info-gray">
                    <p>Температура рабочей среды, °С</p>
                    <span>От -15 до +225</span>
                  </div>
                  <div class="info-white">
                    <p>Климатическое исполнение</p>
                    <span>УЗ</span>
                  </div>
                  <div class="info-gray">
                    <p>Приемка</p>
                    <span>ОТК</span>
                  </div>
                  <div class="info-white">
                    <p>Назначенный ресурс, циклов</p>
                    <span>1700</span>
                  </div>
                  <div class="info-gray">
                    <p>Гарантия</p>
                    <span>12 месяцев со дня ввода в эксплуатацию, но не более 18 месяцев со дня отгрузки потребителю</span>
                  </div>
                  <div class="info-white">
                    <p>Страна-производитель</p>
                    <span>Россия</span>
                  </div>
                  <div class="info-gray">
                    <p>Стандарт</p>
                    <span>ТУ 3741-001-09212465-2016</span>
                  </div>
                  <div class="info-white">
                    <p>Расположение ходового узла</p>
                    <span>С выдвижным шпинделем</span>
                  </div>
                  <div class="info-gray">
                    <p>Тип привода</p>
                    <span>Ручной</span>
                  </div>
                  <div class="info-white">
                    <p>PN, кгс/см2</p>
                    <span>10</span>
                  </div>
                  <div class="info-gray">
                    <p>Рабочая среда</p>
                    <span>Вода, пар, жидкие среды не агрессивные к материалам изделия</span>
                  </div>
                  <div class="info-white">
                    <p>Температура окружающего воздуха, °С</p>
                    <span>От -15 до +40</span>
                  </div>
                  <div class="info-gray">
                    <p>Класс герметичности</p>
                    <span>D</span>
                  </div>
                  <div class="info-white">
                    <p>Назначенный срок службы, лет</p>
                    <span>10</span>
                  </div>
                  <div class="info-gray">
                    <p>Наработка на отказ, циклов</p>
                    <span>400</span>
                  </div>
                  <div class="info-white">
                    <p>Масса, кг</p>
                    <span>90</span>
                  </div>
                </div>
              </div>
              <div v-if="activetab === 2" class="tabcontent">
                  Здесь будут чертежи(если будут)
              </div>
              <div v-if="activetab === 3" class="tabcontent">
                  Здесь будет описание
              </div>
              <div v-if="activetab === 4" class="tabcontent">
                  Здесь будет информация о доставке
              </div>
          </div>

        </div>
      </div>
    </div>
    </section>

    <analogs/>
    <footerComponent/>
  </div>
</template>

<script>
import headerPage from "@/components/header.vue";
import analogs from "@/components/analogs.vue";
import footerComponent from "@/components/footer.vue";

export default {
  data() {
    return {
      activetab: 1,
    }
  },
  components: {
    headerPage,
    analogs,
    footerComponent,
  },
}
</script>

<style lang="scss">
  .product__item {
    margin-top: 30px;
    .product__item-container {
      .way__block {
        overflow: hidden;
        text-align: left;
        margin-bottom: 35px;
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

      .product__block-top {
        display: flex;
        margin-bottom: 40px;
        .product__item-img {
          border: 1px solid $text-gray-light;
          border-radius: 10px;
          padding: 50px 115px;
          margin-right: 35px;
        }
        .product__item-info {
          max-width: 700px;
          h2 {
            margin-bottom: 30px;
            @include font-bold ();
            font-size: 24px;
            line-height: 33px;
          }
          .item__main-info {
            display: flex;
            margin-bottom: 40px;
            span {
              @include font-semibold ();
              font-size: 14px;
              line-height: 19px;
              color: $text-gray-light;
              margin-right: 30px;
            }
            p {
              @include font-semibold();
              font-size: 16px;
              line-height: 18px;
              span {

              }
            }
            div {
              @include font-semibold();
              font-size: 14px;
              line-height: 19px;
              color: $text-gray-light;
            }
          }
            .add-to-cart {
              position: relative;
              &:before {
                content: '';
                height: 1px;
                width: 100%;
                background-color: $text-gray-light;
                position: absolute;
                top: -20px;
              }
              p {
                @include font-semibold ();
                font-size: 16px;
                line-height: 18px;
                margin-bottom: 20px;
              }
              .card-info {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                .add-count {
                  border: 1px solid $text-gray-light;
                  border-radius: 10px;
                  padding: 10px 15px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 130px;
                  margin-right: 30px;
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
                .card-price {
                  @include font-semibold();
                  font-size: 18px;
                  line-height: 18px;
                  color: $text-blue;
                }
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
        }
      }

      .product__block-bottom {
        margin-bottom: 40px;
        .tabs {
          overflow: hidden;
          margin-left: 0px;
          margin-bottom: -2px;
          margin-bottom: 50px;
          a {
            float: left;
            cursor: pointer;
            padding: 12px 0px;
            transition: .3s ease-in-out;
            border: none;
            border-right: none;
            background-color: transparent;
            @include font-bold();
            font-size: 18px;
            line-height: 18%;
            margin-right: 80px;
            &:last-child {
              border: none;
              margin-right: 5px;
            }
            &:hover {
              color: $text-blue;
            }
          }
          .active {
            color: $text-blue;
            cursor: default;
          }
        }

        .content {
          .tabcontent {
            .characteristics {
              max-width: 800px;
              .info-gray {
                display: flex;
                justify-content: space-between;
                background-color: rgba(229, 229, 229, 0.3);
                padding: 10px 20px;
                p {
                  text-align: left;
                }
                span {
                  text-align: right;
                  max-width: 350px;
                }
              }
              .info-white {
                display: flex;
                justify-content: space-between;
                padding: 10px 20px;
                p {
                  text-align: left;
                }
                span {
                  text-align: right;
                  max-width: 350px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
