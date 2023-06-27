import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logout from '../../svg/icon/bx-log-out.svg';
import logo from '../../svg/carambola-svgrepo-com.svg'
import useLocalStorage from "react-use-localstorage";

export default function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  const navigator = useNavigate();

  function goLogout() {
    setToken('')
    alert('Usuário deslogado!')
    navigator('/login')
  }

  return (
    <>
      <AppBar position="static" className="navegacao">
        <Toolbar variant="dense" className="sb">
          <Box className="cursor">
            <img className="logo" src={logo} alt="desenho de um pedaço de carambola" />
          </Box>

          <Box className="sb">
            <Link to='/home' className="text-decoration-none">
            <Box mx={1} className="cursor">
              <Typography className='menuText'>
                HOME
              </Typography>
            </Box>
            </Link>
            <Link to='/posts' className="text-decoration-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                POSTAGENS
              </Typography>
            </Box>
            </Link>
            <Link to='/temas' className="text-decoration-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                TEMAS
              </Typography>
            </Box>
            </Link>
            <Link to='/formularioTema' className="text-decoration-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                NOVO TEMA
              </Typography>
            </Box>
            </Link>
          </Box>
            <Box mx={1} className="cursor logout" onClick={goLogout}>
              <Typography variant="h6">
                LOGOUT
              </Typography>
              <img src={logout} alt="um retângulo como uma porta e uma seta saindo dele" />
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
