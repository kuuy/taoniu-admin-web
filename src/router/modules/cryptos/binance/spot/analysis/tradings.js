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
      component: () => import('@/views/cryptos/binance/spot/analysis/tradings/fishers/page'),
      name: 'Fishers',
      meta: {
        title: '渔夫',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'scalping',
      component: () => import('@/views/cryptos/binance/spot/analysis/tradings/fishers/page'),
      name: 'Scalping',
      meta: {
        title: '头层洋葱',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'triggers',
      component: () => import('@/views/cryptos/binance/spot/analysis/tradings/fishers/page'),
      name: 'Triggers',
      meta: {
        title: '打地鼠',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
  ]
}

export default tradingsRouter
