import isolatedRouter from './margin/isolated'

const marginRouter = {
  path: 'margin',
  component: () => import('@/views/empty'),
  redirect: 'noRedirect',
  name: 'Margin',
  meta: {
    title: '保证金'
  },
  children: [
    isolatedRouter
  ]
}

export default marginRouter
