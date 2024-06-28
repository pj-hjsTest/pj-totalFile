import React from 'react'

const Contact = () => {
  return (
    <div id="contactArea" className='container'>
      <div className="mailWrap">
        <p className='contact'><a href='mailto:penoge0415@gmail.com'>penoge0415@gmail.com</a>
        <span className="sendIcon">메일 보내기</span>
        </p>
      </div>
      <p className="desc">고민을 통해 성장하는 퍼블리셔가 되고 싶습니다. <br /> 포트폴리오를 봐주셔서 감사합니다.</p>
    </div>
  )
}

export default Contact