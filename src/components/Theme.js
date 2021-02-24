import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8aaca8',
      light: '#baded9',
      dark: '#5c7d79'
    },
    secondary: { main: '#fff' }
  },
  typography: {
    h1: {
      fontSize: '5rem',
      '@media (max-width: 700px)': {
        fontSize: '3rem'
      }
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width: 700px)': {
        fontSize: '2.2rem'
      }
    },
    h3: {
      fontSize: '2.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.6rem'
      }
    },
    h4: {
      fontSize: '2rem',
      '@media (max-width: 700px)': {
        fontSize: '1.2rem'
      }
    },
    h5: {
      fontSize: '1.6rem',
      '@media (max-width: 700px)': {
        fontSize: '1.2rem'
      }
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width: 700px)': {
        fontSize: '1rem'
      }
    }
  }
})

export default Theme