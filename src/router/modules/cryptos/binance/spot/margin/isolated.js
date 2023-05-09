import tradingsRouter from './isolated/tradings'

const isolatedRouter = {
  path: 'margin/isolated',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Isolated',
  meta: {
    title: '逐仓保证金'
  },
  children: [
    tradingsRouter
  ]
}

export default isolatedRouter
