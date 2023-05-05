import Layout from '@/layout'

import tradingsRouter from './analysis/tradings'

const analysisRouter = {
  path: 'analysis',
  component: Layout,
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
