import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.scss"

const Login = () => {
return (
  <>
    <section>
      <div className="loginpage">
        <h1>Westagram</h1>
        <div className="logininput">
            <input className="idValue" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input className="passwordValue" type="text" placeholder="비밀번호" />
        </div>
          <button className="loginBtn"><Link to="/Main">로그인</Link></button>
        
        <div id="loginAlert">이메일 주소 또는 비밀번호를 잊으셨나요?</div>
      </div>
    </section>     
  </>
    )
}

export default Login
