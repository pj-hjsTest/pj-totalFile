import React from 'react'
import TechList from '../component/TechList'
import Scroll from '../component/Scroll'

const Main = () => {
  return (
      <div id="main_sec" className='container'>
        <div className="mainArea">
          <div className="infoArea">
            <h2 className='blind'><a href="#">자기소개</a></h2>
            <h3>안녕하세요.📢<br />기본에 충실한 웹 퍼블리셔 <br />황지성입니다.</h3>
            <p className="overview"><span>목적에 충실한 웹</span>을 만들기 위해 끊임없이 고민하고 <br />공부하는 신입 퍼블리셔입니다. <span className="txt_lb">다양한 사용자들이 <span>읽기 쉬운,</span> <br /><span>직관적이고 기본에 충실한 웹 개발</span>을 지향합니다.</span></p>
          </div>
          {/* //infoArea */}
          <div className='mainAreaRight'>
            <div className="eduArea">
              <h2>1. 교육</h2>
              <ul className="eduList">
                <li><span>2023.09</span>한국방송통신대학교 미디어영상학과 졸업</li>
                <li><span>2023.10</span>이젠컴퓨터아카데미 웹퍼블리싱 과정 수료</li>
              </ul>
            </div>
            {/* //education -eduList에 수정 및 갱신*/}
            <div className="ToolArea">
              <h2>2. 사용 프로그램</h2>
              <ul className="toolList">
                <li>Visual Studio Code(vscode)</li>
                <li>Adobe Photoshop, Illustrator, Premiere Pro</li>
                <li>figma, XD</li>
              </ul>
            </div>
            <TechList/>
          </div>
        </div>
        <p className="desc">해당 웹사이트는 포트폴리오용으로 제작되었으며 상업적 목적이 없음을 기재합니다.</p>
        <Scroll />
      </div>
  )
}

export default Main