import React from 'react'
import { Fab } from '@material-ui/core'
import { Navigation } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme'

const TopButton = () => {
  const topOfScreen = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Fab onClick={topOfScreen} style={{ background: '#333', position: 'fixed', bottom: '5%', right: '10%' }}>
          <Navigation color="primary" />
        </Fab>
      </div>
    </ThemeProvider>
  )
}

export default TopButton