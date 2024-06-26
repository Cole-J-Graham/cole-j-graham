import './index.scss';
import ContactPane from './contactpane.tsx';
import FadeInText from '../Animations/FadeInText.tsx';
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='contact-div'>
            <h1 className='header-text'>Contact Me</h1>
            <FadeInText text="I look forward to working together" el='h2' className='header-comment'/>
            <ContactPane text='colegraham117@gmail.com' src='/gmail-logo.png' right='0px' color='blue' fontSize='2px'></ContactPane>
            <ContactPane text='LinkedIn' src='/linkedin-logo.png' href='https://www.linkedin.com/in/cole-graham-0b2747278/'></ContactPane>
            <ContactPane text='Github' src='/git-logo.png' href='https://github.com/Cole-J-Graham?tab=repositories'></ContactPane>
            <ContactPane text='YouTube' src='/youtube-logo.png' href='https://www.youtube.com/channel/UC-CK0EYqD-vZytVehYRZOxQ'></ContactPane>
            <ContactPane text='Indeed' src='/indeed-logo.png' href='https://profile.indeed.com/p/coleg-ypy73lg'></ContactPane>
        </motion.div>
    )
}

export default Contact;