import React from 'react';
import confetti from 'canvas-confetti';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { name: 'Barbie Pink', colors: {
      primary: '#ff69b4',
      light: '#ffc0cb',
      lighter: '#ffd1dc',
      gradient: 'linear-gradient(135deg, #ff69b4 0%, #ff8dc7 100%)',
      gradientLight: 'linear-gradient(135deg, #ffc0cb 0%, #ffd1dc 100%)'
    }},
    { name: 'Mint Dream', colors: {
      primary: '#98D8C8',
      light: '#B5E4D9',
      lighter: '#D4F1E9',
      gradient: 'linear-gradient(135deg, #98D8C8 0%, #B5E4D9 100%)',
      gradientLight: 'linear-gradient(135deg, #B5E4D9 0%, #D4F1E9 100%)'
    }},
    { name: 'Lavender', colors: {
      primary: '#B4A7D6',
      light: '#C9BEEB',
      lighter: '#E0D7F5',
      gradient: 'linear-gradient(135deg, #B4A7D6 0%, #C9BEEB 100%)',
      gradientLight: 'linear-gradient(135deg, #C9BEEB 0%, #E0D7F5 100%)'
    }},
    { name: 'Peach', colors: {
      primary: '#FFB6B9',
      light: '#FFC8CA',
      lighter: '#FFDADB',
      gradient: 'linear-gradient(135deg, #FFB6B9 0%, #FFC8CA 100%)',
      gradientLight: 'linear-gradient(135deg, #FFC8CA 0%, #FFDADB 100%)'
    }},
    { name: 'Sky Blue', colors: {
      primary: '#A5D8FF',
      light: '#C1E3FF',
      lighter: '#DCF0FF',
      gradient: 'linear-gradient(135deg, #A5D8FF 0%, #C1E3FF 100%)',
      gradientLight: 'linear-gradient(135deg, #C1E3FF 0%, #DCF0FF 100%)'
    }},
    { name: 'Rainbow Dream', colors: {
      primary: '#ff69b4',
      light: '#B5E4D9',
      lighter: '#E0D7F5',
      gradient: 'linear-gradient(135deg, #ff69b4 0%, #98D8C8 50%, #B4A7D6 100%)',
      gradientLight: 'linear-gradient(135deg, #FFB6B9 0%, #A5D8FF 50%, #ffd1dc 100%)'
    }}
  ];

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#98D8C8', '#B4A7D6', '#FFB6B9', '#A5D8FF']
      });

      // Confetti from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff69b4', '#98D8C8', '#B4A7D6', '#FFB6B9', '#A5D8FF']
      });
    }, 250);
  };

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
    if (theme.name === 'Rainbow Dream') {
      triggerConfetti();
    }
  };

  return (
    <div className="theme-switcher">
      <button 
        className="theme-button"
        onClick={() => document.querySelector('.theme-options').classList.toggle('show')}
        aria-label="Mudar tema"
      >
        🎨
      </button>
      <div className="theme-options">
        {themes.map((theme) => (
          <button
            key={theme.name}
            className={`theme-option ${currentTheme === theme.name ? 'active' : ''}`}
            onClick={() => handleThemeChange(theme)}
            style={{
              '--theme-primary': theme.colors.primary,
              '--theme-light': theme.colors.light,
              '--theme-lighter': theme.colors.lighter
            }}
            aria-label={`Mudar para tema ${theme.name}`}
          >
            <span className="theme-color" style={{ 
              background: theme.name === 'Rainbow Dream' 
                ? 'linear-gradient(90deg, #ff69b4, #98D8C8, #B4A7D6, #FFB6B9, #A5D8FF)'
                : theme.colors.primary 
            }}></span>
            <span className="theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher; 