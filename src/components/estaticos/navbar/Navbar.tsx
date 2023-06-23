import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logout from '../../svg/icon/bx-log-out.svg';
import logo from '../../svg/carambola-svgrepo-com.svg'

export default function Navbar() {
  return (
    <>
      <AppBar position="static" className="navegacao">
        <Toolbar variant="dense" className="sb">
          <Box className="cursor">
            <img className="logo" src={logo} alt="desenho de um pedaço de carambola" />
          </Box>

          <Box className="sb">
            <Box mx={1} className="cursor">
              <Typography className='menuText'>
                HOME
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                POSTAGENS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                TEMAS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" className='menuText'>
                NOVO TEMA
              </Typography>
            </Box>
          </Box>
          <Link to="/login" className="text-decorator-none">
            <Box mx={1} className="cursor logout" >
              <Typography variant="h6">
                LOGOUT
              </Typography>
              <img src={logout} alt="um retângulo como uma porta e uma seta saindo dele" />
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
