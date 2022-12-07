import {Component} from 'react'
import {View, Text, Icon, Image} from '@tarojs/components'
import './index.scss'
import IconFont from './../../../assets/iconfont';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    icon: "icon-banquan",
    title: "关于",
    subIcon: "icon-right",
    size:38,
  }

  onEvent(){
    this.props.onClick()
  }
  render() {
    const {icon, title,size, subIcon} = this.props;
    return (
      <View className='tm-cell-container' onClick={this.onEvent.bind(this)}>
        <View className='left'>
          <IconFont name={icon} className='icon' size={size} />
          <Text className='title'>{title}</Text>
        </View>
        <View className='right'>
          <IconFont name={subIcon} className='icon' size={size} />
        </View>
      </View>
    )
  }
}
