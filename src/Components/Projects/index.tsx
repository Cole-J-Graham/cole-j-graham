import './index.scss';
import ProjectPane from './projectpane.tsx'
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <motion.div className='project-docker'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
            <ProjectPane text='Decaying' href='https://github.com/Cole-J-Graham/Decaying' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
            <ProjectPane text='Decay' href='https://github.com/Cole-J-Graham/Decay' src='src/assets/test.jpg' width="300px" height="200px"></ProjectPane>
        </motion.div>
    )
}

export default Projects;