import * as React from 'react';
import './MenuLateral.css';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Card from 'react-bootstrap/Card';
import Link from '@mui/material/Link';
import { indigo } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';


const preventDefault = (event) => event.preventDefault();

function MenuLateral() {
    return (
        <Box sx={{ width: 150, height: 500 }} onClick={preventDefault} >


            <MenuList>

                <Card className="zoom" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://cabanadoleitor.com.br/wp-content/uploads/2021/10/Komi-san.jpg" alt="Avatar" />
                    <Card.Body>
                   
                        <Card.Title>Squad 31</Card.Title>
                        
                        <Card.Text>
                            Grupo Formado por seis pessoas.
                        </Card.Text>
                    </Card.Body>
                </Card>
                


                <MenuItem  className='menu-direito'>
                <ListItemIcon>
                <AccountCircleIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Perfil</Link></MenuItem>
                
                <MenuItem  className='menu-direito'>
                <ListItemIcon>
                <FeedIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Feed</Link></MenuItem>
                
                <MenuItem className='menu-direito'>
                <ListItemIcon>
                <ChatIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Mensagens</Link></MenuItem>
                
                
             {/*<MenuItem className='menu-direito'>
                <ListItemIcon>
                <PhotoIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Fotos</Link></MenuItem>*/}
                
                <MenuItem className='menu-direito'>
                <ListItemIcon>
                <PersonAddIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Solicitações de amizade</Link></MenuItem>
                
                <MenuItem className='menu-direito'>
                <ListItemIcon>
                <SettingsIcon sx={{ color: indigo[500] }} />
                </ListItemIcon>
                <Link href="#" underline="hover">Configurações</Link></MenuItem>

    
            </MenuList>
            </Box>
    );
}

export default MenuLateral;

