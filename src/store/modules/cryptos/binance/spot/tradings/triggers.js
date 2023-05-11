import { pagenate } from '@/api/cryptos/binance/spot/tradings/triggers'

const state = {
}

const mutations = {
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
