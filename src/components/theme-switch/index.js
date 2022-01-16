import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { setValueToLocalStorage } from '../../utils/localStorage';
import './style.scss';
import { useTheme } from '@emotion/react';

function ThemeSwitch() {
  const { themeMode, changeThemeMode } = useTheme();
  const handleClickChangeThemeMode = () => {
    if(themeMode === 'light') {
      changeThemeMode('dark');
      return;
    }

    changeThemeMode('light');
  }

  useEffect(() => {
    setValueToLocalStorage('themeMode', themeMode);
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <div className="dark-mode-button-wrapper">
      <IconButton 
        className="dark-mode-button" 
        onClick={handleClickChangeThemeMode}>
        {themeMode === 'light' ? (
          <DarkModeIcon className="dark-mode-icon" fontSize="large" />
          
        ) : (
          <LightModeIcon className="dark-mode-icon" fontSize="large" />
        )}
      </IconButton>
    </div>
  );
}

export default ThemeSwitch;
