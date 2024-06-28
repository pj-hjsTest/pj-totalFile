import React from 'react'

const TechList = () => {
  const TechInfo = ["HTML5", "CSS3", "JavaScript", "Jquery","REACT", "SCSS"]
  return (
    <div className='techList'>
        <h2>3. SKILLS</h2>
        <ul className="techIcon markupTool">
         {TechInfo.map((tech, idx) => <li key={idx}>{tech}</li>)}
        </ul>         
    </div>
  )
}

export default TechList