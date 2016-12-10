import "./Confirm.scss"
import React from 'react'
import ReactDOM from 'react-dom'

export default class Confirm extends React.Component {
  static confirm(content, callback) {
    var c = <Confirm onOk={callback} content={content} />
    Confirm.setUpContainer()
    ReactDOM.render(c, Confirm.container)
  }

  static setUpContainer() {
    const container = document.createElement('div')
    document.body.appendChild(container)
    Confirm.container = container
  }

  constructor (props) {
    super(props)
  }

  onOK() {
    this.props.onOk()
  }

  onCancel() {
    ReactDOM.unmountComponentAtNode(Confirm.container)
    document.body.removeChild(Confirm.container)
  }

  render() {
    return (
      <div className="confirm-container">
        <div>
          <div className="content">{this.props.content}</div>
          <div className="options clearfix" >
            <button onClick={this.onOK.bind(this)}>确定</button>
            <button onClick={this.onCancel.bind(this)}>取消</button>
          </div>
        </div>
      </div>
    )
  }
}
