import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/account/v1/login',
    method: 'post',
    data
  })
}

export function profile() {
  return request({
    url: '/account/v1/profile',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
