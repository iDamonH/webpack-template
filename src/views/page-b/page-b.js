/* 
 * @Desc: index入口
 * @Author: Eleven 
 * @Date: 2019-01-05 00:55:26 
 * @Last Modified by: Eleven
 * @Last Modified time: 2019-04-30 18:45:22
 */

import '@babel/polyfill'
import { isMock } from 'utils'
import 'assets/style/modules/page-b'
import index from 'src/pages/page-b'

// 是否启用mock
isMock && require('src/mock')

class ViewIndex {
  init() {
    index.init()
  }
}

new ViewIndex().init()
