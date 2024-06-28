import React, { useState } from 'react'
import ProjectCard from '../component/ProjectCard'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import dummy from "../db.json"

const Project = () => {
  const setting = {
    loop:true,
    slidesPerView:1 ,
    navigation: true,
    modules: [Navigation],
    className: "mySwiper pjList",
  }

  return (
    <div id="projectArea" className='container'>
        <h2><a href="#">PROJECT</a></h2>
        <Swiper {...setting}
/*         navigation={true}
        modules={[Navigation]} */
        >
          {dummy.projects.map((project)=> 
          <SwiperSlide key={project.id}><ProjectCard item={project} /></SwiperSlide>
          )}
        </Swiper >
    </div>
    
  )
}

export default Project