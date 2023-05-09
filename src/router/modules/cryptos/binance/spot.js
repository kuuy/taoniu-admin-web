import marketsRouter from './spot/markets'
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
    analysisRouter,
    tradingsRouter,
    isolatedRouter
  ]
}

export default spotRouter
