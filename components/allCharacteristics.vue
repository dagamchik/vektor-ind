<template>
  <div class="character-btn">
    <ul v-show-slide="featuresOpen" class="features">
      <div class="character">
        <p>Тип привода</p>
        <span>{{product.type_drive || product.drive_type || "-"}}</span>
      </div>
      <div class="character">
        <p>Вид затвора</p>
        <span>{{product.shutter_type || product.shutter || "-"}}</span>
      </div>
      <div class="character">
        <p>Тип присоединения</p>
        <span>{{product.connection_type ||  product.conn_type || "-"}}</span>
      </div>
      <div class="character">
        <p>Материал корпуса</p>
        <span>{{product.material || "-"}}</span>
      </div>
      <div class="character">
        <p>Температура рабочей среды, °С</p>
        <span>{{product.temp_work_area || product.work_temperature || product.work_temper || product.temp_area || "-"}}</span>
      </div>
      <div class="character">
        <p>Климатическое исполнение</p>
        <span>{{product.clymate || product.climate || product.clyamte || "-"}}</span>
      </div>
      <div class="character">
        <p>Приемка</p>
        <span>{{product.acceptance || "-"}}</span>
      </div>
      <div class="character">
        <p>Назначенный ресурс, циклов</p>
        <span>{{product.resource || product.assigned_resource || product.resources || "-"}}</span>
      </div>
      <div class="character">
        <p>Гарантия</p>
        <span>{{product.garanty|| product.garantee || "-"}}</span>
      </div>
      <div class="character">
        <p>Стандарт</p>
        <span>{{product.standart || "-"}}</span>
      </div>
      <div class="character">
        <p>Страна-производитель</p>
        <span>{{product.country || "-"}}</span>
      </div>
      <div class="character">
        <p>Рабочая среда</p>
        <span>{{product.work_ambient || product.working_environment || product.work_area || "-"}}</span>
      </div>
      <div class="character">
        <p>Расположение ходового узла</p>
        <span>{{product.undercarriage || "-"}}</span>
      </div>
      <div class="character">
        <p>Температура окружающего воздуха, °С</p>
        <span>{{product.temp_ambient || product.temper || product.temp_area || product.ambient_temperature || product.temperature || "-"}}</span>
      </div>
      <div class="character">
        <p>Класс герметичности</p>
        <span>{{product.class || product.tightness_class || "-"}}</span>
      </div>
      <div class="character">
        <p>Назначенный срок службы, лет</p>
        <span>{{product.work_life || product.work_years || product.worklife || "-"}}</span>
      </div>
      <div class="character">
        <p>Наработка на отказ, циклов</p>
        <span>{{product.MTBF || product.MBTF || "-"}}</span>
      </div>
      <div class="character">
        <p>Масса, кг</p>
        <span>{{product.mass || product.weight || "-"}}</span>
      </div>
      <div class="character">
        <p>Вид проходимости</p>
        <span>{{product.ability || product.MBTF || "-"}}</span>
      </div>
      <div class="character">
        <p>Направление подачи рабочей среды</p>
        <span>{{product.direction || product.weight || "-"}}</span>
      </div>
      <div class="character">
        <p>Тип конструкции</p>
        <span>{{product.const_type || product.counstruct_type || "-"}}</span>
      </div>
      <div class="character">
        <p>Дублер</p>
        <span>{{product.dubler || "-"}}</span>
      </div>
      <div class="character">
        <p>Площадь сечения седла Fc, мм2</p>
        <span>{{product.S || "-"}}</span>
      </div>
      <div class="character">
        <p>Коэффициент расхода, α2, жидкость</p>
        <span>{{product.koeff || "-"}}</span>
      </div>
      <div class="character">
        <p>Диаметр седла</p>
        <span>{{product.diametr || "-"}}</span>
      </div>
      <div class="character">
        <p>Коэффициент расхода, α1, газ</p>
        <span>{{product.koef_gaz || "-"}}</span>
      </div>
    </ul>
    <button @click="toggleFeatures" class="toggle-features" :class="{active: featuresOpen, nonActive: !featuresOpen}">{{ featuresOpen ? 'Закрыть' : 'Все характеристики' }}</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      featuresOpen: false,
    }
  },
  methods: {
    toggleFeatures () {
      this.featuresOpen = !this.featuresOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .character-btn {
    .features {
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
    .toggle-features {
      background: none;
      border: none;
      @include font-regular();
      font-size: 12px;
      line-height: 18px;
      color: $text-blue;
    }
    .nonActive {
      cursor: pointer;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        border: solid $text-blue;
        padding: 3px;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        right: -10px;
        top: 3px;
      }
    }
    .active {
      cursor: pointer;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        border: solid $text-blue;
        padding: 3px;
        border-width: 0 2px 2px 0;
        transform: rotate(225deg);
        right: -10px;
        top: 7px;
      }
    }
  }
</style>
