import './index.scss';
import FadeInText from '../Animations/FadeInText.tsx';
import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.div className='about-div'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
             <FadeInText text="#include<iostream>" el='h3' className='about-top-tags'/>
             <br />
             <FadeInText text="int main() {" el='h3' className='about-top-tags'/>
                <img className='about-pfp' src='/assets/pfp.jpg'></img>
                <img className='right-arrow' src='/assets/arrow.png'></img>
                <img className='left-arrow' src='/assets/arrowleft.png'></img>
                <h1 className='about-header'>About me</h1>
                <h2 className='about-text'>Over the course of the two years I have been created projects and working towards my degree. I have learned the importance of making reusable and modular code for an all around better development process.</h2>
            <FadeInText text="return 0;" el='h3' className='about-bottom-tags'/>
            <FadeInText text="}" el='h3' className='about-bottom-tags'/>
        </motion.div>
    )
}

export default About;