import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../Services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { toast } from 'react-toastify';
import Tema from "../../../model/Tema";
import './deletarTema.css'

export default function DeletarTema() {

  const navigate = useNavigate();
  const [tema, setTema] = useState<Tema>()
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Tema deletado com sucesso!', {
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

  function nao() {
    navigate('/temas')
  }

  return (

    <><Box m={2}>
      <Card variant="outlined">
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o Tema:
            </Typography>
            <Typography color="textSecondary">
              {tema?.descricao}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
    </>
  )
}