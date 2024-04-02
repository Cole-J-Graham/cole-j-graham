import './index.scss';
import ProjectPane from './projectpane.tsx'

const Projects = () => {
    return (
        <div className='project-docker'>
            <ProjectPane text='Testing' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
            <ProjectPane text='Testing' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
        </div>
    )
}

export default Projects;