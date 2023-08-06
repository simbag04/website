import { Skill } from "./Skill"
import { useRef, useEffect } from "react";
import { CSSLink, ExpressLink, GitLink, HTMLLink, JSLink, JavaLink, MongoDBLink, NodeLink, PythonLink, ReactLink, SQLLink, CPPLink } from "./devlinks";
import '../styles/Skills.css'

export const Skills = (props) => {
  const ref = useRef();
   
  useEffect(() => {
      if (ref.current) {
          props.setSkillsStart(ref.current.offsetTop);
          console.log(ref.current.offsetTop);
      }
  }, [props, props.setSkillsStart])

  return (
    <div className="skills section" ref={ref}
          style={{minHeight: `calc(100vh - ${props.headerHeight}px + 5px)`}}>
      <div className="title">Skills</div>
      <div className="all-skills">
        <Skill img={JavaLink} name="Java" alt="Java Icon"></Skill>
        <Skill img={PythonLink} name="Python" alt="Python Icon"></Skill>
        <Skill img={CPPLink} name="C++" alt="C Plus Plus Icon"></Skill>
        <Skill img={SQLLink} name="SQL" alt="SQL Icon"></Skill>
        <Skill img={JSLink} name="JavaScript" alt="JavaScript Icon"></Skill>
        <Skill img={MongoDBLink} name="MongoDB" alt="MongoDB Icon"></Skill>
        <Skill img={ExpressLink} name="Express" alt="Express Icon"></Skill>
        <Skill img={ReactLink} name="React" alt="React Icon"></Skill>
        <Skill img={NodeLink} name="Node" alt="Node Icon"></Skill>
        <Skill img={HTMLLink} name="HTML" alt="HTML Icon"></Skill>
        <Skill img={CSSLink} name="CSS" alt="CSS Icon"></Skill>
        <Skill img={GitLink} name="Git" alt="Git Icon"></Skill>
      </div>

    </div>

  )
}