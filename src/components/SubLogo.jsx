import React from 'react';
import { Play, Video, Palette, Book, Globe, Zap, Smartphone } from 'lucide-react';

const SubLogo = ({ name, size = 24, className = "" }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'gd player':
        return <Play size={size} className="fill-current" />;
      case 'gd creations':
        return <Video size={size} />;
      case 'gd photoshop':
        return <Palette size={size} />;
      case 'gd publishers':
        return <Book size={size} />;
      case 'gd websites':
        return <Globe size={size} />;
      case 'paywise':
        return <Smartphone size={size} />;
      default:
        return <Zap size={size} />;
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center p-2 bg-primary rounded-lg text-white">
        <span className="text-[10px] font-black leading-none">GD</span>
      </div>
      <div className="text-accent">
        {getIcon()}
      </div>
    </div>
  );
};

export default SubLogo;
