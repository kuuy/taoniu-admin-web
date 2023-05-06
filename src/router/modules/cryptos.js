import Layout from '@/layout'

import binanceRouter from './cryptos/binance'

const cryptosRouter = {
  path: '/cryptos',
  redirect: 'noRedirect',
  component: Layout,
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
