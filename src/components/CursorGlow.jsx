import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`,
      }}
    >
      <div className="w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full" />
    </div>
  );
};

export default CursorGlow;