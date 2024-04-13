import './projectpane.scss';
import FadeInText from '../Animations/FadeInText.tsx';

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
                    <FadeInText 
                    text={props.text}
                    el='h2'
                    className='project-title'/>
                     <FadeInText 
                    text={props.textdesc}
                    el='h3'
                    className='project-description'/>
            </div>
            <button className='btn'><a className='btn-link' href={props.href}>Github</a></button>
            <a href={props.link}><img className='project-showcase' src='/youtube-logo-white.png'></img></a>
        </div>
        
    )
}

export default ProjectPane;