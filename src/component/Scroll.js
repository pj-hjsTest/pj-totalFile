import React from 'react'
import {ReactComponent as BtnScroll} from '../asset/btn_scrollDown.svg'
import { motion } from 'framer-motion' 

const Scroll = () => {
  return (
    <>
      <p className="scrollAbout">아래로 스크롤 하세요.</p>
      <motion.div className='btnScroll'
        animate ={{bottom:['20px','10px']}} transition={{
          duration: 1,
          repeat: Infinity,
          delay: 2,
          repeatType: 'reverse'
      }}>
        <BtnScroll width={30}/>
      </motion.div>
    </> 
    
  )
}

export default Scroll