<template>
  <div class="card-info__add">
    <button class="item__delete" @click.prevent="deleteCount">&minus;</button>
    <input class="item__count" type="number" @input="updateCount" v-model.number="count"/>
    <button class="item__add" @click="addCount">
      <img src="@/assets/images/main/add-count.svg" alt="Добавить 1">
    </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    addCount() {
      if (this.count < 99) {
        this.count ++;
        this.$emit('updateCount', this.count);
      }
    },
    deleteCount() {
      if (this.count > 1) {
        this.count --;
        this.$emit('updateCount', this.count);
      }
    },
    updateCount(e) {
      this.$store.commit('products/updateCount', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
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

</style>
