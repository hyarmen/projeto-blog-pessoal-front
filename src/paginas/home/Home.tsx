import { useEffect } from 'react';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { Grid, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import './Home.css';
import ModalPost from '../../components/postagens/modalPost/ModalPost';
import yoga from '../../components/svg/undraw_workout_gcgu.svg';

export default function Home() {
    const navigate = useNavigate();
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

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom component="h4" className='tituloHome'>Hoje é dia de se amar um pouquinho mais! 💛</Typography>
                        <Typography variant="h5" gutterBottom component="h5" className='subHome'>Vamos compartilhar conhecimentos?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPost />
                        </Box>
                        <Link to='/posts'>
                            <Button variant="outlined" className='btnesc'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={yoga} alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12}>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}