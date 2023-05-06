import analysisRouter from './spot/analysis'
import tradingsRouter from './spot/tradings'

const spotRouter = {
  path: 'spot',
  component: () => import('@/views/empty'),
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
