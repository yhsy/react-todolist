import React, { Component } from 'react';
class XiaoJieJie extends Component {
  // JS的构造函数,
  constructor(props) {
    // 固定写法,调用父类的构造函数
    super(props)
    this.state = {
      // input输入框的值
      inputValue: '',
      // 服务列表
      list: ['头部按摩', '精油推背']
    }
  }

  render () {
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            placeholder="请输入服务内容"
          />
          <button onClick={this.addService.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index + item}
                  style={{ margin: '10px 0' }}
                >
                  {item}
                  <button style={{ marginLeft: '10px' }} onClick={this.delService.bind(this, index)}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  // 输入监听
  inputChange (e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  // 新增服务
  addService () {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  // 删除服务
  delService (index) {
    // console.log(index)
    let list = [...this.state.list];
    // 删除元素
    list.splice(index, 1);
    this.setState({
      list
    })
  }
}

export default XiaoJieJie;