/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

import binanceRouter from './cryptos/binance'

const cryptosRouter = {
  path: '/cryptos',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Cryptos',
  meta: {
    title: '加密货币',
    icon: 'component'
  },
  children: [
    binanceRouter
  ]
}

export default cryptosRouter
