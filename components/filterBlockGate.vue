<template>
  <div class="accordion" id="accordion">
    <button class="add-filters" @click.prevent="checkArr(); sortByCategories()">Применить</button>
    <button class="delete-filters" @click.prevent="clearFilter">Сбросить</button>
    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Цена
      </h3>
      <div class="accordion-item-body">
        <div class="range-values">
          <div class="from-input">
            <p>от</p>
            <input class="for-number" type="number" v-model="minPrice" @change="setRangeSlider">
          </div>
          <div class="to-input">
            <p>до</p>
            <input class="for-number" type="number" v-model="maxPrice" @change="setRangeSlider">
          </div>
        </div>
        <div class="range-slider">
          <input type="range" min="0" max="10000000" step="100" v-model.number="minPrice" @change="setRangeSlider">
          <input type="range" min="0" max="10000000" step="100" v-model.number="maxPrice" @change="setRangeSlider">
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Страна производитель
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label for="russia">
            <input type="checkbox" name="aa" class="css-checkbox" v-model="checked" value="Россия" id="russia"/>
            <i></i>
          </label>
          <span>Россия</span>
        </div>
        <div class="item">
          <label for="china">
            <input type="checkbox" name="bb" class="css-checkbox" v-model="checked" value="Китай" id="china"/>
            <i></i>
          </label>
          <span>Китай</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Вид затвора
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="shutter" value="Клиновая"/>
            <i></i>
          </label>
          <span>Клиновая</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="shutter" value="Параллельная"/>
            <i></i>
          </label>
          <span>Параллельная</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="shutter" value="Шиберная"/>
            <i></i>
          </label>
          <span>Шиберная</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="shutter" value="Шланговая"/>
            <i></i>
          </label>
          <span>Шланговая</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        DN, мм
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="15"/>
            <i></i>
          </label>
          <span>15</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="20"/>
            <i></i>
          </label>
          <span>20</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="25"/>
            <i></i>
          </label>
          <span>25</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="32"/>
            <i></i>
          </label>
          <span>32</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="40"/>
            <i></i>
          </label>
          <span>40</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="50"/>
            <i></i>
          </label>
          <span>50</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="65"/>
            <i></i>
          </label>
          <span>65</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="80"/>
            <i></i>
          </label>
          <span>80</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="100"/>
            <i></i>
          </label>
          <span>100</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="125"/>
            <i></i>
          </label>
          <span>125</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="150"/>
            <i></i>
          </label>
          <span>150</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="200"/>
            <i></i>
          </label>
          <span>200</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="250"/>
            <i></i>
          </label>
          <span>250</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="300"/>
            <i></i>
          </label>
          <span>300</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="350"/>
            <i></i>
          </label>
          <span>350</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="400"/>
            <i></i>
          </label>
          <span>400</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="450"/>
            <i></i>
          </label>
          <span>450</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="500"/>
            <i></i>
          </label>
          <span>500</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="600"/>
            <i></i>
          </label>
          <span>600</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="700"/>
            <i></i>
          </label>
          <span>700</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="800"/>
            <i></i>
          </label>
          <span>800</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="1000"/>
            <i></i>
          </label>
          <span>1000</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="1200"/>
            <i></i>
          </label>
          <span>1200</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="1400"/>
            <i></i>
          </label>
          <span>1400</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="DN" value="1600"/>
            <i></i>
          </label>
          <span>1600</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        PN, кгс/см²
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="4"/>
            <i></i>
          </label>
          <span>4</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="6"/>
            <i></i>
          </label>
          <span>6</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="10"/>
            <i></i>
          </label>
          <span>10</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="16"/>
            <i></i>
          </label>
          <span>16</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="25"/>
            <i></i>
          </label>
          <span>25</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="40"/>
            <i></i>
          </label>
          <span>40</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="63"/>
            <i></i>
          </label>
          <span>63</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="100"/>
            <i></i>
          </label>
          <span>100</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="140"/>
            <i></i>
          </label>
          <span>140</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="160"/>
            <i></i>
          </label>
          <span>160</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="210"/>
            <i></i>
          </label>
          <span>210</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="250"/>
            <i></i>
          </label>
          <span>250</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="350"/>
            <i></i>
          </label>
          <span>350</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="PN" value="700"/>
            <i></i>
          </label>
          <span>700</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Материал корпуса
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Углеродистая сталь"/>
            <i></i>
          </label>
          <span>Углеродистая сталь</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Чугун"/>
            <i></i>
          </label>
          <span>Чугун</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Алюминиевый сплав"/>
            <i></i>
          </label>
          <span>Алюминиевый сплав</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Жаропрочная релаксационностойкая сталь"/>
            <i></i>
          </label>
          <span>Жаропрочная релаксационностойкая сталь</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Коррозионностойкая сталь"/>
            <i></i>
          </label>
          <span>Коррозионностойкая сталь</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="material" value="Хладостойкая сталь"/>
            <i></i>
          </label>
          <span>Хладостойкая сталь</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Тип привода
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="typeDrive" value="Под электропривод"/>
            <i></i>
          </label>
          <span>Под электропривод</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="typeDrive" value="Ручной"/>
            <i></i>
          </label>
          <span>Ручной</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="typeDrive" value="Редукторный"/>
            <i></i>
          </label>
          <span>Редукторный</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Тип присоединения
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="connType" value="Муфтовое"/>
            <i></i>
          </label>
          <span>Муфтовое</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="connType" value="Под приварку"/>
            <i></i>
          </label>
          <span>Под приварку</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="connType" value="Фланцевое"/>
            <i></i>
          </label>
          <span>Фланцевое</span>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-item-head" v-on:click="accordion">
        Расположение ходового узла
      </h3>
      <div class="accordion-item-body">
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="undercarriage" value="С выдвижным шпинделем"/>
            <i></i>
          </label>
          <span>С выдвижным шпинделем</span>
        </div>
        <div class="item">
          <label>
            <input type="checkbox" class="css-checkbox" v-model="undercarriage" value="С невыдвижным шпинделем"/>
            <i></i>
          </label>
          <span>С невыдвижным шпинделем</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      minPrice: 0,
      maxPrice: 10000000,
      checked: [],
      shutter: [],
      DN: [],
      PN: [],
      material: [],
      typeDrive: [],
      connType: [],
      undercarriage: [],
    }
  },
  methods: {
    accordion: function (event) {
      event.target.classList.toggle('active');
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      // this.sortByCategories();
    },
    clearFilter() {
      window.location.reload();
    },
    // Фильтр по ползунку
    sortByCategories() {
      let vm = this;
      let newArr = this.$store.state.products.products[0].filter(function (item) {
        return Number(item.product_price.split(' ').join('').replace(/[^a-zа-яё0-9\s]/gi, ' ')) >= vm.minPrice && Number(item.product_price.split(' ').join('').replace(/[^a-zа-яё0-9\s]/gi, ' ')) <= vm.maxPrice;
      })
      this.$emit('updateProducts', newArr);
    },
    checkArr() {
      let vm = this;
      let newArr = vm.$store.state.products.products[0].filter(function (item) {
        let conditions = [];
        if (vm.checked.length > 0) {
          conditions.push(vm.checked.includes(item.country));
        }
        if (vm.shutter.length > 0) {
          conditions.push(vm.shutter.includes(item.shutter));
        }
        if (vm.DN.length > 0) {
          conditions.push(vm.DN.includes(item.DN));
        }
        if (vm.PN.length > 0) {
          conditions.push(vm.PN.includes(item.PN));
        }
        if (vm.material.length > 0) {
          conditions.push(vm.material.includes(item.material));
        }
        if (vm.typeDrive.length > 0) {
          conditions.push(vm.typeDrive.includes(item.type_drive));
        }
        if (vm.connType.length > 0) {
          conditions.push(vm.connType.includes(item.connection_type));
        }
        if (vm.undercarriage.length > 0) {
          conditions.push(vm.undercarriage.includes(item.undercarriage));
        }
        return conditions.every(condition => condition);
      })
      this.$emit('updateProducts', newArr);
    },
  }
}
</script>

