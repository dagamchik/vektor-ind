<template>
  <div>
    <div class="pagination__block">
      <div class="back__btn">
        <svg class="prev-page" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#1F4B99"/>
          <line x1="13" y1="19.5002" x2="27" y2="19.5002" stroke="white"/>
          <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
          <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
          <line x1="21.3201" y1="14.6159" x2="27.3197" y2="19.6164" stroke="white"/>
          <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
          <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
          <line x1="22.1154" y1="25.1799" x2="27.1159" y2="19.1803" stroke="white"/>
        </svg>
        <span>Назад</span>
      </div>
      <div class="pages__info">
        <span>Стр.</span>
        <input type="number" placeholder="1">
        <span class="pages">из {{ pages }}</span>
      </div>
      <div class="next__btn" @click.prevent="paginate(page + 1)">
        <span>Вперед</span>
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
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage', 'products', 'pageNumber'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .pagination__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $text-gray-light;
    border-radius: 10px;
    padding: 15px 30px;
    .back__btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      .prev-page {
        transform: rotate(180deg);
        margin-right: 20px;
      }
      span {
        @include font-light();
        font-size: 14px;
        line-height: 19px;
      }
    }
    .pages__info {
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
        border: 1px solid $text-gray-light;
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
    }
    .next__btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        margin-right: 20px;
      }
      span {
        @include font-light();
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
</style>
