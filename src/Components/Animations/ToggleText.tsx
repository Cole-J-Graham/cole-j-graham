import React from 'react';
import './ToggleText.scss'; // Import CSS file for styling

interface ToggleTextProps {
  toggleElement: React.ReactNode;
  text: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleText: React.FC<ToggleTextProps> = ({ toggleElement, text, className, isActive, onClick }) => {
  const parentClassName = isActive ? 'active' : 'inactive'; // Determine the class name for the parent element

  return (
    <div className={className}>
      <div className={parentClassName} onClick={onClick}>{toggleElement}</div>
      {isActive && <div>{text}</div>}
    </div>
  );
};

export default ToggleText;