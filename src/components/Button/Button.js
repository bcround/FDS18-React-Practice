import PropTypes from 'prop-types'
import classNames from 'classnames'
import { button, primary, secondary } from './Button.module.scss'

const Button = ({ buttonType, mode, children, className, ...restProps }) => {
  const composeClasses = classNames(
    button,
    mode === 'primary' ? primary : secondary,
    className,
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
  buttonType: PropTypes.string,
}

export default Button;