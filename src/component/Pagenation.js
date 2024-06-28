import React from 'react'

const Dot = ({num, scrollindex}) => {
  return (
    <li
      style={{
        width: scrollindex === num ? 8:5,
        background : scrollindex === num? "#111":"#ccc",
      }}
    ></li>
  )
}
const Pagenation = ({scrollindex}) => {
  return (
    <div className='pagenation'>
        <ul className="controller">
          <Dot num={0} scrollindex={scrollindex} />
          <Dot num={1} scrollindex={scrollindex} />
          <Dot num={2} scrollindex={scrollindex} />
          <Dot num={3} scrollindex={scrollindex} />
        </ul>
    </div>
  )
}

export default Pagenation