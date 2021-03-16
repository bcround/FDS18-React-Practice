import PropTypes from 'prop-types'
import { ReactComponent as Letter } from './images/letter.svg'
import { ReactComponent as Lock } from './images/lock.svg'
import { ReactComponent as Hide } from './images/hide.svg'
import { ReactComponent as Show } from './images/show.svg'
import { iconContainer, grayBorder } from './Icons.module.scss'
import classNames from 'classnames'

const Icons = ({ iconType, title, className, ...restProps }) => {
  const composeClasses = classNames(
    iconContainer,
    iconType === 'letter' ? grayBorder: iconType === 'lock' ? grayBorder: '',
    className,
  )

  return (
  <div className={composeClasses}>{
    (() => {
      switch(iconType) {
        case('letter'):
          return <Letter className="letter" title={title} {...restProps}/>

        case('lock'):
          return <Lock className="lock" title={title} {...restProps}/>

        case('hide'):
          return <Hide title={title} {...restProps}/>

        case('show'):
          return <Show title={title} {...restProps}/>

        default: 
          return 'Error'
      }
    })()
  }
  </div>
  )
}

Icons.propTypes = {
  iconType: PropTypes.string.isRequired,
}

export default Icons