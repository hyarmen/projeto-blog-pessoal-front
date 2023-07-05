import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import Postagem from '../../../model/Postagem';
import { busca } from '../../../Services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box>
            <Card variant="outlined" className='cardBG'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2" className='colorY'>
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p" className='colorW'>
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p" className='colorW'>
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="btnAtt" size='small'>
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="btnDel" size='small'>
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
    </>)
}

export default ListaPostagem;