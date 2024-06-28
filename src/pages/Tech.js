import React from 'react'
import Navigation from '../component/Navigation'

const Tech = ({scrollindex}) => {
  return (
    <div id='techArea' className={scrollindex ==1?"container active":"container"}>
      <div className='titleArea'>
        <h2><a href="#">개요</a></h2>
        <p className='desc'>디자인<br />퍼블리싱 및 개발</p>
        <p className="desc introduceTxt">
          잘 만든 웹의 기준은 다양하지만,제게는 구조가 잘 정돈되어있고, 가독성이 좋은 웹이 잘 만들어진 웹이라고 생각합니다. <br />가독성으로 정보전달에 불편함이 없게 하고, 기능으로 만족스러운 사용자 경험을 제공하고자 노력합니다.
          <span>
            새로운 기능을 공부하며, 다양한 방식으로 퍼블리싱되는 웹에 관심을 가지고 있습니다. 끈기있게 구현에 대한 욕심을 가지고 작업에 임하고자 합니다.
          </span>
        </p>
      </div>
      <div className="techInfo">
        <div id="design">
          <h3>DESIGN.<span>디자인</span></h3>
          <ul className="stackList">
            <li>Adobe Photoshop, Illustrator 를 사용한 편집 가능</li>
            <li>XD를 사용한 와이어프레임 구축, 프로토타이핑 작업 가능</li>
            <li className='toolWrap'>
              <p className="title">Tool</p>
              <ul className="depth2">
                <li><img src={require('../asset/photoshop.png')} alt="어도비 포토샵" /></li>
                <li><img src={require('../asset/xd.png')} alt="어도비 XD" /></li>
              </ul>
            </li>
          </ul>
          {/* //stackList */}
        </div>
        {/* //design */}
        <div id="publishing">
          <h3>PUBLISHING.<span>퍼블리싱</span></h3>
          <ul className="stackList">
            <li>웹접근성, 웹표준을 준수한 마크업이 가능합니다.</li>
            <li>미디어쿼리를 사용한 반응형, 모바일 환경 구현이 가능합니다.</li>
            <li>HTML5, CSS, SCSS(SASS)를 통한 퍼블리싱이 가능합니다.</li>
            <li>JAVASCRIPT, JQUERY라이브러리를 통한 웹 인터렉션 구현이 가능합니다.</li>
            <li>REACT에 대한 기초 지식이 있으며, 리액트 라이브러리를 활용한 웹 구현 경험이 있습니다.</li>
            <li className='toolWrap'>
              <p className="title">Tool</p>
              <ul className="depth2">
                <li><img src={require('../asset/html-5.png')} alt="HTML5" /></li>
                <li><img src={require('../asset/css-3.png')} alt="CSS3" /></li>
                <li><img src={require('../asset/js.png')} alt="java script" /></li>
                <li><img src={require('../asset/sass.png')} alt="sass" /></li>
                <li><img src={require('../asset/science.png')} alt="react" /></li>
              </ul>
            </li>
          </ul>
          {/* //stackList */}
        </div>
        {/* //publishing */}
        <div className="etc">
          <h3>ETC.<span>기타 경험</span></h3>
          <ul className="stackList">
            <li>NETLIFY, GIT을 통한 웹 배포·수정 경험이 있습니다.</li>
            <li>API 사용, 데이터 서버를 활용한 경험이 있습니다.</li>
            <li>데이터 서버에서 특정 정보값을 불러오는 과정에 대한 기초적인 이해가 있으며 간단한 활용이 가능합니다.</li>
          </ul>
          {/* //stackList */}
        </div>
        {/* etc */}
      </div>
    </div>
  )
}

export default Tech