import tradingsRouter from './analysis/tradings'

const analysisRouter = {
  path: 'analysis',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Analysis',
  meta: {
    title: '分析'
  },
  children: [
    tradingsRouter
  ]
}

export default analysisRouter
