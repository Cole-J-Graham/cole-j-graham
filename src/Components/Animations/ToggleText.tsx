import React from 'react';

interface ToggleTextProps {
  toggleElement: React.ReactNode;
  text: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleText: React.FC<ToggleTextProps> = ({ toggleElement, text, className, isActive, onClick }) => {
  return (
    <div className={className}>
      <div onClick={onClick}>{toggleElement}</div>
      {isActive && <div>{text}</div>}
    </div>
  );
};

export default ToggleText;