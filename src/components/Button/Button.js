import PropTypes from 'prop-types'
import classNames from 'classnames'
import { button, primary, secondary } from './Button.module.scss'

const Button = ({ mode, children, ...restProps }) => {
  const composeClasses = classNames(
    button,
    mode === 'primary' ? primary : secondary
  )

  return (
  <button type="button" className={composeClasses} {...restProps}>
    {children}
  </button>
  )
}

Button.defaultProps = {
  mode: 'primary',
}

Button.propTypes = {
  mode: PropTypes.string.isRequired,
  secondary: PropTypes.bool.isRequired,
}

export default Button;