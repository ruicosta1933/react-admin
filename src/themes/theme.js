import { createTheme } from '@material-ui/core/styles';

export const Darktheme = createTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

export const WhiteTheme = createTheme({
    palette: {
      type: 'light', // Switching the dark mode on is a single property value change.
    },
  });