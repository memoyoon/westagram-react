import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.scss"

const Login = () => {

  //event가 일어난 input태그에 'event.target.value' 넣을 변경 함수 선언 및 할당 
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  // main으로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main")
  }
  

  //유효성 검사
  const checkValidaton = (event) => {
    if (email.includes("@")&&password.length>=5){
      {goToMain()}
    }
    if (email.includes("@")===false) {
      alert("ID는 @포함");
    }
    if (password.length<5) {
      alert("PW는 5자 이상")
    }
  }

  const activeBtn = email.includes('@')&&password.length>=5;

  //여기서부터 
  const onKeyPress =(e) => {
    if(e.key === 'Enter') {
      onClick();
    }
  }

  const onClick = () => {

  }
  //여기서까지 질문

  return (
    <>
      <section>
        <div className="loginPage">
          <h1>Westagram</h1>
          <div className="loginInput">
              <input 
                onChange={handleIdInput} 
                className="email" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input 
                onChange={handlePasswordInput} 
                className="password" 
                type="password" 
                placeholder="비밀번호" />
          </div>

            <button 
              type="submit" 
              className="logoffBtn" 
              onClick={checkValidaton}
              onKeyUp={checkValidaton}
              style={{backgroundColor: activeBtn ? "#0095f6":"#c4e6fd" }}>로그인</button>
          
          <div id="loginAlert" onClick={() => alert('정신 차려요!')}>이메일 주소 또는 비밀번호를 잊으셨나요?</div>
        </div>
      </section>     
    </>
  )
}

export default Login
