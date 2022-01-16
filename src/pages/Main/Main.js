import React from 'react'
import {useNavigate} from "react-router-dom"
import "./Main.scss"

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/")
  }

  return (
  <>
    {/* <!--header--> */}
    <header>
      <div className="title">
        <img onClick={goToLogin} src="/images/logo.png" alt="logo"/>
        <h1>
          Westagram
        </h1>
      </div>

      <div>
        <input className="input-div" type="text" placeholder="검색" />
        <i className="fas fa-search"></i>
      </div>

      <nav className="right-menu">
          <img alt="explore" src="/images/explore.png"/>
          <img alt="heart" src="/images/heart.png"/>
          <img alt="profile" src="/images/profile.png"/>
      </nav>
    </header>

    {/* <!--main--> */}
    <main>
      <div className="feeds">
        {/* <!--article--> */}
        <article>
          <header className="article-header">
            <div className="article-profile">
              <img className="img-profile" src="/images/yoon.jpeg" alt="img-profile" />
              <span className="userID main-id font-point">
              and_you
              </span>
            </div>

            <i className="fas fa-ellipsis-h"></i>
          </header>
          
          <div className="main-image">
          <img src="/images/feed.jpeg" alt="and_you님의 피드 사진" className="mainPic" />
          </div>

          <nav className="icons-react">
            <div className="icons-left">
              <img alt ="like-react" className="icon-react" src="/images/like.png" />
              <img alt="comment-react" className="icon-react" src="/images/comment.png" />
              <img alt="share-react" className="icon-react" src="/images/share.png" />
            </div>
            <img alt="save" className="icon-react" src="/images/save.png" />
          </nav>

          {/* <!-- article text data --> */}
          <div className="reaction">

            <div className="liked-people">
              <img className="pic" src="/images/yoon6.jpeg" alt="earpearp님의 프로필 사진" />
              <p><span className= "font-point">earpearp</span>님 <span className= "font-point">외 여러명</span>이 좋아합니다</p>
            </div>

            <div className="description">
              <p><span className= "font-point userID">and_you</span><span className="at-tag">@coding @koo</span> 😍</p>
            </div>

            <div className="comment-section">
              <ul className="comments">
                <li>
                  <span>
                    <span className= "font-point userID">bestsilveristhebest</span>여기 어디에요? 😀
                  </span>
                  <img className="comment-heart" src="/images/heart.png" alt="하트" />
                </li>
              </ul>

              <div className="time-log">
                <span>32분 전</span>
              </div>
            </div>          

            <div className="comment">
              <input id="comment-input" className="comment-input" type="text" placeholder="댓글 달기..." />
              <button type="submit" className="comment-submit" disabled>게시</button>
            </div>
          </div>

        </article>
      </div>    
         {/* <!--aside--> */}
    
      <div className="main-right">
        <div className="myProfile">
          <img alt="jiyoon" className="pic" src="/images/jiyoon.jpeg" />
          <div>
            <span className="userID font-point">seizetheday</span>
            <span className="sub-span">JIYOON KIM</span>  
          </div>
        </div>
        
        
        {/* <!-- story section --> */}
        <div className="section-story">
          <div className="menu-title">
            <span className="sub-title">스토리</span>
            <span className="find-more">모두 보기</span>
          </div>

          <ul className="story-list">
            <li>
              <div className="gradient-wrap">
                <img alt="chan" className="img-profile story" src="/images/chan2.jpeg" />
              </div>
              <div  className="profile-text">
                <span className="userID font-point">lovelychaeeun</span>
                <span className="overtime">10분 전</span>
              </div>
            </li>

            <li>
              <div className="gradient-wrap">
                <img alt="goeun" className="img-profile story" src="/images/goeun.png"/>
              </div>
              <div  className="profile-text">
                <span className="userID font-point">bestsilveristhebest</span>
                <span className="overtime">20분 전</span>
              </div>
            </li>

            <li>
              <div className="gradient-wrap">
                <img alt="chan" className="img-profile story" src="/images/chan1.jpeg" />
              </div>
              <div  className="profile-text">
                <span className="userID font-point">superchan</span>
                <span className="overtime">1시간 전</span>
              </div>
            </li>

            <li>
              <div className="gradient-wrap">
                <img alt="goeun" className="img-profile story" src="/images/goeun.jpeg" />
              </div>
              <div  className="profile-text">
                <span className="userID font-point">goeun_lovely</span>
                <span className="overtime">10분 전</span>
              </div>
            </li>
          </ul>
        </div>
        
          {/* <!-- recommendation --> */}
          {/* <!-- recommendation section --> */}
        <div className="section-recommend">
          <div className="menu-title">
            <span className="sub-title">회원님을 위한 추천</span>
            <span className="find-more">모두 보기</span>
          </div>
          
          <ul className="recommend-list">
            <li>
              <div className="recommend-friend-profile">
                <img className="img-profile" src="/images/yoon3.jpeg" alt="howareyou님의 프로필 사진" />
                <div className="profile-text">
                  <span className="userID font-point">howareyou</span>
                  <span className="sub-span">lovelychaeeun님 외 2명이... </span>
                </div>
              </div>
              <span className="btn-follow">팔로우</span>
            </li>

            <li>
              <div className="recommend-friend-profile">
                <img className="img-profile" src="/images/imfine.jpeg" alt="imfine님의 프로필 사진" />
                <div className="profile-text">
                  <span className="userID font-point">imfine</span>
                  <span className="sub-span">bestsilveristhebest님 외 3명이...</span>  
                </div>
              </div>
              <span className="btn-follow">팔로우</span>
            </li>
            <li>

              <div className="recommend-friend-profile">
                <img className="img-profile" src="/images/hello.jpeg" alt="thankyou님의 프로필 사진" />
                <div className="profile-text">
                  <span className="userID font-point">thankyou</span>
                  <span className="sub-span">momo님 외 5명이 팔로우합...</span>  
                </div>
              </div>
              <span className="btn-follow">팔로우</span>
            </li>
          </ul>
        </div>

        <footer>
          <p>instagram ∙ 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어</p>
          <p>© 2021 INSTAGRAM</p>
        </footer>
      


      </div>
      
    </main>               
          
    </>
    )
}

export default Main
