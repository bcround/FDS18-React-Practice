import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tooltipBubble, top, bottom, left, right } from './Tooltip.module.scss'

const Tooltip = ({ orientation, children, ...restProps }) => {
  const composeClasses = classNames(
    tooltipBubble,
    (() => {
      switch(orientation) {
        case('top'):
          return top;
        case('bottom'):
          return bottom;
        case('left'):
          return left;
        case('right'):
          return right;
        default:
          return 'Error'
      }
    })()
  )

  return (
    <div className={composeClasses}>
      {children}
    </div>
  )
}

Tooltip.defaultProps ={
  children: '개인 정보 보호를 위해 본인 기기에서만 이용해주세요',
}

Tooltip.propTypes = {
  children: PropTypes.string,
}

export default Tooltip;