<style lang="scss" scoped>
    .accordion {
      display: flex;
      flex-direction: column;
      .add-filters {
        border: none;
        background-color: $text-blue;
        border-radius: 10px;
        padding: 10px;
        color: #fff;
        cursor: pointer;
        transition: .3s ease-in-out;
        max-width: 350px;
        margin-bottom: 15px;
        @include font-semibold();
        &:hover {
          transform: scale(1.02);
        }
      }
      .delete-filters {
        border: none;
        background-color: $text-blue;
        border-radius: 10px;
        padding: 10px;
        color: #fff;
        cursor: pointer;
        transition: .3s ease-in-out;
        margin-bottom: 15px;
        max-width: 350px;
        @include font-semibold();
        &:hover {
          transform: scale(1.02);
        }
      }
      .accordion-item {
        position: relative;
        margin-right: 30px;
        margin-bottom: 10px;
        width: 350px;
        border-radius: 10px;
        .accordion-item-head {
          border-radius: 10px;
          background-color: $text-blue-light;
          cursor: pointer;
          padding:15px;
          @include font-semibold();
          font-size: 14px;
          line-height: 19px;
          &:after {
            content: ' > ';
            display: block;
            height: 29px;
            position: absolute;
            right: 25px;
            transform: rotate(90deg) scaleY(2);
            top: 8px;
            transition: .3s ease-in-out;
          }
        }
        .accordion-item-head.active:after {
          content: ' < ';
          transition: .3s ease-in-out;
        }
        .active {
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
        }
        .accordion-item-body {
          display: none;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          background-color: $text-blue-light;
          padding: 15px;
          padding-bottom: 15px;
          .range-values {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .from-input {
              border-radius: 10px;
              margin-right: 20px;
              max-width: 150px;
              background-color: #fff;
              display: flex;
              justify-content: space-between;
              padding: 10px;
              .for-number {
                border: none;
                outline: none;
                border-radius: 10px;
                max-width: 120px;
                text-align: right;
              }
            }
            .to-input {
              border-radius: 10px;
              background-color: #fff;
              display: flex;
              max-width: 150px;
              padding: 10px;
              .for-number {
                max-width: 120px;
                border: none;
                outline: none;
                border-radius: 10px;
                text-align: right;
              }
        }
      }
    }
      .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
        svg {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
        }
        input {
          position: absolute;
          left: 0;
          bottom: 0;
          -webkit-appearance: none;
          width: 100%;
          background: rgba(31, 75, 153, 0.1);
          height: 5px;
        }
        input::-webkit-slider-thumb {
          z-index: 2;
          position: relative;
          top: 2px;
          margin-top: -7px;
          -webkit-appearance: none;
          border: 1px solid #000000;
          height: 15px;
          width: 15px;
          border-radius: 5px;
          background: $text-blue;
          cursor: pointer;/* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          box-shadow: 1px 1px 1px #fff, 1px 1px 1px #fff; /* Add cool effects to your sliders! */
        }
      }
      .item {
        margin-bottom: 10px;
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
    .accordion-item-head.active + .accordion-item-body {
      display: block !important;
      transition: .3s ease-in-out;
    }
  }
</style>
