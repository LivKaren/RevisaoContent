import React from 'react';
import { Button } from 'react-native';
import { useTheme } from "../context/ThemeContext";

const TrocaTema = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Button
      title={isDarkTheme ? 'Tema claro' : 'Tema escuro'}
      onPress={toggleTheme}
    />
  );
};

export default TrocaTema;