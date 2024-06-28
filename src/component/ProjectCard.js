import React from 'react'

const ProjectCard = ({item}) => {
  return (
    <div className='pjCard'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL+item?.bgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
  }}
    >
      <figure>
      {item.badges.map((badge,idx) => 
        <span className='badge' key={idx}>{badge}</span>
      )}
      </figure>
      <div className="pgInfoArea">
          <p className="pgTitle">{item?.pgTit}<span className='desc'>{item?.pgDesc}</span></p>
          <div className="useStack">
            {item.skills.map((skill, idx) => 
              <p className='techBadge' key={idx}>{skill}</p>
            )}
          </div>
          <div className="overview">
            <p><span>기여도</span>{item?.기여도}</p>
            <p><span>작업기간</span>{item?.작업기간}</p>
            <p><span>제작페이지</span>{item?.제작페이지}</p>
            <p className='projectAbout'>{item?.개요}</p>
          </div>
          <ul className="linkWrap">
            <li><a href={item?.link[0].web} target='_blank'>웹사이트로 이동</a></li>
            <li><a href={item?.link[1].git} target='_blank' className="git">GitHub</a></li>
          </ul>
      </div>
      {/* // pjInfoArea */}
    </div>
  )
}

export default ProjectCard