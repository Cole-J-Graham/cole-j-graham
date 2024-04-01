import "./index.scss";
import { useState } from "react";
import { initialTabs as tabs } from "./skills";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <motion.div 
    className="window"
    initial={{ y: 10, opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 2.2 }}
    >
      <nav className="nav-skills">
        <ul className="ul-skills">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "li-selected" : "li-skills"}
              onClick={() => setSelectedTab(item)}
            >
                
                <img src={item.icon} style={{
                    width: item.iconwidth,
                    height: item.iconheight
                }}></img>
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img src={selectedTab.icon} style={{
                width: selectedTab.imgwidth,
                height: selectedTab.imgheight,
            }}
            animate={{rotate: 360}}
            ></motion.img>
          </motion.div>
          <motion.h2
            className="skill-desc"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >{selectedTab.text}</motion.h2>
        </AnimatePresence>
      </main>
    </motion.div>
  );
}

export default Skills;