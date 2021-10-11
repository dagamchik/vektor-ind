export const state = () => ({
  newProducts: []
})

export const mutations = {
  addProduct: (state, product) => {
    state.newProducts.push(product)
    console.log('newProducts:', state.newProducts)
  }
}

export const actions = {
  async createUserProduct({commit}, product) {
    commit("addProduct", product)
  }
}
