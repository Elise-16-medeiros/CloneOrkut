import React from 'react';
import '../Post/Post.css';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import Comentario from './Comentario';
import Compartilhar from './Compartilhar';


export default function Icones() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button className='icone-add' variant="outline-light" size="sm"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                <AddIcon />
            </Button>
            <Fade in={open}>
                <div id="example-fade-text">
                    <Stack className="icones-lista" gap={3}>
                        <div>   
                            <Comentario/>
                        </div>
                        
                        <div>
                            <Button id='favorito' variant="outline-light" size="sm" type="submit">
                                <FavoriteIcon />
                            </Button>
                        </div>
                        
                        <div>
                            <Compartilhar />
                        </div>
                    </Stack>
                </div>
            </Fade>
        </>
    );
}

