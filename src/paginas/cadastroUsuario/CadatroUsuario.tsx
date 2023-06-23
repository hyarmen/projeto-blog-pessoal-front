import React from 'react'
import './CadastroUsuario.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import cadastroImg from '../../components/svg/undraw_private_data_re_4eab.svg'
import { Link } from 'react-router-dom';

function CadastroUsuario() {
  return (
    <Grid className="fundo" container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6}>
        <img className='cadastroImg' src={cadastroImg} alt="" />
      </Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form>
            <Typography
              variant="h3" className="texto-entrar">Cadastrar</Typography>
            <TextField id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth className="imputs" />
            <TextField id="usuario" label="email" variant="outlined" name="usuario" margin="normal" type='email' fullWidth className="imputs" />
            <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth className="imputs" />
            <TextField id="confirmarSenha" label="confirmar senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth className="imputs" />
            <Box marginTop={2} textAlign="center">
              <Link to='/login'>
                <Button variant="contained" className="botao-cancelar">
                  Cancelar
                </Button>
              </Link>
              <Link to='/home'>
                <Button type="submit" variant="contained" className="botao-logar">
                  Cadastrar
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default CadastroUsuario;