import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../model/UserLogin";
import { api, login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../components/store/tokens/action";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import loginImg from '../../components/svg/undraw_login fitness.svg';
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('')
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
    }
  )

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Usuário não encontrado!');
    }
  }

  return (
    <Grid className="fundo" container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3" className="texto-entrar">Entrar</Typography>
            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="imputs"
            />
            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
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
              <Button type="submit" variant="contained" className="botao-logar">
                Logar
              </Button>
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
