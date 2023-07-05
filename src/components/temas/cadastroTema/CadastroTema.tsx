import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../Services/Service";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { toast } from 'react-toastify';
import Tema from "../../../model/Tema";
import './cadastroTema.css';

export default function CadastroTema() {

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

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

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {

    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    })

  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tema " + JSON.stringify(tema))

    if (id !== undefined) {
      console.log(tema)
      put(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema atualizado com sucesso!', {
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
      post(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema cadastrado com sucesso!', {
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
    back()

  }

  function back() {
    navigate('/temas')
  }
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
        <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}