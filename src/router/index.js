import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import BackgroundSize from '@/components/BackgroundSize'
import BackgroundClip from '@/components/BackgroundClip'
import BoxShadowMore from '@/components/BoxShadowMore'
import BoxShadow from '@/components/BoxShadow'
import BackgroundPosition from '@/components/BackgroundPosition'
import LinearGradient from '@/components/LinearGradient'
import LinearGradients from '@/components/LinearGradients'
import Button from '@/components/Button'
import ClipPath from '@/components/ClipPath'
import CutConner from '@/components/CutConner'
import Perspective from '@/components/Perspective'
import Pie from '@/components/Pie'
import DropShadow from '@/components/DropShadow'
import FilterSepia from '@/components/FilterSepia'
import FilterBlur from '@/components/FilterBlur'

const CssExpose = resolve => require.ensure([], () => resolve(require('@/pages/index')), 'index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/css-expose/main' }
    },
    {
      path: '/css-expose/',
      name: 'CssExpose',
      component: CssExpose,
      children: [
        {
          path: 'main',
          component: Main,
          name: 'Main'
        },
        {
          path: 'background-size',
          component: BackgroundSize,
          name: 'BackgroundSize'
        },
        {
          path: 'background-clip',
          component: BackgroundClip,
          name: 'BackgroundClip'
        },
        {
          path: 'box-shadow-more',
          component: BoxShadowMore,
          name: 'BoxShadowMore'
        },
        {
          path: 'background-position',
          component: BackgroundPosition,
          name: 'BackgroundPosition'
        },
        {
          path: 'linear-gradient',
          component: LinearGradient,
          name: 'LinearGradient'
        },
        {
          path: 'linear-gradients',
          component: LinearGradients,
          name: 'LinearGradients'
        },
        {
          path: 'button',
          component: Button,
          name: 'Button'
        },
        {
          path: 'clip-path',
          component: ClipPath,
          name: 'ClipPath'
        },
        {
          path: 'cut-conner',
          component: CutConner,
          name: 'CutConner'
        },
        {
          path: 'perspective',
          component: Perspective,
          name: 'Perspective'
        },
        {
          path: 'pie',
          component: Pie,
          name: 'Pie'
        },
        {
          path: 'box-shadow',
          component: BoxShadow,
          name: 'BoxShadow'
        },
        {
          path: 'drop-shadow',
          component: DropShadow,
          name: 'DropShadow'
        },
        {
          path: 'filter-sepia',
          component: FilterSepia,
          name: 'FilterSepia'
        },
        {
          path: 'filter-blur',
          component: FilterBlur,
          name: 'FilterBlur'
        }
      ]
    }
  ]
})
