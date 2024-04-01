import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import './index.scss';
import AnimatedText from '../Animations/AnimatedText.tsx';
import Skills from '../Skills/Skills.tsx';

const Home = () => {
    return (
        <div className="container-home-page">
            <motion.div className="text-zone"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            >
            <span className='tags top-tags'>&lt;html&gt;</span>
                <h1>Hi, <br /> I'm Cole</h1>
                <h2>Professional Developer / Object Oriented C++ Specialist</h2>
                <div className="movingtext-flow">
                    <AnimatedText 
                        text="std::stack overflow //Fix errors with memory management std::vector&lt;int&gt; items;" 
                        top="760px"
                        delay="0"
                    />
                    <AnimatedText 
                        text="object = new object(); delete this->object;" 
                        top="740px"
                        delay="1"
                    />
                    <AnimatedText
                        text="object = new object(); delete this->object;" 
                        top="710px"
                        delay="2"
                    />
                    
                    <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>/html</span>
                    </span>
                </div>
            </motion.div>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            <Skills></Skills>

        </div>
    );
}

export default Home;