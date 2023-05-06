import request from '@/utils/request'

export function pagenate(query) {
  return request({
    url: '/cryptos/v1/binance/spot/tradings/fishers/grids',
    method: 'get',
    params: {
      'symbol': query.symbol,
      'current': query.current,
      'page_size': query.pageSize
    }
  })
}
