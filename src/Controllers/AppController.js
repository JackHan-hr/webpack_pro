import React, {Component} from 'react'

export default class AppController extends Component {
  render() {
    return (
      <div>
        <div className='wrapCenter'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
