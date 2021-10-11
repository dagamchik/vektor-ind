export const state = () => ({
  products: [],
  cart: [],
  cartCount: 0,
  countForItem: 1,
  totalPrice: 0,
  favorites: [],
  comparison: [],
  nameCategory: '',
  numberOfIndex: '',
  updatePageNumber: 1,
  successOrderItems: [],
  personName: '',
  personSurname: '',
  personEmail: '',
  personPhone: '',
  personRegion: '',
  personCity: '',
  personHome: '',
  personStreet: '',
  personApartament: '',
})

export const mutations = {
  // Для реактивности
  addProduct: (state, product) => {
    state.products = [];
    state.products.push(product)
  },
  // Добавление товара в корзину со страницы категорий
  addToCart: (state, { product, numberCount }) => {
    let found = state.cart.find(item => item._id === product._id);
    if (found) {
      found.quantity = 0;
      if (state.countForItem > 1) {
        found.quantity = state.countForItem;
      }
      else if (numberCount >= 1) {
        found.quantity = numberCount;
      }
      if (product.price) {
        found.totalPrice = found.quantity * Number(found.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
      } else {
        found.totalPrice = found.quantity * Number(found.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
      }

    } else {
      product.quantity = 0;
      if (state.countForItem > 1) {
        product.quantity = state.countForItem;
      }
      else if (numberCount >= 1) {
        product.quantity = numberCount;
      }
      if (product.price) {
        product.totalPrice = product.quantity * Number(product.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
        state.cart.push(product);
      } else {
        product.totalPrice = product.quantity * Number(product.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
        state.cart.push(product);
      }
    }
    state.cartCount++;
    state.countForItem = 1;
  },
  // Добавление товара в корзину со страницы самого товара
  addToCartFromItem: (state, { productParams, numberCount }) => {
    let found = state.cart.find(item => item._id === productParams._id);
    if (found) {
      found.quantity = 0;
      if (state.countForItem > 1) {
        found.quantity = state.countForItem;
      }
      else if (numberCount >= 1) {
        found.quantity = numberCount;
      }
      if (productParams.price) {
        found.totalPrice = found.quantity * Number(found.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
      } else {
        found.totalPrice = found.quantity * Number(found.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))
      }
    } else {
      productParams.quantity = 0;
      if (state.countForItem > 1) {
        productParams.quantity = state.countForItem;
      }
      else if (numberCount >= 1) {
        productParams.quantity = numberCount;
      }
      if (productParams.price) {
        productParams.totalPrice = productParams.quantity * Number(productParams.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
        state.cart.push(productParams);
      } else {
        productParams.totalPrice = productParams.quantity * Number(productParams.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))
        state.cart.push(productParams);
      }
    }
    state.cartCount++;
  },
  // Полное удаление товара из корзины
  removeItem: (state, product) => {
    let index = state.cart.indexOf(product)
    let found = state.cart.splice(index, 1)
    return found;
  },
  // Добавление/убавление количества из корзины
  addCount: (state, item) => {
    let found = state.cart.find(product => product._id === item._id);
    if (found) {
      found.quantity ++;
    }
  },
  updateTotalPrice: (state, item) => {
    let found = state.cart.find(product => product._id === item._id);
    if (found) {
      if (found.price) {
        found.totalPrice = found.quantity * Number(found.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))
      } else {
        found.totalPrice = found.quantity * Number(found.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
      }
    }
  },
  deleteCount: (state, item) => {
    let found = state.cart.find(product => product._id === item._id);
    if (found.quantity > 1) {
      found.quantity --;
    }
  },
  // Обновление количества товаров с инпута
  updateCount: (state, item) => {
    if (Number(item) >= 1) {
      state.countForItem = Number(item);
    }
    console.log(state.countForItem);
  },
  // Добавление в избранное
  addToFavorite: (state, product) => {
    let found = state.favorites.find(item => item._id === product._id)
    if (found) {
      return;
    } else {
      state.favorites.push(product);
    }
  },
  // Добавление в корзину с избранных
  addToCartFromFavorites: (state, item) => {
    let found = state.cart.find(product => product._id === item._id);
    if (found) {
      return;
    } else {
      item.quantity = 1;
      if (item.price) {
        item.totalPrice = item.quantity * Number(item.price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''));
        state.cart.push(item);
      } else {
        item.totalPrice = item.quantity * Number(item.product_price.replace(/[^a-zа-яё0-9\s]/gi, ' ').split(' ').join(''))
        state.cart.push(item);
      }
    }
    state.cartCount++;
  },
  // Удаление товара из избранных
  removeItemFromFavorites: (state, item) => {
    let index = state.favorites.indexOf(item);
    let found = state.favorites.splice(index, 1);
    return found;
  },
  // Добавление в сравнение
  addToComparison: (state, item) => {
    state.nameCategory = '';
    let linkName = localStorage.getItem('linkName');
    if (linkName === 'pressure-regulators') {
      state.nameCategory = 'Регуляторы давления';
    }
    if (linkName === 'gate-valves') {
      state.nameCategory = 'Задвижки';
    }
    if (linkName === 'ball-valves') {
      state.nameCategory = 'Краны шаровые';
    }
    if (linkName === 'butterfly-valves-bilateral') {
      state.nameCategory = 'Затворы дисковые поворотные (направление подачи рабочей среды - двустороннее)';
    }
    if (linkName === 'butterfly-valves-unilateral') {
      state.nameCategory = 'Затворы дисковые поворотные (направление подачи рабочей среды - одностороннее)';
    }
    if (linkName === 'shut-off-valves') {
      state.nameCategory = 'Клапаны запорные';
    }
    if (linkName === 'check-valves') {
      state.nameCategory = 'Клапаны обратные';
    }
    if (linkName === 'control-valves') {
      state.nameCategory = 'Клапаны регулирующие';
    }
    if (linkName === 'safety-valves') {
      state.nameCategory = 'Клапаны предохранительные';
    }
    if (linkName === 'switching-devices') {
      state.nameCategory = 'Переключающие устройства';
    }
    if (linkName === 'safety-valve-blocks') {
      state.nameCategory = 'Блоки предохранительных клапанов';
    }
    let found = state.comparison.find(product => product._id === item._id)
    if (found) {
      return;
    } else {
      state.comparison.push(item);
    }
  },
  // Удаление из сравнения
  removeItemFromComparison: (state, item) => {
    let index = state.comparison.indexOf(item);
    let found = state.comparison.splice(index, 1);
    return found;
  },

  // deleteFromState: (state) => {
  //   state.comparison = [];
  // }
  saveCheck: (state, item) => {
    state.numberOfIndex = item;
  },
  changeLinkName: (state, item) => {
    state.numberOfIndex = item;
  },
  // Обновление страницы с инпута
  updatePage: (state, item) => {
    state.updatePageNumber = Number(item);
  },
  // Очистка страниц до 1 страницы при переходе на категорию
  clearPageNumber: (state, item) => {
    state.updatePageNumber = 1;
  },
  // Сохранение корзины для успешного заказа
  successOrder: (state) => {
    state.successOrderItems = state.cart;
    console.log(state.successOrderItems)
    state.cart = [];
  },
  // Сохранение данных о пользователе в корзине
  saveName: (state, {surname, name, email, phone, region, city, home, street, apartament}) => {
    state.personName = name;
    state.personSurname = surname;
    state.personEmail = email;
    state.personPhone = phone;
    state.personRegion = region;
    state.personCity = city;
    state.personHome = home;
    state.personStreet = street;
    state.personApartament = apartament;
  },

  clearComparison: (state) => {
    state.comparison = [];
  }
}

export const actions = {
  async createUserProduct({commit}, product) {
    commit("addProduct", product);
  },
}
