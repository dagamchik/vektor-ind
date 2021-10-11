<template>
  <div>
    <headerPage/>

    <section class="catalog">
      <div class="container container__catalog">
        <div class="catalog__block">
          <div class="link__way">
            <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <nuxt-link to="/catalog" class="catalog__link">Каталог</nuxt-link> - <p>Задвижки</p>
          </div>
          <h2>Задвижки</h2>
        </div>

        <div class="main__block">
          <div class="filter__block">
            <vue-accordion
              title-bg-color="rgba(31, 75, 153, 0.1)"
              title-color="#000"
              title-hover-color="#6983aa80"
              :datas="accordionData"
              >
            </vue-accordion>
          </div>

          <div class="right__main-block">
            <div class="sort__block">
              <div class="sort__categories">
                <div class="all-btn">
                  <button>Клиновые</button>
                  <button>Шиберные</button>
                  <button>Шланговые</button>
                  <button>Клиновые</button>
                  <button>Шиберные</button>
                  <button>Шланговые</button>
                  <button>Клиновые</button>
                  <button>Шиберные</button>
                </div>
                <button class="yet-btn">Еще <span>+</span></button>
              </div>
              <div class="sort__main">
                <div class="sort__main-left">
                  <span>Вид</span>
                  <svg class="sort-tile" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="10" height="10" fill="#1F4B99"/>
                    <rect x="12" width="10" height="10" fill="#1F4B99"/>
                    <rect y="12" width="10" height="10" fill="#1F4B99"/>
                    <rect x="12" y="12" width="10" height="10" fill="#1F4B99"/>
                  </svg>
                  <svg class="sort-line" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="21" height="9" stroke="#606060" stroke-opacity="0.6"/>
                    <rect x="0.5" y="12.5" width="21" height="9" stroke="#606060" stroke-opacity="0.6"/>
                  </svg>
                  <span>Сортировать</span>
                  <select name="По умолчанию" id="">
                    <option value="">По умолчанию</option>
                    <option value="">По цене</option>
                    <option value="">По популярности</option>
                    <option value="">По заказам</option>
                  </select>
                  <label>
                    <input type="checkbox" class="css-checkbox"/>
                    <i></i>
                  </label>
                  <span class="for-checkbox">в наличии</span>
                </div>
                <div class="sort__main-right">
                  <div class="paginate">
                    <span>Стр.</span>
                    <input type="number" placeholder="1">
                    <span class="pages">из 125</span>
                    <svg class="next-page" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill="#1F4B99"/>
                      <line x1="13" y1="19.5002" x2="27" y2="19.5002" stroke="white"/>
                      <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
                      <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
                      <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
                      <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
                      <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
                      <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards__block">
              <productChapter/>

              <pagination/>
            </div>
          </div>

        </div>

        <section class="chapter-info">
          <div class="container">
            <div class="chapter-info-title">
              <h2>Задвижки</h2>
            </div>
            <div class="chapter-info-info">
              <p><strong>Трубопроводная арматура</strong> — Задвижка для трубопровода — один из основных видов промышленной запорной арматуры. Они обеспечивают перекрытие потока рабочей среды, транспортируемой по трубопроводу за счет возвратно-поступательного перемещения запирающего элемента.</p>
                <p><strong>Ассортимент задвижек</strong></p>
                <p>Наша компания  предлагает большой модельный ряд арматурных устройств для промышленных трубопроводов и инженерных сетей. В каталоге представлены задвижки с диаметром условного прохода от 15 мм до 1600 мм, рассчитанные на рабочее давление от 4 бар до 700 бар. По типу соединения с трубопроводом представлены муфтовые, фланцевые модели, изделия под приварку.</p>

                <p>
                  В зависимости от типа запирающего элемента мы поставляем следующие виды задвижек:
                </p>
                <ul>
                  <li>Клиновые</li>
                  <li>Шиберные</li>
                  <li>Параллельные</li>
                  <li>Шланговые</li>
                </ul>

                <p>В наличии арматура из разных видов конструкционных материалов. В том числе предлагаем чугунные и стальные (из углеродистой, коррозионностойкой или хладостойкой стали) задвижки. Также имеются модели из алюминиевого сплава. Мы реализуем задвижки с ручным управлением и под электропривод.</p>

                <p><strong>Как выбрать</strong></p>
                <p>При выборе задвижек необходимо учитывать ряд технических и эксплуатационных параметров, в том числе:</p>
                <ul>
                  <li>назначение и условия эксплуатации арматуры;</li>
                  <li>тип рабочей среды и ее свойства;</li>
                  <li>рабочее давление и температура рабочей среды;</li>
                  <li>величина условного прохода, габаритные требования, подходящий тип присоединения;</li>
                  <li>требуемая пропускная способность, скорость перекрытия рабочей среды, герметичность в закрытом состоянии;</li>
                  <li>требования безопасности и т. д.</li>
                </ul>

                <p>Наши специалисты предоставят вам консультацию по выбору трубопроводных задвижек из ассортимента компании.</p>

                <p>Мы предлагаем заказчикам оптимальные цены трубопроводной арматуры от официального дилера. Выполняем доставку арматуры по всей России и в страны СНГ надежными транспортными компаниями</p>
            </div>
            <div class="chapter-info-pay">
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
      </div>
    </section>

    <footerComponent/>
  </div>
</template>

<script>
import headerPage from "@/components/header.vue";
import footerComponent from "@/components/footer.vue";
import VueAccordion from "@/components/VueAccordion.vue";
import productChapter from "@/components/productChapter.vue";
import pagination from "@/components/pagination.vue";

