import Logo from '../Logo/Logo'
import IconInput from '../IconInput/IconInput'
import AutoSignInCheckbox from '../AutoSignInCheckbox/AutoSignInCheckbox'
import Button from '../Button/Button'
import { signInContainer, logInManage, loginForm, input, pwInput, button, line, copyright } from './SignIn.module.scss'

const SignIn = () => {
  return (
    <div className={signInContainer}>
      <Logo />
      <form className={loginForm}>
        <IconInput className={input} type="email" />
        <IconInput className={`${input} ${pwInput}`} type="password" visible={false}/>
        <div className={logInManage}>
          <AutoSignInCheckbox />
          <a href="/">아이디(이메일)/비밀번호 찾기 ▶︎</a>
        </div>
        <Button className={button} buttonType="submit" children="로그인" />
        <span className={line}></span>
        <Button className={button} mode="secondary" children="회원가입"/>
        <p className={copyright}>ⓒCoupang Corp. All rights reserved.</p>
      </form>
    </div>
  )
}

export default SignIn