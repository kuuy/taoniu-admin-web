import spotRouter from './binance/spot'

const binanceRouter = {
  path: 'binance',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Binance',
  meta: {
    title: '币安'
  },
  children: [
    spotRouter
  ]
}

export default binanceRouter
