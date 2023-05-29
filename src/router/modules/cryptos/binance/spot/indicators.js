import rankingRouter from './indicators/ranking'

const indicatorsRouter = {
  path: 'indicators',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Indicators',
  meta: {
    title: '指标'
  },
  children: [
    rankingRouter
  ]
}

export default indicatorsRouter
