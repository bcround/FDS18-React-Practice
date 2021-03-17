import PropTypes from 'prop-types'
import { checkboxContainer, tooltip } from './AutoSignInCheckbox.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import Tooltip from '../Tooltip/Tooltip'

const AutoSignInCheckbox = ({ checked }) => {
  return (
    <div className={checkboxContainer}>
      <Checkbox />
      <Tooltip className={tooltip}/>
    </div>
  )
}
// export default class AutoSignInCheckbox extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       checked: false,
//     }
//   }

//   check = () => {
//     this.setState({
//       checked: !this.state.checked,
//     })
//   }

//   render() {
//     return (
//       <div className={checkboxContainer}>
//         <Checkbox />
//         <input type="checkbox" onChange={this.check}/>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// AutoSignInCheckbox.propTypes = {
//   checked:
// }

export default AutoSignInCheckbox