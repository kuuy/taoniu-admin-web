import fishersRouter from './tradings/fishers'

const tradingsRouter = {
  path: 'tradings',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Tradings',
  meta: {
    title: '交易'
  },
  children: [
    fishersRouter,
    {
      path: 'scalping',
      component: () => import('@/views/cryptos/binance/spot/tradings/fishers/grids'),
      name: 'Scalping',
      meta: {
        title: '头层洋葱',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'triggers',
      component: () => import('@/views/cryptos/binance/spot/tradings/fishers/grids'),
      name: 'Triggers',
      meta: {
        title: '打地鼠',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
  ]
}

export default tradingsRouter
