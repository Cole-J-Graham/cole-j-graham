import './index.scss';
import ProjectPane from './projectpane.tsx'
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <motion.div className='project-docker'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
                <ProjectPane 
                text='Decaying' 
                textdesc='C++' 
                href='https://github.com/Cole-J-Graham/Decaying' 
                src='/assets/test.jpg' 
                width="300px" 
                height="200px" 
                link='https://www.youtube.com/channel/UC-CK0EYqD-vZytVehYRZOxQ'>
            </ProjectPane>
            <ProjectPane 
                text='Decay' 
                textdesc='C++' 
                href='https://github.com/Cole-J-Graham/Decay' 
                src='/assets/test.jpg' 
                width="300px" 
                height="200px" 
                link='https://www.youtube.com/channel/UC-CK0EYqD-vZytVehYRZOxQ'>
            </ProjectPane>
        </motion.div>
    )
}

export default Projects;