import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ToggleText from '../Animations/ToggleText';
import './index.scss';
import AnimatedText from '../Animations/AnimatedText.tsx';
import FadeInText from '../Animations/FadeInText.tsx';
import Skills from '../Skills/Skills.tsx';
import { useState } from 'react';

const Home = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

    return (
        <div className="container-home-page">
            <motion.div className="text-zone"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            >
            <span className='tags top-tags'>&lt;html&gt;</span>
                <FadeInText text="Hi," el='h1' className='main-text'/>
                <br />
                <FadeInText text="I'm Cole" el='h1' className='main-text'/>
                <FadeInText text="Professional Developer / Object Oriented C++ Specialist" el='h2' className='main-text'/>
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
            <Link to="/contact" className='flat-button' role='button'>CONTACT ME</Link>

            <motion.div className='main-home-skill-div'
             initial={{ opacity: 0, scale: 1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}>
            <h2 className='home-skill-div-text'>My Skills</h2>
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/ReactIcon.png'>Show/Hide 1</Skills>}
                text={<FadeInText text="This website was created using React, Javascript" el='h2' className='skill-text'/>}
                isActive={activeIndex === 0}
                onClick={() => handleToggle(0)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/js.png'>Show/Hide 2</Skills>}
                text={<FadeInText text="I use js" el='h2' className='skill-text'/>}
                isActive={activeIndex === 1}
                onClick={() => handleToggle(1)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/c++.png'>Show/Hide 3</Skills>}
                text={<FadeInText text="I use c++" el='h2' className='skill-text'/>}
                isActive={activeIndex === 2}
                onClick={() => handleToggle(2)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/htmlcss.png'>Show/Hide 4</Skills>}
                text={<FadeInText text="I use Html and CSS" el='h2' className='skill-text'/>}
                isActive={activeIndex === 3}
                onClick={() => handleToggle(3)}
            />
            </motion.div>
        </div>
    );
}

export default Home;