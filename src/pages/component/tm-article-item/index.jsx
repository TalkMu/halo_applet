import { Component } from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import Taro from "@tarojs/taro";
import IconFont from './../../../assets/iconfont';

export default class Index extends Component {
  static defaultProps = {
    style:{
      iconSize:26,
      iconColor:'#b8b8b8'
    },
    data:{
      id:0,
      title: "Windows安装Gradle详细图解教程",
      summary:"Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化构建开源工具。它使用一种基于Groovy的特定领域语言(DSL)来声明项目设置，也增加了基于Kotlin语言的kotlin-based DSL，抛弃了基于XML的各种繁琐配置。",
      visits:1358,
      categoryName:"软件工具",
      pushTime:"2022-11-01 02:05:25",
      category:'',
      likes:10,
      commentCount:1,
    }
  }
  articleDetail = ()=>{
    const {data}  = this.props;
    Taro.navigateTo({
      url: '../../templates/article/tm-article-detail/index?postId=' + data.id,
    })
  }
  render () {
    const {data,style} = this.props
    return (
      <View className='tm-article-item-container' onClick={this.articleDetail}>
        <Text className='title'>{data.title}</Text>
        <Text className='summary'>{data.summary}</Text>
        <View className='icon-group'>
          <IconFont name='icon-circle' size={style.iconSize} color={style.iconColor} />
          <Text className='category'>{data.category}</Text>
          <View className='division'>|</View>

          <IconFont name='icon-like' size={style.iconSize} color={style.iconColor} />
          <Text className='likes'>{data.likes}</Text>
          <View className='division'>|</View>

          <IconFont name='icon-comment' size={style.iconSize} color={style.iconColor} />
          <Text className='commentCount'>{data.commentCount}</Text>
          <View className='division'>|</View>

          <IconFont name='icon-attention' size={style.iconSize} color={style.iconColor} />
          <Text className='visits'>{data.visits}</Text>
          <View className='division'>|</View>

          <IconFont name='icon-time' size={style.iconSize} color={style.iconColor} />
          <Text className='pushTime'>{data.pushTime}</Text>
        </View>
        <View className='item-division'></View>
      </View>
    );


  }
}
