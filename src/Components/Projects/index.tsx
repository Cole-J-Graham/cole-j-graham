import './index.scss';
import ProjectPane from './projectpane.tsx'

const Projects = () => {
    return (
        <div className='project-docker'>
            <ProjectPane text='Decaying' href='https://github.com/Cole-J-Graham/Decaying' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
            <ProjectPane text='Decay' href='https://github.com/Cole-J-Graham/Decay' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
        </div>
    )
}

export default Projects;