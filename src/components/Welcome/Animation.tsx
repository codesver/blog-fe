import React from "react";

interface AnimationProps {
  size: number;
}

const Animation: React.FC<AnimationProps> = ({ size }) => {
  return (
    <div
      className="Animation"
      style={{
        width: `${size}em`,
        height: `${size}em`,
      }}
    >
      <span></span>
    </div>
  );
};

export default React.memo(Animation);
