import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { GitHub } from '@material-ui/icons';
import Carambola from '../../svg/starfruit logo escrito.svg'

function Footer() {
  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box className='box1'>
            <Box>
              <img className='starfruit' src={Carambola} alt="logo com uma carambola cortada e escrito starfruit beauty and health" />
            </Box>
            <Box className='contatos'>
              <Typography variant="h6" gutterBottom className='textos text-right'>CONTATOS</Typography>
            <Box className='redesocial'>
              <a href="https://github.com/hyarmen" target="_blank" rel="noopener noreferrer">
                <GitHub className='github' />
              </a>
              <a href="https://www.linkedin.com/in/anarosafernandes/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className='redes' />
              </a>
              </Box>
            </Box>
          </Box>
          <Box className='box2'>
            <Box>
              <a className='site' target="_blank" href="https://hyarmen.github.io/portifolio-ana" rel="noopener noreferrer">
                <Typography variant="subtitle2" gutterBottom className='textos'>© 2023 Copyright - Ana Rosa Fernandes - Portifólio</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;