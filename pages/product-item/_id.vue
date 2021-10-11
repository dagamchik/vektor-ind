<template>
  <div>
    <headerPage/>

    <section class="product__item">
    <div class="container product__item-container">

      <div class="way__block">
        <div class="link__way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <nuxt-link to="/catalog" class="catalog__link">Каталог</nuxt-link> - <nuxt-link :to="`/catalog-chapter/${linkName}`" class="catalog__link">Назад в категорию</nuxt-link> - <p>{{productParams.product_name || productParams.name}}</p>
        </div>
      </div>

      <div class="product__block-top">
        <div class="product__item-img">
          <img class="item-img" src="@/assets/images/main/item-img.png" alt="Фото">
        </div>
        <div class="product__item-info">
          <h2>
            {{productParams.product_name || productParams.name}}
          </h2>
          <div class="item__main-info">
            <span>Арт. {{productParams.article || productParams.art}}</span>
            <p>{{productParams.product_price || productParams.price}} <span>(за штуку)</span></p>
            <div><img class="icon-instock" src="@/assets/images/main/instock.svg" alt="Галочка"> В наличии</div>
          </div>
          <div class="add-to-cart">
            <p>Кол-во товара:</p>
            <div class="card-info">
              <addToCart :productParams="productParams" @updateCount="newCount"/>
              <div class="card-price" style="margin-left: 20px;">{{productParams.product_price || productParams.price}}</div>
            </div>
            <button class="add-to-cart-btn" @click.prevent="addToCartFromItem(productParams, numberCount)">
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
                  <div class="info-gray" v-if="productParams.article || productParams.art">
                    <p>Артикул</p>
                    <span>{{productParams.article || productParams.art}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.table_figure || productParams.tab_figure || productParams.figure_table || productParams.figure">
                    <p>Таблица фигур</p>
                    <span>{{productParams.table_figure || productParams.tab_figure || productParams.figure_table || productParams.figure}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.shutter_type || productParams.shutter">
                    <p>Вид затвора</p>
                    <span>{{productParams.shutter_type || productParams.shutter}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.connection_type ||  productParams.conn_type">
                    <p>Тип присоединения</p>
                    <span>{{productParams.connection_type ||  productParams.conn_type}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.DN">
                    <p>DN, мм</p>
                    <span>{{productParams.DN}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.material">
                    <p>Материал корпуса</p>
                    <span>{{productParams.material}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.temp_work_area || productParams.work_temperature || productParams.work_temper || productParams.temp_area">
                    <p>Температура рабочей среды, °С</p>
                    <span>{{productParams.temp_work_area || productParams.work_temperature || productParams.work_temper || productParams.temp_area}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.clymate || productParams.climate || productParams.clyamte">
                    <p>Климатическое исполнение</p>
                    <span>{{productParams.clymate || productParams.climate || productParams.clyamte}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.acceptance">
                    <p>Приемка</p>
                    <span>{{productParams.acceptance}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.resource || productParams.assigned_resource || productParams.resources">
                    <p>Назначенный ресурс, циклов</p>
                    <span>{{productParams.resource || productParams.assigned_resource || productParams.resources}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.garanty|| productParams.garantee">
                    <p>Гарантия</p>
                    <span>{{productParams.garanty|| productParams.garantee}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.country">
                    <p>Страна-производитель</p>
                    <span>{{productParams.country}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.standart">
                    <p>Стандарт</p>
                    <span>{{productParams.standart}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.undercarriage">
                    <p>Расположение ходового узла</p>
                    <span>{{productParams.undercarriage}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.type_drive || productParams.drive_type">
                    <p>Тип привода</p>
                    <span>{{productParams.type_drive || productParams.drive_type}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.PN">
                    <p>PN, кгс/см2</p>
                    <span>{{productParams.PN}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.work_ambient || productParams.working_environment || productParams.work_area">
                    <p>Рабочая среда</p>
                    <span>{{productParams.work_ambient || productParams.working_environment || productParams.work_area}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.temp_ambient || productParams.temper || productParams.temp_area || productParams.ambient_temperature || productParams.temperature">
                    <p>Температура окружающего воздуха, °С</p>
                    <span>{{productParams.temp_ambient || productParams.temper || productParams.temp_area || productParams.ambient_temperature || productParams.temperature}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.class || productParams.tightness_class">
                    <p>Класс герметичности</p>
                    <span>{{productParams.class || productParams.tightness_class}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.work_life || productParams.work_years || productParams.worklife">
                    <p>Назначенный срок службы, лет</p>
                    <span>{{productParams.work_life || productParams.work_years || productParams.worklife}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.MTBF || productParams.MBTF">
                    <p>Наработка на отказ, циклов</p>
                    <span>{{productParams.MTBF || productParams.MBTF}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.mass || productParams.weight">
                    <p>Масса, кг</p>
                    <span>{{productParams.mass || productParams.weight}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.ability || productParams.MBTF">
                    <p>Вид проходимости</p>
                    <span>{{productParams.ability || productParams.MBTF}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.direction">
                    <p>Направление подачи рабочей среды</p>
                    <span>{{productParams.direction}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.const_type || productParams.counstruct_type">
                    <p>Тип конструкции</p>
                    <span>{{productParams.const_type || productParams.counstruct_type}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.principe_device">
                    <p>Принцип устройства</p>
                    <span>{{productParams.principe_device}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.dubler">
                    <p>Дублер</p>
                    <span>{{productParams.dubler}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.S">
                    <p>Площадь сечения седла Fc, мм2</p>
                    <span>{{productParams.S}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.koeff">
                    <p>Коэффициент расхода, α2, жидкость</p>
                    <span>{{productParams.koeff}}</span>
                  </div>
                  <div class="info-white" v-if="productParams.diametr">
                    <p>Диаметр седла</p>
                    <span>{{productParams.diametr}}</span>
                  </div>
                  <div class="info-gray" v-if="productParams.koef_gaz">
                    <p>Коэффициент расхода, α1, газ</p>
                    <span>{{productParams.koef_gaz}}</span>
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
import addToCart from "@/components/addToCart.vue"

export default {
  data() {
    return {
      activetab: 1,
      productParams: [],
      linkName: '',
      numberCount: 1,
    }
  },
  components: {
    headerPage,
    analogs,
    footerComponent,
    addToCart
  },
  mounted() {
    let arr;
    if (this.$store.state.products.products[0]) {
      arr = this.$store.state.products.products[0].find((newArr) => {
          return newArr._id === this.$route.params.id;
      })
      this.productParams = arr;
      localStorage.setItem('newArr', JSON.stringify(this.productParams))
    }
    if (!this.$store.state.products.products[0]) {
      this.productParams = JSON.parse(localStorage.getItem('newArr'))
    }
    this.linkName = localStorage.getItem('linkName');
  },
  methods: {
    newCount(number) {
      this.numberCount = number;
    },
    addToCartFromItem(productParams, numberCount) {
      this.$store.commit('products/addToCartFromItem', { productParams, numberCount });
    },
  }
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
