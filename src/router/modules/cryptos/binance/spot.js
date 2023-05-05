/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

import analysisRouter from './spot/analysis'
import tradingsRouter from './spot/tradings'

const spotRouter = {
  path: 'spot',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Spot',
  meta: {
    title: '现货'
  },
  children: [
    analysisRouter,
    tradingsRouter
  ]
}

export default spotRouter
