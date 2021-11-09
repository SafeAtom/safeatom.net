import { createTheme } from '@material-ui/core/styles'

export const customTheme = {
  // palette
  color: {
    amber: '#FFBD00',
    peach: '#FFA364',
    orange: '#FF6700',
    orangeLight: '#FF9232',
    fuchsia: '#FF0074',
    burghundy: '#BA0055',
    purple: '#8c50ff',
    plum: '#662D91',
    blueLight: '#a0c5ca',
    night: '#23262F',
    black: '#23262F',
    white: '#FCFCFD',
    whiteDark: '#F4F5F6',
    gray: '#777E90',
    grayDark: '#C4C4C4',
    grayscale: '#828282',
    stroke: '#E6E8EC',
    red: '#DA0037',
    redLight: '#FF5151',
    green: '#27AE60',
    yellow: '#FFF500',
    blue: '#3772FF'
  },

  font: {
    weight: {
      h2Larger: 700,
      h3Bold: 700,
      h3Normal: 400,
      body1Normal: 400,
      body1Larger: 500,
      body1Bold: 700,
      body1Bolder: 800,
      h2Bold: 700,
      body2Light: 300,
      body2Normal: 400,
      body2Bold: 700,
      captionNormal: 400,
      smallestTextNormal: 400,
      smallestTextlarger: 500
    }
  },

  // spacings
  space: {
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 64
  },

  button: {
    main: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px'
    }
  }
}

export const theme = createTheme({
  overrides: {
    MuiInput: {
      input: {
        '&::placeholder': {
          color: customTheme.color.gray,
          fontSize: '16px'
        },
        color: 'white' // if you also want to change the color of the input, this is the prop you'd use
      }
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: customTheme.color.night
    },
    textSecondary: {
      main: customTheme.color.grayDark
    },
    secondary: {
      main: customTheme.color.purple
    },
    error: {
      main: customTheme.color.white
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 1024,
      lg: 1300,
      xl: 1920
    }
  },
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontWeight: 400,
      fontSize: '3rem',
      '@media (min-width:800px)': {
        fontSize: '3.5rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '4rem'
      }
    },
    h3: {
      fontWeight: 400,
      fontSize: '2rem',
      '@media (min-width:800px)': {
        fontSize: '2.5rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '3rem'
      }
    },
    h4: {
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.05rem',
      fontSize: '0.9rem',
      '@media (min-width:800px)': {
        fontSize: '1rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.1rem'
      }
    },
    h2: {
      fontWeight: 400,
      fontSize: '1rem',
      '@media (min-width:800px)': {
        fontSize: '1.2rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.4rem'
      }
    },
    button: {
      fontWeight: 400,
      fontSize: '1rem',
      '@media (min-width:800px)': {
        fontSize: '1.1rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.25rem'
      },
      textTransform: 'none'
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.1rem',
      fontSize: '1rem',
      '@media (min-width:800px)': {
        fontSize: '1.1rem'
      },
      '@media (min-width:1024px)': {
        fontSize: '1.25rem'
      }
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.7rem',
      letterSpacing: '0.05rem',
      '@media (min-width:800px)': {
        fontSize: '0.8rem'
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem'
      }
    },
    caption: {
      fontWeight: 300,
      fontSize: 14
    }
  }
})
