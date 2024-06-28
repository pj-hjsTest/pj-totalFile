import React, { Suspense } from 'react'

const Navigation = ({scrollindex, propsHeight}) => {
  const gnbData = [{"num":0, "desc":"1. 자기소개"},{"num":1, "desc":"2. 개요"},{"num":2, "desc":"3. 개인작업물"},{"num":3, "desc":"4. 연락하기"}]
  /* active 시 */
  function currentIdx(idx) {
    if(idx.num === scrollindex) {
      return true
    }
  }
  const currentPage = gnbData.find(currentIdx)
  return (
    <nav className='gnbArea'>
        <ul className="gnb">
            { gnbData.map((gnb, idx) => 
              <li key={idx}><button className={currentPage.num == gnb?.num?"active":""}>{gnb?.desc}</button></li>
            )}
        </ul>
    </nav>
      
  )
}

export default Navigation