import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import Frame from './component/Frame';
import Main from './pages/Main';
import Navigation from './component/Navigation';
import Pagenation from './component/Pagenation';
import Tech from './pages/Tech';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  /* 리사이즈 이벤트 */
  const refresh = () => {
    window.onresize = function(){
      if(window.matchMedia("screen and (min-width: 760px) and (max-width:790px)").matches){
       document.location.reload()
      } else {return}
    }
  }
  refresh()
  /* 스크롤 이벤트 */
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [scrollindex, setScrollIndex] = useState(0);
  useEffect(() => {
    if(window.matchMedia("(min-width: 768px)").matches) {
      const wheelHandler = (e) => {
        e.preventDefault();
        const { deltaY } = e;
        const { scrollTop } = outerDivRef.current; 
        const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤 아래로
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight*2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
          outerDivRef.current.scrollTo({
            top: pageHeight *3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight *4,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
          if (scrollTop >= 0 && scrollTop < pageHeight) {
            //현재 1페이지
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            //현재 2페이지
            outerDivRef.current.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            setScrollIndex(0);
          } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
            // 현재 3페이지
            outerDivRef.current.scrollTo({
              top: pageHeight + DIVIDER_HEIGHT,
              left: 0,
              behavior: "smooth",
            });
            setScrollIndex(1);
          } else {
            outerDivRef.current.scrollTo({
              top: pageHeight*2 + DIVIDER_HEIGHT*2,
              left: 0,
              behavior: "smooth",
            });
            setScrollIndex(2);
          }
      }
    };
      const outerDivRefCurrent = outerDivRef.current;
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    } else { 
      //태블릿or모바일에서 구동

      const wheelHandlerMo = (e) => {
        const container = document.querySelectorAll('.container')
        const deltaY = document.querySelector('html').scrollTop
        if(0 <= deltaY && deltaY < (container[1].offsetTop - 400)) {
          //1페이지
          setScrollIndex(0);
        } else if((container[1].offsetTop - 400) <= deltaY && deltaY < (container[2].offsetTop - 400)) {
          //2페이지
          setScrollIndex(1);
        } else if ((container[2].offsetTop - 400)<= deltaY && deltaY<(container[3].offsetTop - 400)) {
          //3페이지
          setScrollIndex(2);
        } else {
          setScrollIndex(3)
        } 
      }
      wheelHandlerMo()
      const outerDivRefCurrent = outerDivRef.current;
      outerDivRefCurrent.addEventListener("wheel", wheelHandlerMo);
      return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandlerMo);
      };
  ;}
}, []);

  return (
    <div ref={outerDivRef} className='wholePage'>
      <Frame/> 
        <Navigation scrollindex={scrollindex}/>
      <Pagenation scrollindex={scrollindex}/>
      <Main />
      <div className='divider'></div>
      <Tech scrollindex={scrollindex}/>
      <div className='divider'></div>
      <Project/>
      <div className='divider'></div>
      <Contact />
    </div>  
  );
}

export default App;
