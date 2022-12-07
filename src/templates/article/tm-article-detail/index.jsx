import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {detail as articleDetail} from '../../../api/article'
import moment from "moment/moment"
import towxmlApi from '../towxml'
import IconFont from "../../../assets/iconfont";

export default class Index extends Component {

  static defaultProps = {
    postId: 0,
  }
  state = {
    style:{
      iconSize:26,
      iconColor:'#b8b8b8'
    },
    data: {}
  }

  onLoad() {
    Taro.showLoading({
      title: '加载中',
    })
    const {router} = getCurrentInstance();
    articleDetail(router.params.postId).then(res => {
      const data = res.data.data
      let category = "";
      if (data.categories.length>0){
        category = data.categories[0].name;
      }
      const originalContent = towxmlApi(data.originalContent,'markdown',{
        base:'https://xxx.com',				// 相对资源的base路径
        theme:'light',					// 主题，默认`light`
        events:{					// 为元素绑定的事件方法
          tap:(e)=>{
            console.log('tap',e);
          }
        }
      });
      this.setState({
        data: {
          title:data.title,
          summary:data.summary,
          likes:data.likes,
          commentCount:data.commentCount,
          id:data.id,
          pushTime:moment(data.createTime).format('YYYY-MM-DD hh:mm'),
          category:category,
          visits:data.visits,
          originalContent:originalContent,
          tags:data.tags,
        }
      }, () => {
        Taro.hideLoading()
      })
    })
  }

  render() {
    const {data,style} = this.state;
    return (
      <View className='article-container'>
        <View className='header'>
          <Text className='title'>{data.title}</Text>
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
        </View>
        <View className='body'>
          <towxml nodes={data.originalContent} />
        </View>
        <View className='footer'>
        </View>
      </View>
    );
  }
}
