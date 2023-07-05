import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import User from '../../model/User';
import { cadastroUsuario } from '../../service/Service';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import cadastroImg from '../../components/svg/undraw_private_data_re_4eab.svg'
import './CadastroUsuario.css'

function CadastroUsuario() {
  const navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")
  const [user, setUser] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })

  const [userResult, setUserResult] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login")
    }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      toast.success('Usuario cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
    } else {
      toast.warn('Dados inconsistentes. Favor verificar as informações de cadastro.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  return (
    <Grid className="fundo" container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6}>
        <img className='cadastroImg' src={cadastroImg} alt="" />
      </Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3" className="texto-entrar">Cadastrar</Typography>
            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth className="imputs" />
            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="email" variant="outlined" name="usuario" margin="normal" type='email' fullWidth className="imputs" />
            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth className="imputs" />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmar senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth className="imputs" />
            <Box marginTop={2} textAlign="center">
              <Link to='/login'>
                <Button variant="contained" className="botao-cancelar">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" className="botao-logar">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>

    </Grid>
  )
}

export default CadastroUsuario;