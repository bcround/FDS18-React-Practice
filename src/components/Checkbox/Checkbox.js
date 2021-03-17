import { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { checked, checkbox } from './Checkbox.module.scss'

export default class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  check = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    const composeClasses = classNames(
      checkbox,
      this.state.checked ? checked : null,
    )

    return (
      <label className={composeClasses}>
        <input type="checkbox" onChange={this.check} />
        {this.props.children}
      </label>
    )
  }
}

Checkbox.defaultProps = {
  children: '자동 로그인',
}