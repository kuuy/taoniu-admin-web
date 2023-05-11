import request from '@/utils/request'

export function pagenate(query) {
  return request({
    url: '/cryptos/v1/binance/spot/tradings/scalping',
    method: 'get',
    params: query
  })
}
