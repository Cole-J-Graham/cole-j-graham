import './AnimatedText.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
    filePath: string;
    numberOfLines?: number;
    animationInterval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ filePath, numberOfLines = 2, animationInterval = 2000 }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLines, setCurrentLines] = useState<string[]>(Array(numberOfLines).fill(''));

    // Utility to fetch and read lines from a text file
    const fetchTextLines = async (file: string): Promise<string[]> => {
        try {
            const response = await fetch(file);
            const text = await response.text();
            return text.split('\n').filter(line => line.trim() !== '');
        } catch (error) {
            console.error('Error fetching text file:', error);
            return [];
        }
    };

    useEffect(() => {
        const getLines = async () => {
            const textLines = await fetchTextLines(filePath);
            setLines(textLines);
        };
        getLines();
    }, [filePath]);

    useEffect(() => {
        if (lines.length > 0) {
            const interval = setInterval(() => {
                const newLines = Array(numberOfLines).fill('').map(() => {
                    const randomIndex = Math.floor(Math.random() * lines.length);
                    return lines[randomIndex];
                });
                setCurrentLines(newLines);
            }, animationInterval); // Change the interval time as needed

            return () => clearInterval(interval);
        }
    }, [lines, numberOfLines, animationInterval]);

    return (
        <div className="animated-text-container">
            {currentLines.map((line, index) => (
                <motion.h2
                    key={index}
                    className="side-animation"
                    style={{ top: `calc(50% + ${Math.random() * 120 - 40}px)` }} // Adjust the height significantly
                    animate={{
                        x: 3000,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        opacity: [0, 1, 1, 0], // Animate opacity for fading in and out
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 60, // Slow down the movement across the screen
                        ease: "linear",
                        delay: index * (animationInterval / 1000) // Stagger the animations
                    }}
                >
                    {line}
                </motion.h2>
            ))}
        </div>
    );
};

export default AnimatedText;
