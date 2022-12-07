import {Component} from 'react'
import {View, Image, Text, Button, Input} from '@tarojs/components'
import TMCell from '../component/tm-cell/index'
import './index.scss'
import Taro from "@tarojs/taro";

export default class Index extends Component {


  state = {
    hasLogin:false,
    list: [
      {
        icon: "icon-yuangongrenzheng",
        title: "关于博主",
      },
      {
        icon: "icon-liuyan",
        title: "给我留言",
      },
      {
        icon: "icon-yue",
        title: "赞赏支持",
      },
      {
        icon: "icon-fankui",
        title: "意见反馈",
      },
      {
        icon: "icon-banquan1",
        title: "版权声明",
      },
      {
        icon: "icon-banquan1",
        title: "清除缓存",
        onEvent:()=>{

        }
      },
      {
        icon: "icon-fenxiang",
        title: "分享应用",
      },
    ],
    userInfo: {
      avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
      nickName: "请点击未登录"
    }
  }
  initPage(){
    const userInfo = Taro.getStorageSync('userInfo');
    console.log("userInfo:" + userInfo)
    if (userInfo != null && userInfo != '') {
      console.log("登录成功")
      this.setState({
        userInfo: userInfo,
        hasLogin: true
      })
    } else {
      console.log("未登录")
      this.initUserInfo()
    }
  }
  initUserInfo(){
    this.setState({
      hasLogin:false,
      userInfo: {
        avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        nickName: "请点击未登录"
      }
    })
  }
  componentDidShow(){
    console.log("componentDidShow")
    this.initPage();
  }
  clearCache = ()=>{
    Taro.clearStorageSync();
    this.initPage();
    console.log("清除缓存");
    Taro.showToast({
      title: '清除成功',
      icon: 'success',
      duration: 1000
    })
  }
  shareApp = ()=>{
  }
  render() {
    const {userInfo} = this.state;
    return (
      <View className='container'>
        <View className='header'>
          <Image className='avatar' src={userInfo.avatarUrl} onClick={this.goLogin.bind(this)} />
          <Text className='nickName'>{userInfo.nickName}</Text>
        </View>
        <View className='body'>
          <TMCell icon='icon-yuangongrenzheng' title='关于博主' />
          <TMCell icon='icon-liuyan' title='给我留言' />
          <TMCell icon='icon-yue1' title='赞赏支持' />
          <TMCell icon='icon-banquan1' title='版权声明' />
          <TMCell icon='icon-fankui' title='意见反馈' />
          <TMCell icon='icon-shanchu' title='清除缓存' onClick={this.clearCache.bind(this)} />
          <Button openType='share' className='share-btn'>
            <TMCell icon='icon-fenxiang' title='分享应用' onClick={this.shareApp.bind(this)}>

            </TMCell>
          </Button>

        </View>
        <View className='footer'></View>
      </View>
    )
  }
  goLogin(){
    const{hasLogin} = this.state;
    if (!hasLogin){
      Taro.navigateTo({url:'../../templates/my/login/index'});
    }
  }

  /**
   * 用户点击右上角分享
   * @param res
   * @returns {{path: string, title: string}}
   */
  onShareAppMessage (res) {
    return {
      title: '沐言博客-关注IT运维和互联网技术分享的博客程序',
      path: '/pages/index/index'
    }
  }

  /**
   * 分享到朋友圈
   * @param res
   * @returns {Promise<{path: string, imageUrl: string, title: string}>}
   */
  onShareTimeline = async (res) => {
    let shareData = {
      title: '沐言博客-关注IT运维和互联网技术分享的博客程序',
      path: '/pages/index/index',  // 分享的路径
      imageUrl: '',  // 分享的图片链接
  }
    return shareData;
  }
}
