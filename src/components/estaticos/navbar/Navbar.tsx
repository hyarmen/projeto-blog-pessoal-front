import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logout from '../../svg/icon/bx-log-out.svg';
import logo from '../../svg/carambola-svgrepo-com.svg';
import { addToken } from "../../../store/tokens/action";
import { TokenState } from "../../../store/tokens/tokenReducer";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário Deslogado!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
    navigate('/login')
  }

  let navbarComponent;

  if(token != "") {
    navbarComponent = <AppBar position="static" className="navegacao">
    <Toolbar variant="dense" className="sb">
      <Link to='/home' className="text-decoration-none">
        <Box className="cursor">
          <img className="logo" src={logo} alt="desenho de um pedaço de carambola" />
        </Box>
      </Link>

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
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}
