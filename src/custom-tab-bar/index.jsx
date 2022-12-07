import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  state = {
    selected: 0,
    selectedColor: '#0081ff',
    color: '#aaaaaa',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath:"/images/home.png",
        selectedIconPath:"../images/home-selected.png",
        text: '首页'
      },
      {
        pagePath: '/pages/category/index',
        iconPath:"/images/category.png",
        selectedIconPath:"/images/category-selected.png",
        text: '分类'
      },
      {
        pagePath: '/pages/diary/index',
        iconPath:"/images/diary.png",
        selectedIconPath:"/images/diary-selected.png",
        text: '微语'
      },
      {
        pagePath: '/pages/about/index',
        iconPath:"/images/about.png",
        selectedIconPath:"/images/about-selected.png",
        text: '关于'
      }
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx) {
    this.setState({
      selected: parseInt(idx)
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}
