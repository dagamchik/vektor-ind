<template>
<section>
  <div class="product__category">
    <a class="product__card" href="/catalog-chapter/gate-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Задвижки</h3>
        <button class="product__count-btn">
          {{this.countGate}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/gate-valves" v-else @click="addCheck($event)">
      <div class="product__card-info">
        <h3>Задвижки</h3>
        <button class="product__count-btn">
          {{this.countGate}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/ball-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Краны шаровые</h3>
        <button class="product__count-btn">
          {{this.countBall}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/ball-valves" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Краны шаровые</h3>
        <button class="product__count-btn">
          {{this.countBall}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/butterfly-valves-bilateral" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Затворы дисковые поворотные (направление подачи рабочей среды - двустороннее)</h3>
        <button class="product__count-btn">
          {{this.countButterflyBilateral}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/butterfly-valves-bilateral" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Затворы дисковые поворотные (направление подачи рабочей среды - двустороннее)</h3>
        <button class="product__count-btn">
          {{this.countButterflyBilateral}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/butterfly-valves-unilateral" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Затворы дисковые поворотные (направление подачи рабочей среды - одностороннее)</h3>
        <button class="product__count-btn">
          {{this.countButterflyUnilateral}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/butterfly-valves-unilateral" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Затворы дисковые поворотные (направление подачи рабочей среды - одностороннее)</h3>
        <button class="product__count-btn">
          {{this.countButterflyUnilateral}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" id="pressure" href="/catalog-chapter/pressure-regulators" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Регуляторы давления</h3>
        <button class="product__count-btn">
          {{this.countPressure}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/pressure-regulators" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Регуляторы давления</h3>
        <button class="product__count-btn">
          {{this.countPressure}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/shut-off-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Клапаны запорные</h3>
        <button class="product__count-btn">
          {{this.countShutOff}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/shut-off-valves" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Клапаны запорные</h3>
        <button class="product__count-btn">
          {{this.countShutOff}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/check-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Клапаны обратные</h3>
        <button class="product__count-btn">
          {{this.countCheck}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/check-valves" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Клапаны обратные</h3>
        <button class="product__count-btn">
          {{this.countCheck}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/control-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Клапаны регулирующие</h3>
        <button class="product__count-btn">
          {{this.countControl}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/control-valves" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Клапаны регулирующие</h3>
        <button class="product__count-btn">
          {{this.countControl}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/safety-valves" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Клапаны предохранительные</h3>
        <button class="product__count-btn">
          {{this.countSafetyValves}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/safety-valves" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Клапаны предохранительные</h3>
        <button class="product__count-btn">
          {{this.countSafetyValves}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/switching-devices" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Переключающие устройства</h3>
        <button class="product__count-btn">
          {{this.countSwitching}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/switching-devices" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Переключающие устройства</h3>
        <button class="product__count-btn">
          {{this.countSwitching}} товара
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/safety-valve-blocks" @click.prevent="checkComparison($event)" v-if="this.$store.state.products.comparison.length > 0">
      <div class="product__card-info">
        <h3>Блоки предохранительных клапанов</h3>
        <button class="product__count-btn">
          {{this.countSafetyValvesBlocks}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <a class="product__card" href="/catalog-chapter/safety-valve-blocks" @click="addCheck($event)" v-else>
      <div class="product__card-info">
        <h3>Блоки предохранительных клапанов</h3>
        <button class="product__count-btn">
          {{this.countSafetyValvesBlocks}} товаров
        </button>
      </div>
      <img class="product__card-img" src="@/assets/images/main/image__category.png" alt="Картинка категории">
    </a>
    <!-- МОДАЛЬНОЕ ОКНО -->
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <div class="modal-close" @click="closeModal(); goScroll()">&#10006;</div>
            <slot name="title">
                <h3 class="modal-title"></h3>
            </slot>
            <slot name="body">
                <div class="modal-content">
                    В Избранном можно хранить товары только из одной категории.
                    При добавлении в Избранное товаров из другой категории, товары
                    из текущей категории будут удалены. Вы подтверждаете действие?
                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <a :href="`${link}`" class="modal-footer__button" @click="closeModal(); goScroll(); clearComparison()">
                        Да
                    </a>
                    <button class="modal-footer__button" @click="closeModal(); goScroll(); notClose()">
                        Нет
                    </button>
                </div>
            </slot>
        </div>
    </div>
  </div>
</section>
</template>

<script>
// import modalComparison from '@/components/modalComparison.vue'

export default {
  data() {
    return {
      countPressure: null,
      countGate: null,
      countBall: null,
      countCheck: null,
      countControl: null,
      countSafetyValvesBlocks: null,
      countSafetyValves: null,
      countSwitching: null,
      countShutOff: null,
      countButterflyUnilateral: null,
      countButterflyBilateral: null,
      show: false,
      link: '',
      newhref: null,
    }
  },
  methods: {
    noScroll() {
      document.body.style.overflow = 'hidden';
    },
    showModal: function () {
      this.show = true
    },
    closeModal: function () {
      this.goScroll();
      this.show = false
    },
    goScroll() {
      document.body.style.overflow = "scroll"
    },
    clearComparison() {
      if (this.$store.state.products.comparison.length > 0 & this.$store.state.products.numberOfIndex != this.link) {
        this.$store.commit('products/clearComparison');
        this.$store.commit('products/changeLinkName', this.link);
      }
    },
    clearPageNumber() {
      this.$store.commit('products/clearPageNumber')
    },
    addCheck($event) {
      this.newhref = $event.target.offsetParent.href || $event.target.href;
      this.$store.commit('products/saveCheck', this.newhref)
      this.clearPageNumber();
    },
    checkComparison($event) {
      this.clearPageNumber();
      this.link = $event.target.offsetParent.href || $event.target.href;
      this.bb = this.$store.state.products.numberOfIndex === $event.target.offsetParent.href || this.$store.state.products.numberOfIndex === $event.target.href;
      // console.log(this.$store.state.products.nameCategory)
      // console.log($event.target.innerText)
      // let check = $event.target.innerText.indexOf(this.$store.state.products.nameCategory);
      // this.$store.commit('saveCheck', check);
      if (this.bb === false & this.$store.state.products.numberOfIndex != this.link) {
          // this.newhref = $event.target.offsetParent.href || $event.target.href;
          // this.$store.commit('products/saveCheck', this.newhref)
          this.noScroll();
          this.showModal();
      }
      if (this.bb === true) {
        document.location.href = this.link;
      }
    },
    notClose() {
      if (this.$store.state.products.numberOfIndex != this.link) {
        this.showModal();
        this.show = false;
      }
    },
    fetchData() {
      this.$axios.$get(`/api/butterfly-valves-bilateral/count`)
        .then((res) => {
          this.countButterflyBilateral = res.count
        })
    },
    fetchData10() {
      this.$axios.$get(`/api/butterfly-valves-unilateral/count`)
        .then((res) => {
          this.countButterflyUnilateral = res.count
        })
    },
    fetchData1() {
      this.$axios.$get(`/api/pressure-regulators/count`)
        .then((res) => {
          this.countPressure = res.count
        })
    },
    fetchData2() {
      this.$axios.$get(`/api/gate-valves/count`)
        .then((res) => {
          this.countGate = res.count
        })
    },
    fetchData3() {
      this.$axios.$get(`/api/ball-valves/count`)
        .then((res) => {
          this.countBall = res.count
        })
    },
    fetchData4() {
      this.$axios.$get(`/api/check-valves/count`)
        .then((res) => {
          this.countCheck = res.count
        })
    },
    fetchData5() {
      this.$axios.$get(`/api/control-valves/count`)
        .then((res) => {
          this.countControl = res.count
        })
    },
    fetchData6() {
      this.$axios.$get(`/api/safety-valve-blocks/count`)
        .then((res) => {
          this.countSafetyValvesBlocks = res.count
        })
    },
    fetchData7() {
      this.$axios.$get(`/api/switching-devices/count`)
        .then((res) => {
          this.countSwitching = res.count
        })
    },
    fetchData8() {
      this.$axios.$get(`/api/shut-off-valves/count`)
        .then((res) => {
          this.countShutOff = res.count
        })
    },
    fetchData9() {
      this.$axios.$get(`/api/safety-valves/count`)
        .then((res) => {
          this.countSafetyValves = res.count
        })
    },
    // clearState() {
    //   this.$store.commit('products/deleteFromState')
    // }
  },
  mounted() {
    this.fetchData();
    this.fetchData1();
    this.fetchData2();
    this.fetchData3();
    this.fetchData4();
    this.fetchData5();
    this.fetchData6();
    this.fetchData7();
    this.fetchData8();
    this.fetchData9();
    this.fetchData10();
  }
}
</script>

<style lang="scss">
    .modal-shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
        overflow: hidden;
        position: fixed;
    }

    .modal {
        background: #fff;
        border-radius: 10px;
        border: 1px solid $text-gray-light;
        padding: 15px;
        min-width: 420px;
        max-width: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;

        &-close {
            border-radius: 50%;
            color: $text-gray-light;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        &-title {
            color: $text-blue;
            margin-bottom: 30px;
        }

        &-content {
            margin-bottom: 20px;
            color: #202020;
            @include font-light();
            font-size: 16px;
            line-height: 24px;
        }

        &-footer {
          display: flex;
          justify-content: center;
            &__button {
                background-color: $text-blue;
                color: #fff;
                border: none;
                text-align: center;
                padding: 10px 40px;
                @include font-semibold();
                font-size: 16px;
                line-height: 22px;
                border-radius: 10px;
                min-width: 150px;
                cursor: pointer;
                margin-right: 20px;
                margin-left: 20px;
            }
        }
    }
  .product__category {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .product__card {
      display: flex;
      flex-basis: 500px;
      justify-content: space-between;
      border: 1px solid $text-gray-light;
      border-radius: 10px;
      padding: 20px 25px;
      margin-bottom: 30px;
      transition: .3s ease-in-out;
      &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        transform: scale(1.02);
      }
      &:hover > .product__card-info > .product__count-btn {
        background-color: $text-blue;
        color: #fff;
        cursor: pointer;
      }
      .product__card-info {
        padding-top: 20px;
        h3 {
          margin-bottom: 40px;
          @include font-bold ();
          @include forH3 ();
          color: #000;
        }
        .product__count-btn {
          border: none;
          border-radius: 10px;
          background-color: rgba(31, 75, 153, 0.1);
          color: $text-gray-light;
          @include font-bold ();
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          padding: 10px 29px;
          transition: .3s ease-in-out;
        }
      }
    }
  }
</style>