export default {
  data() {
    return {
      users: null,
      accordionData:[
        {
          title: "Цена",
          content: `
            <div class="filter__price">
              <div class="prices">
                <div class="price__from">
                  <input type="text" placeholder="от 1000 р">
                </div>
                <div class="price__to">
                  <input type="text" placeholder="до 3000000 р">
                </div>
              </div>
              <input class="range__input" type="range" min="1000" max="2000000" step="1000">
            </div>
          `
        },
        {
          title: "Страна-производитель",
          content: `
            <div class="filter__country">
              <div class="russia">
                <label>
                  <input type="checkbox" class="css-checkbox"/>
                  <i></i>
                </label>
                <span>Россия</span
              </div>
              <div class="china">
                <label>
                  <input type="checkbox" class="css-checkbox"/>
                  <i></i>
                </label>
                <span>Китай</span
              </div>
            </div>
            `
        },
        {
          title: "Вид затвора",
          content: "<ul>" +
                    "<li>Lorem ipsum dolor.</li>" +
                    "<li>Lorem ipsum dolor sit amet.</li>" +
                    "<li>Lorem ipsum dolor sit amet, consectetur.</li>" +
                  "</ul>"
        },
        {
          title: "Расположение ходового узла",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
        {
          title: "Тип присоединения",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
        {
          title: "Тип привода",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
        {
          title: "DN, мм",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
        {
          title: "PN, кгс/см2",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
        {
          title: "Материал корпуса",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur delectus dolore, ea explicabo, illo incidunt iste magni molestiae nulla rem vel voluptas voluptate! Consequatur delectus deserunt maxime nulla sint?"
        },
      ]
    }
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get("/api/pressure-regulators");
    return { products }
  },
  components: {
    headerPage,
    footerComponent,
    VueAccordion,
    productChapter,
    pagination,
  },
}
</script>

<style lang="scss">
  .catalog {
    margin-top: 20px;
    margin-bottom: 60px;
    .container__catalog {
      .catalog__block {
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
        }
      }
      .main__block {
        display: flex;
        width: 100%;
        .filter__block {
          margin-right: 30px;
          .filter__price {
            position: relative;
            .prices {
              display: flex;
              margin-bottom: 15px;
              justify-content: space-between;
              .price__from {
                display: flex;
                background-color: #fff;
                border-radius: 10px;
                max-width: 150px;
                padding: 10px;
                input {
                  border: none;
                  background: transparent;
                  max-width: 100px;
                  margin-left: 5px;
                }
              }

              .price__to {
                display: flex;
                background-color: #fff;
                border-radius: 10px;
                max-width: 150px;
                padding: 10px;
                input {
                  border: none;
                  background: transparent;
                  max-width: 100px;
                  margin-left: 5px;
                }
              }
            }
            .range__input {
              width: 100%;
            }
          }
          .filter__country {
            .russia {
              .css-checkbox {
                cursor: pointer;
                @include css-checkbox(20px, $selectedColor: $text-blue);
              }

              span {
                @include font-semibold ();
                font-size: 14px;
                line-height: 19px;
                margin-left: 10px;
              }

            }
            .china {
              margin-top: 10px;
              .css-checkbox {
                cursor: pointer;
                @include css-checkbox(20px, $selectedColor: $text-blue);
              }

              span {
                @include font-semibold ();
                font-size: 14px;
                line-height: 19px;
                margin-left: 10px;
              }

            }
          }
        }
        .right__main-block {
          width: 100%;
          .sort__block {
            margin-bottom: 25px;
            .sort__categories {
              background-color: $text-blue-light;
              padding: 15px;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              .all-btn {
                button {
                  margin-right: 10px;
                  padding: 10px 15px;
                  background-color: #fff;
                  border: none;
                  border-radius: 10px;
                  cursor: pointer;
                  transition: .3s ease-in-out;
                  &:hover {
                    background-color: $text-blue-light;
                  }
                }
              }
              .yet-btn {
                background-color: transparent;
                border: none;
                @include font-semibold ();
                font-size: 14px;
                line-height: 19px;
                display: flex;
                align-items: center;
                cursor: pointer;
                span {
                  color: $text-blue;
                  @include font-bold ();
                  font-size: 18px;
                  line-height: 24px;
                  margin-left: 5px;
                }
              }
            }
            .sort__main {
              background-color: $text-blue-light;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-radius: 10px;
              padding: 15px 20px;
              .sort__main-left {
                display: flex;
                align-items: center;
                span {
                  margin-right: 13px;
                  @include font-regular ();
                  font-size: 14px;
                  line-height: 19px;
                }
                .for-checkbox {
                  @include font-light ();
                  font-size: 14px;
                  line-height: 19px;
                  margin-left: 10px;
                }
                .sort-tile {
                  margin-right: 15px;
                  cursor: pointer;
                }
                .sort-line {
                  margin-right: 30px;
                  cursor: pointer;
                }
                select {
                  margin-right: 15px;
                  padding: 11px 15px;
                  cursor: pointer;
                  border: none;
                  outline: none;
                }
                .css-checkbox {
                  cursor: pointer;
                  @include css-checkbox(20px, $selectedColor: $text-blue);
                }
              }
              .sort__main-right {
                .paginate {
                  display: flex;
                  align-items: center;
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
                    border: none;
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
                  .next-page {
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
    .chapter-info {
      margin-bottom: 40px;
      margin-top: 60px;
      .container {
        .chapter-info-title {
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
        .chapter-info-info {
          @include font-regular ();
          font-size: 16px;
          line-height: 24px;
          p {
            margin-bottom: 40px;
          }
        }
        .chapter-info-pay {
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
  }
</style>
