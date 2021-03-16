import PropTypes from 'prop-types'
import { iconInputContainer } from './IconInput.module.scss'
import Icons from '../Icons/Icons'
import Input from '../Input/Input'

const IconInput = ({ type, state, visible, ...restProps }) => {
  return (
    <div className={iconInputContainer}>
      { type === 'email' ? <Icons iconType="letter" title="Letter 아이콘" /> : <Icons iconType="lock" title="Lock 아이콘" />}
      <Input type={type} visible={visible}/>
    </div>
  )
}

IconInput.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.string,
  visible: PropTypes.bool,
}

export default IconInput