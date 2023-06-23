import { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Login.css";
//import { UserLogin } from "../../model/UserLogin";
//import { login } from "../../services/service";
//import useLocalStorage from "react-use-localstorage";
import loginImg from '../../components/svg/undraw_login fitness.svg'

function Login() {
  //   const [token, setToken] = useLocalStorage('token')
  //   const [userLogin, setUserLogin] = useState<UserLogin>(
  //     {
  //       id: 0,
  //       usuario: '',
  //       senha: '',
  //       token: ''
  //     }
  //   )

  //   function updateModel(e: ChangeEvent<HTMLInputElement>) {
  //     setUserLogin({
  //       ...userLogin,
  //       [e.target.name]: e.target.value
  //     })
  //   }

  //   useEffect(() => {
  //     if(token != '') {
  //       navigate('/home')
  //     }
  //   }, [token])

  //   async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //     try{
  //       await login(`usuarios/logar`, userLogin, setToken)

  //     }
  //   }

  return (
    <Grid className="fundo" container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3" className="texto-entrar">Entrar</Typography>
            <TextField //value={userLogin.usuario}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="imputs"
            />
            <TextField //value={userLogin.senha}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              className="imputs"
            />
            <Box marginTop={2} textAlign="center">
              <Link to='/home'>
              <Button type="submit" variant="contained" className="botao-logar">
                Logar
              </Button>
              </Link>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center" className="texto-func">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to='/cadastrousuario' className="text-decorator-none">
            <Typography
              variant="subtitle1"
              className="texto-cadastrar"
            >
              Cadastre-se
            </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={6}
      >
        <img className="loginImg" src={loginImg} alt="desenho de uma mulher negra com cabelos compridos ao vento correndo ao lado de um celular com uma tela com algumas formas geométricas" />
      </Grid>
    </Grid>
  );
}

export default Login;
