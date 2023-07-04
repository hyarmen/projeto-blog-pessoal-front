import React, { useEffect, useState } from 'react';
import Tema from '../../../model/Tema';
import { busca } from '../../../services/Service';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { toast } from 'react-toastify';
import './ListaTema.css';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
      if (token == '') {
          toast.warn('Você precisa estar logado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
          navigate("/login")
      }
  }, [token])


  async function getTema() {
      await busca("/temas", setTemas, {
          headers: {
              'Authorization': token
          }
      })
  }

  useEffect(() => {
      getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema => (
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;