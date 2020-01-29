import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import ble from 'WeChatBLE/packages/PlaygroundWeChatBLE-common/kotlin/PlaygroundWeChatBLE-common.js'

import './index.scss'

console.log(ble)

class Index extends Component {
  config =
  {
    navigationBarTitleText: 'BLE app'
  }

  componentWillReceiveProps (nextProps) {
    console.log("willReceiveProps")
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log("componentDidShow")
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View><Text>Scan screen</Text></View>
      </View>
    )
  }
}

export default Index
