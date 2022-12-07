import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import IconFont from "../../../assets/iconfont";

export default class Index extends Component {
  static defaultProps = {
    title:"标题",
    subTitle:"副标题"
  }
  render () {
    const {title,subTitle} = this.props;
    return (
      <View className='tm-title-container'>
        <View className='left'>
          <View className='icon'></View>
          <Text className='title'>{title}</Text>
        </View>
        <View className='right'>
          <Text className='sub-title'>{subTitle}</Text>
          <IconFont name='icon-right' className='icon' size={38} />
        </View>
      </View>
    );
  }
}
