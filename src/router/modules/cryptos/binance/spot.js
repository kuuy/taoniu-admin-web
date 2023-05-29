import marketsRouter from './spot/markets'
import indicatorsRouter from './spot/indicators'
import analysisRouter from './spot/analysis'
import tradingsRouter from './spot/tradings'
import isolatedRouter from './spot/margin/isolated'

const spotRouter = {
  path: 'spot',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Spot',
  meta: {
    title: '现货'
  },
  children: [
    marketsRouter,
    indicatorsRouter,
    analysisRouter,
    tradingsRouter,
    isolatedRouter
  ]
}

export default spotRouter
