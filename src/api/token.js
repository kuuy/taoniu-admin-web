import request from '@/utils/request'

export function refresh(data) {
  return request({
    url: '/account/v1/token/refresh',
    method: 'post',
    data
  })
}
