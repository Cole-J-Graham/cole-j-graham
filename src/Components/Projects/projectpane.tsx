import './projectpane.scss';

const ProjectPane = (props:any) => {
    return (
        <div className='project-box'>
            <img 
                src={props.src} 
                width={props.width} 
                height={props.height} 
                className='project-image' 
                style={{
                    top: props.top
                }}>
            </img>
            <div className='project-pane'>
                    <h2 className='project-description'>{props.text}</h2>
            </div>
        </div>
        
    )
}

export default ProjectPane;