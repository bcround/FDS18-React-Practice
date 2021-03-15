import PropTypes from 'prop-types'
import { ReactComponent as Letter } from './images/letter.svg'
import { ReactComponent as Lock } from './images/lock.svg'
import { ReactComponent as Hide } from './images/hide.svg'
import { ReactComponent as Show } from './images/show.svg'

const Icons = ({ iconType, title, ...restProps }) => {
  switch(iconType) {
    case('letter'):
      return <Letter title={title} {...restProps}/>

    case('lock'):
      return <Lock title={title} {...restProps}/>

    case('hide'):
      return <Hide title={title} {...restProps}/>

    case('show'):
      return <Show title={title} {...restProps}/>

    default: 
      return 'Error'
  }
}

Icons.propTypes = {
  iconType: PropTypes.string.isRequired,
}

export default Icons