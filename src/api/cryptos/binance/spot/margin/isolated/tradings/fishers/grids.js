import request from '@/utils/request'

export function pagenate(query) {
  return request({
    url: '/cryptos/v1/binance/spot/margin/isolated/tradings/fishers/grids',
    method: 'get',
    params: query
  })
}
