import { ReactComponent as Black } from './images/type=black.svg'
import { ReactComponent as Color } from './images/type=colorful.svg'
import { ReactComponent as Mono } from './images/type=mono.svg'
import PropTypes from 'prop-types'

const Logo = ({ title, type, ...restProps }) => type === 'black' ? <a href="/"><Black title={title} {...restProps}/></a>: type === 'color' ? <a href="/"><Color title={title} {...restProps}/></a> : <a href="/"><Mono title={title} {...restProps}/></a>

Logo.defaultProps = {
  type: 'color',
  title: '쿠팡 컬러 로고'
}

Logo.propTypes = {
  type: PropTypes.oneOf(['color', 'mono', 'black']),
  title: PropTypes.string,
}

export default Logo