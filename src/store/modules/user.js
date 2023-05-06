import { login, logout, profile } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import crypto from 'crypto'

const state = {
  accessToken: getToken('ACCESS_TOKEN'),
  refreshToken: getToken('REFRESH_TOKEN'),
  refreshAt: getToken('REFRESH_AT'),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_ACCESS_TOKEN: (state, token) => {
    state.accessToken = token
  },
  SET_REFRESH_TOKEN: (state, token) => {
    state.refreshToken = token
  },
  SET_REFRESH_AT: (state, timestamp) => {
    state.refreshAt = timestamp
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { email, password } = userInfo
    const hash = crypto.createHash('md5')
    hash.update(password)
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: hash.digest('hex') }).then(response => {
        const { data } = response
        const timestamp = Date.now() + 895000
        commit('SET_ACCESS_TOKEN', data.access_token)
        commit('SET_REFRESH_TOKEN', data.refresh_token)
        commit('SET_REFRESH_AT', timestamp)
        setToken('ACCESS_TOKEN', data.access_token)
        setToken('REFRESH_TOKEN', data.refresh_token)
        setToken('REFRESH_AT', timestamp)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  profile({ commit, state }) {
    return new Promise((resolve, reject) => {
      profile().then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('profile: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        // commit('SET_ACCESS_TOKEN', '')
        // commit('SET_REFRESH_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      // commit('SET_ACCESS_TOKEN', '')
      // commit('SET_REFRESH_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_ACCESS_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('profile')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
