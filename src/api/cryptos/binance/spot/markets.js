import request from '@/utils/request'

export function live(query) {
  return request({
    url: '/cryptos/v1/binance/spot/markets/live',
    method: 'get',
    params: {
      'symbol': query.symbol,
      'current': query.current,
      'page_size': query.pageSize
    }
  })
}
