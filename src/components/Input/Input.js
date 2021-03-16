import PropTypes from 'prop-types'
import classNames from 'classnames'
import { userInputContainer, userInput, icon } from './Input.module.scss'
import Icons from '../Icons/Icons'

const Input = ({ type, state, visible, ...restProps }) => {
  const composeClasses = classNames(
    userInput
  )

  return (
    <label className={userInputContainer}>
      <input className={composeClasses} type={type} placeholder={type === 'email' ? '아이디(이메일)' : '비밀번호'} {...restProps}/>
      { type === 'password' ? visible ? <Icons className={icon} iconType="show" title="Show 아이콘"/> : <Icons className={icon} iconType="hide" title="Hide 아이콘"/> : null }
    </label>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.string,
  visible: PropTypes.bool,
}

export default Input