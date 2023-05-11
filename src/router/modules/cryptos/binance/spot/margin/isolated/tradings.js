const tradingsRouter = {
  path: 'tradings',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Tradings',
  meta: {
    title: '交易'
  },
  children: [
    {
      path: 'fishers',
      component: () => import('@/views/cryptos/binance/spot/margin/isolated/tradings/fishers/grids'),
      name: 'Fishers',
      meta: {
        title: '渔夫',
        roles: ['admin'] // or you can only set roles in sub nav
      },
      children: []
    }
  ]
}

export default tradingsRouter
