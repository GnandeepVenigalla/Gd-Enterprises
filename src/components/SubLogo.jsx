import React from 'react';
import { Play, Video, Palette, Book, Globe, Zap, Smartphone } from 'lucide-react';

const SubLogo = ({ name, size = 24, className = "", imgSrc = null, hideBrand = false }) => {
  const getIcon = () => {
    if (imgSrc) {
      return (
        <img 
          src={imgSrc} 
          alt={name} 
          style={{ width: size, height: size, objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      );
    }
    return null;
  };

  const getFallbackIcon = () => {
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
      case 'gd website':
        return <Globe size={size} />;
      case 'paywise':
        return <Smartphone size={size} />;
      default:
        return <Zap size={size} />;
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {!hideBrand && (
        <div className="flex items-center justify-center p-2 bg-primary rounded-lg text-white">
          <span className="text-[10px] font-black leading-none">GD</span>
        </div>
      )}
      <div className="text-accent">
        {imgSrc ? (
          <>
            {getIcon()}
            <div style={{ display: 'none' }}>{getFallbackIcon()}</div>
          </>
        ) : (
          getFallbackIcon()
        )}
      </div>
    </div>
  );
};

export default SubLogo;
