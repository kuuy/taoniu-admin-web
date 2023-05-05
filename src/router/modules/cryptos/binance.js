/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

import spotRouter from './binance/spot'

const binanceRouter = {
  path: 'binance',
  component: Layout,
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
