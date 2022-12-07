import {Component} from 'react'
import {View, Text, Button, Input, Image, Form} from '@tarojs/components'
import './index.scss'
import Taro from "@tarojs/taro";

export default class Index extends Component {
  state = {
    avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
    nickName: "",
  }

  render() {
    const {nickName, avatarUrl} = this.state;
    return (
      <View className='container'>
        <Button className='avatar-wrapper' openType='chooseAvatar' onChooseAvatar={this.onChooseAvatar.bind(this)}>
          <Image className='avatar' name='avatarUrl' src={avatarUrl}></Image>
        </Button>
        <Form onSubmit={this.onSubmit.bind(this)} onReset={this.formReset} >
          <View className='nick-name-wrapper'>
            <Text className='label'>昵称</Text>
            <Input type='nickname' name='nickName' className='input' placeholder='请输入昵称' value={nickName}/>
          </View>
          <View className='submit-wrapper'>
            <Button className='btn' formType='submit'>提交</Button>
          </View>
        </Form>


      </View>
    )
  }

  onSubmit(e) {
    console.log(e);
    const {avatarUrl} = this.state;
    const{nickName} = e.detail.value
    Taro.setStorageSync(
      'userInfo',
      {
        avatarUrl: avatarUrl,
        nickName: nickName
      }
    )
    Taro.navigateBack({
        success: (res) => {
          console.log("返回成功" + res)
        },
        fail: (e) => {
          console.log("返回失败" + e)
        }
      },
    );
  }

  onChooseAvatar(e) {
    console.log(e)
    const {avatarUrl} = e.detail
    console.log(avatarUrl)
    this.setState({
      avatarUrl,
    })
  }
}
