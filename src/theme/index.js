import { createMuiTheme } from '@material-ui/core/styles';

const HkTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
          main: '#2c3e50',
        },
        secondary: {
          main: '#D7CCC8',
        },
      },
    overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                color: '#D7CCC8', // Some CSS
            },
        },
    }
});

export default HkTheme