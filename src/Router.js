import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>     
    </BrowserRouter>
  )
}
//Route로 경로 이동하는 방법은 두 가지 있습니다. 
//import { Link } from 'react-router-dom'  <button className="loginBtn"><Link to="/Main">로그인</Link></button>, 원래 링크태그는 매번 새롭게 html파일을 가져오는데 근데 link컴포넌트를 사용하면, 한번만 네트워크에서 html파일을 가져오고 그 이후부터는 가져오지 않음, 왜냐하면 페이지를 바꿀때마다 계속해서 서버를 요청하면 서버가 부담이 됨, 우리 입장에서도 비효율적임, 실제로 바뀌는 건 글자 하나일 수 있음, 그래서 이렇게 페이지를 바꾸게 되면 경로만 보내고 페이지를 바꾸진 않음 리액트 라우터 돔에서 알아서 바꿔줘야할 부분만 보내주고 나머지는 그대로 내비둠, 달라진 부분만 바꾸고 싶으면 SPA 방식 링크 컴포넌트를 사용해야 함, 즉 정리하자면 효율성을 위해 링크 컴포넌트를 쓴다, a 태그로 변환이 되지만 실제 서버에 요청을 보내지는 않는다. 내부에서 이동할 때는 링크 컴포넌트를 사용하고 외부로 갈 때는 a태그를 사용한다. 

//import { useNavigate } from "react-router-dom"; const navigate = useNavigate(); 
//자바스크립트에서 ()는 함수 호출을 말 함, 그리고 함수르 return 값을 navigate라는 변수에 담았네요. 그리고 goToMain 함수를 보니까 navigate("/Main")이렇게 되죠. 
//그럼 어떨 때 Link를 쓰고, 어떨 때, navigate 함수를 쓸까요? Link는 클릭하면 무조건 라우팅하는거죠? 그런데 Navigate는 함수잖아요. 그러면 호출하거나 안하거나 할 수 있겠죠. if문을 사용해서 동작의 조건을 설정할 수도 있고요. 그럴 때는 navigate 함수를 쓰면 된다고 볼 수 있습니다. 이게 훅입니다. 

export default Router
