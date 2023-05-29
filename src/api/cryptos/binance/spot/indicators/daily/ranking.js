import request from '@/utils/request'

export function pagenate(query) {
  return request({
    url: '/cryptos/v1/binance/spot/indicators/daily/ranking',
    method: 'get',
    params: query
  })
}
