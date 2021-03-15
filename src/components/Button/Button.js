import PropTypes from 'prop-types'
import classNames from 'classnames'
import { button, primary, secondary } from './Button.module.scss'

const Button = ({ buttonType, mode, children, ...restProps }) => {
  const composeClasses = classNames(
    button,
    mode === 'primary' ? primary : secondary
  )

  return (
  <button type={buttonType} className={composeClasses} {...restProps}>
    {children}
  </button>
  )
}

Button.defaultProps = {
  mode: 'primary',
  buttonType: 'button',
}

Button.propTypes = {
  mode: PropTypes.string.isRequired,
  secondary: PropTypes.bool.isRequired,
  buttonType: PropTypes.string,
}

export default Button;