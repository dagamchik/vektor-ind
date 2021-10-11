<template>
  <div>
    <headerPage/>

    <section class="catalog">
      <div class="container container__catalog">
        <div class="catalog__block">
          <div class="link__way">
            <nuxt-link to="/" class="main__link">Главная страница</nuxt-link> - <p>Каталог</p>
          </div>
          <h2>Каталог</h2>
        </div>
      </div>
    </section>

    <div class="container">
      <productCategory/>
    </div>

    <section class="information__block">
        <div class="container">
          <div class="information__block-title">
            <h2>Трубопроводная арматура</h2>
          </div>
          <div class="information__block-info">
            <p><strong>Трубопроводная арматура</strong> — комплекс устройств, предназначенных для управления потоком рабочей среды. С их помощью обеспечивается перекрытие потока, изменение пропускной способности трубопровода, давления, расхода, других параметров. Купить трубопроводную арматуру ведущих производителей предлагает Торговый дом «НХИ-Групп».</p>
            <p><strong>Ассортимент трубопроводной арматуры</strong>
            Наша компания осуществляет поставки всех типов арматурных устройств для комплектации инженерных сетей любого назначения. В том числе мы предлагаем следующие виды арматуры:
            <ul>
              <li>
                Запорная. Оборудование для полного перекрытия или открытия потока рабочей среды на определенном участке сети. К этой категории относятся шаровые краны, задвижки, поворотные дисковые затворы, запорные клапаны. Предлагаемые запорные устройства отличаются удобством в управлении, обеспечивают высокую степень герметичности перекрытия.
              </li>
              <li>
                Распределительная. Устройства для распределения потока по отдельным линиям трубопроводной сети
              </li>
              <li>
                Обратная. Предотвращает движение потока среды в обратном направлении при изменении рабочих параметров в системе. В каталоге представлены обратные клапаны с высокой точностью срабатывания, рассчитанные на эксплуатацию в промышленных системах в сложных условиях.
              </li>
              <li>
                Регулирующая и запорно-регулирующая. Оборудование для изменения давления, расхода, скорости перемещения, других характеристик потока вручную или автоматически в зависимости от рабочих параметров. Мы поставляем задвижки, регуляторы давления, регулирующие клапаны от ведущих производителей.
              </li>
              <li>
                Предохранительная. Устройства, которые защищают трубопровод и подключенное к нему оборудование от критического повышения давления, температуры, изменения других параметров. К этой группе относятся предохранительные и отсечные клапаны, конденсатоотводчики с высокой точностью и скоростью срабатывания
              </li>
            </ul>
            Представленный ассортимент позволяет заказать трубопроводную арматуру для комплектации промышленных трубопроводов, работающих с разными средами и в разных эксплуатационных условиях.</p>
            <p><strong>Трубопроводной арматуры от официального дилера</strong>
            Торговый дом «НХИ-Групп» является официальным представителем заводов ООО «НефтеХимИнжниринг» и ООО «Завод "Евродеталь"». В магазине представлена оригинальная трубопроводная арматура, полностью отвечающая требованиям ГОСТ, рассчитанная на многолетнюю службу с четким исполнением своих функций. Для приобретения просто добавьте необходимые устройства в корзину и оформите заказ. При необходимости наши специалисты помогут вам с подбором оборудования для комплектации вашего трубопровода.</p>
            <p>Мы предлагаем заказчикам оптимальные цены трубопроводной арматуры от официального дилера. Выполняем доставку арматуры по всей России и в страны СНГ надежными транспортными компаниями</p>
          </div>
          <div class="information__block-pay">
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

      <footerComponent/>

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
  }
}
</script>

<style lang="scss">
  .catalog {
    margin-top: 20px;
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
          p {
            margin-left: 10px;
          }
        }
      }
    }
  }
  .information__block {
    margin-bottom: 40px;
    .container {
      .information__block-title {
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
      .information__block-info {
        @include font-regular ();
        font-size: 16px;
        line-height: 24px;
        p {
          margin-bottom: 40px;
        }
      }
      .information__block-pay {
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
</style>
