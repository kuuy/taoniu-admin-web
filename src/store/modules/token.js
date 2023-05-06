import { refresh } from '@/api/token'
import { getToken, setToken } from '@/utils/auth'

const state = {
  accessToken: getToken('ACCESS_TOKEN'),
  refreshToken: getToken('REFRESH_TOKEN'),
  refreshAt: getToken('REFRESH_AT')
}

const mutations = {
  SET_ACCESS_TOKEN: (state, token) => {
    state.accessToken = token
  }
}

const actions = {
  refresh({ commit }, refreshToken) {
    return new Promise((resolve, reject) => {
      refresh({ refresh_token: refreshToken }).then(response => {
        const { data } = response
        commit('SET_ACCESS_TOKEN', data.access_token)
        setToken('ACCESS_TOKEN', data.access_token)
        resolve(data.access_token)
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
