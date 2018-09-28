/**
 * Created by LingFeng on 2017/9/22.
 */


import Menu from './menu';    // 菜单列表组件引入
import Nav from './nav';      // 导航栏组件引入
import BreadCrumbs from './breadCrumbs';   // 面包屑组件引入
const options = {
  Menu,            // 菜单栏列表组件
  Nav,             // 导航栏组件
  BreadCrumbs,     // 面包屑组件
}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}
export default options