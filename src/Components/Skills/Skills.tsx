import "./index.scss";

const Skills = (props:any) => {

  return (
    <div className='skill-div'>
      <img src={props.src} className='skill-image'></img>
    </div>
  )
}

export default Skills;