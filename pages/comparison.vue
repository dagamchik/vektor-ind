<template>
  <div>
    <headerPage/>

    <div class="container">

      <div class="way__block">
        <div class="link__way">
          <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <p>Сравнение</p>
        </div>
        <h2>Сравнение</h2>
        <span v-if="this.$store.state.products.comparison.length === 1">{{this.$store.state.products.comparison.length}} товар</span>
        <span v-else>{{this.$store.state.products.comparison.length}} товара/ов</span>
      </div>

      <table class="table" v-if="this.$store.state.products.comparison.length > 0">
        <thead class="comparison__block">
          <tr>
            <th class="information-block">
              <p class='description'>Вы сравниваете товары из категории</p>
              <span>{{name}}</span>
            </th>

            <th class="product__main" v-for="product in this.$store.state.products.comparison" :key="product._id">
              <div class="product__card">
                <div class="card-info">
                  <div class="card-info__icons">
                    <img class="icon__main" src="@/assets/images/main/image__category.png" alt="Картинка задвижки">
                  </div>
                  <div class="card-info__small-icons">
                    <img @click.prevent="removeItemFromComparison(product)" class="item-delete" src="@/assets/images/main/delete.svg" alt="Удалить">
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
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th class="td-header">Артикул</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.article || product.art || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Таблица фигур</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.table_figure || product.tab_figure || product.figure_table || product.figure || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">DN, мм</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.DN || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Материал корпуса</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.material || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Температура рабочей среды, °С</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.temp_work_area || product.work_temperature || product.work_temper || product.temp_area || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Климатическое исполнение</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.clymate || product.climate || product.clyamte || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Приемка</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.acceptance || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Назначенный ресурс, циклов</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.resource || product.assigned_resource || product.resources || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Гарантия</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.garanty|| product.garantee || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Страна-производитель</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.country || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Стандарт</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.standart || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Тип привода</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.type_drive || product.drive_type || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">PN, кгс/см2</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.PN || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Рабочая среда</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.work_ambient || product.working_environment || product.work_area || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Температура окружающего воздуха, °С</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.temp_ambient || product.temper || product.temp_area || product.ambient_temperature || product.temperature || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Назначенный срок службы, лет</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.work_life || product.work_years || product.worklife || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Наработка на отказ, циклов</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.MTBF || product.MBTF || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Масса, кг</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.mass || product.weight || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Принцип устройства</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.principe_device || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Вид затвора</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.shutter_type || product.shutter || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Тип присоединения</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.connection_type ||  product.conn_type || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Расположение ходового узла</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.undercarriage || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Класс герметичности</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.class || product.tightness_class || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Вид проходимости</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.ability || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Направление подачи рабочей среды</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.direction || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Тип конструкции</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.const_type || product.counstruct_type || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Дублер</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.dubler || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Площадь сечения седла Fc, мм2</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.S || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Коэффициент расхода, α2, жидкость</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.koeff || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Диаметр седла</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.diametr || "-"}}</th>
        </tr>
        <tr>
          <th class="td-header">Коэффициент расхода, α1, газ</th>
          <th class="td" v-for="product in this.$store.state.products.comparison" :key="product._id">{{product.koef_gaz || "-"}}</th>
        </tr>

        </tbody>
      </table>

      <div class="comparison__block-null" v-else>
        <h1>Ваше "Сравнение товаров" пустое</h1>

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
      name: '',
      numberCount: 1,
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
    },
    removeItemFromComparison(item) {
      this.$store.commit('products/removeItemFromComparison', item);
    },
    newCount(number) {
      this.numberCount = number;
    },
    addToCart(product, numberCount) {
      this.$store.commit('products/addToCart', { product, numberCount });
    }
  },
  mounted() {
    this.name = this.$store.state.products.nameCategory;
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
}
</script>

<style lang="scss">
  .container {
    .way__block {
      overflow: hidden;
      text-align: left;
      margin-bottom: 35px;
      margin-top: 30px;
      position: relative;
      span {
        position: absolute;
        color: $text-blue;
        @include font-regular();
        font-size: 10px;
        line-height: 13px;
      }
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
    .comparison__block-null {
      display: block;
      margin-bottom: 45px;
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
    table {
      thead {
        tr {
          .information-block {
            position: absolute;
            max-width: 213px;
            text-align: left;
            .description {
              @include font-regular();
              font-size: 16px;
              line-height: 18px;
              color: $text-gray-light;
              margin-bottom: 30px;
            }
            span {
              @include font-semibold();
              font-size: 20px;
              line-height: 18px;
              color: $text-blue;
            }
          }

          .product__main {
            padding-left: 30px;
            border-left: 1px solid $text-gray-light;
            padding-right: 30px;
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
              margin-bottom: 28px;
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
                  .item-delete {
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
            .character-desc {
              display: flex;
              flex-direction: column;
              span {
                max-width: 270px;
                @include font-regular();
                font-size: 16px;
                line-height: 18px;
                color: $text-gray;
                border-top: 1px solid $text-gray;
                padding-top: 20px;
                padding-bottom: 20px;
              }
              .temp-work {
                padding-bottom: 40px;
              }
              .resource {
                padding-bottom: 37px;
              }
            }
          }
        }
      }
      tbody {
        tr {
          .td-header {
            @include font-regular();
            font-size: 16px;
            line-height: 18px;
            color: $text-gray-light;
            text-align: left;
            padding-top: 20px;
            padding-bottom: 20px;
            border-top: 1px solid $text-gray-light;
            // border-right: 1px solid $text-gray;
          }
          .td {
            @include font-regular();
            font-size: 16px;
            line-height: 18px;
            color: $text-gray;
            max-width: 270px;
            text-align: left;
            padding-left: 30px;
            border-top: 1px solid $text-gray-light;
            border-left: 1px solid $text-gray-light;
          }
        }
      }
    }
  }
</style>
