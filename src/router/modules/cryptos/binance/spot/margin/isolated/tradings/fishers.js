const fishersRouter = {
  path: 'fishers',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Fishers',
  meta: {
    title: '渔夫'
  },
  children: [
    {
      path: 'listings',
      component: () => import('@/views/table/complex-table'),
      name: 'Listings',
      meta: {
        title: '列表',
        roles: ['admin']
      }
    },
    {
      path: 'grids',
      component: () => import('@/views/cryptos/binance/spot/margin/isolated/tradings/fishers/grids'),
      name: 'Grids',
      meta: {
        title: '网格',
        roles: ['admin']
      }
    }
  ]
}

export default fishersRouter
