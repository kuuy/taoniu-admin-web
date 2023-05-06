import { pagenate } from '@/api/cryptos/binance/spot/tradings/fishers/grids'

const state = {
}

const mutations = {
  SET_ACCESS_TOKEN: (state, token) => {
    state.accessToken = token
  }
}

const actions = {
  pagenate({ commit }, current, pageSize) {
    return new Promise((resolve, reject) => {
      pagenate(current, pageSize).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
