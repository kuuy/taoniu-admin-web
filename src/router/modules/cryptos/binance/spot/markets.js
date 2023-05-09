const marketsRouter = {
  path: 'markets',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Markets',
  meta: {
    title: '市场'
  },
  children: [
    {
      path: 'live',
      component: () => import('@/views/cryptos/binance/spot/markets/live'),
      name: 'Live',
      meta: {
        title: '实况',
        roles: ['admin'] // or you can only set roles in sub nav
      },
      children: []
    }
  ]
}

export default marketsRouter
