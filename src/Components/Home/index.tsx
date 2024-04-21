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
                <FadeInText text="Professional Developer / Object Oriented C++ Specialist" el='h2' className='main-text-desc'/>
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
                toggleElement={<Skills src='/c++.png'>Show/Hide 1</Skills>}
                text={<FadeInText text="C++ being my primary language, I have used it for over two years learning is extensivley." el='h2' className='skill-text'/>}
                isActive={activeIndex === 0}
                onClick={() => handleToggle(0)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/js.png'>Show/Hide 2</Skills>}
                text={<FadeInText text="I have used Javascript consistently for website projects such as this current website." el='h2' className='skill-text'/>}
                isActive={activeIndex === 1}
                onClick={() => handleToggle(1)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/python-icon.png'>Show/Hide 3</Skills>}
                text={<FadeInText text="Python being the newest language I've taken under my belt, I have been finding great joy in learning its technologies and packages capabilites." el='h2' className='skill-text'/>}
                isActive={activeIndex === 2}
                onClick={() => handleToggle(2)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/htmlcss.png'>Show/Hide 4</Skills>}
                text={<FadeInText text="I have used HTML and CSS extensively during my web development." el='h2' className='skill-text'/>}
                isActive={activeIndex === 3}
                onClick={() => handleToggle(3)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/ReactIcon.png'>Show/Hide 5</Skills>}
                text={<FadeInText text="This website was created using React as the main technology to ensure code reusability and scalability." el='h2' className='skill-text'/>}
                isActive={activeIndex === 4}
                onClick={() => handleToggle(4)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/sql-icon.png'>Show/Hide 6</Skills>}
                text={<FadeInText text="I acquired the SQL basics while learning MySQL." el='h2' className='skill-text'/>}
                isActive={activeIndex === 5}
                onClick={() => handleToggle(5)}
            />
            <ToggleText
                className='home-skill-div'
                toggleElement={<Skills src='/my-sql.png'>Show/Hide 7</Skills>}
                text={<FadeInText text="MySQL has been a technology I have been studying and learning consistently." el='h2' className='skill-text'/>}
                isActive={activeIndex === 6}
                onClick={() => handleToggle(6)}
            />
            </motion.div>
        </div>
    );
}

export default Home;