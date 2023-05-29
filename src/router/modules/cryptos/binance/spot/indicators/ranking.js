const rankingRouter = {
  path: 'ranking',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Ranking',
  meta: {
    title: '榜单'
  },
  children: [
    {
      path: 'risk_reward',
      component: () => import('@/views/cryptos/binance/spot/indicators/daily/ranking/risk_reward'),
      name: 'RiskReward',
      meta: {
        title: '风险收益',
        roles: ['admin'] // or you can only set roles in sub nav
      },
      children: []
    },
    {
      path: 'volume_profile',
      component: () => import('@/views/cryptos/binance/spot/indicators/daily/ranking/volume_profile'),
      name: 'RiskReward',
      meta: {
        title: '筹码分布',
        roles: ['admin'] // or you can only set roles in sub nav
      },
      children: []
    }
  ]
}

export default rankingRouter
