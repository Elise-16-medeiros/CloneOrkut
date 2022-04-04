import React from 'react';
import './Navbar.css';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from 'react-bootstrap/Button';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
export default function Navbar() {
    return (
        <MDBNavbar className='menu'>
            <MDBContainer fluid>
                <MDBNavbarBrand>
                    <img
                        src='https://cdn.pixabay.com/photo/2016/04/01/11/11/circle-1300241_960_720.png'
                        height='30'
                        alt=''
                        loading='lazy' />
                    <Typography sx={{ color: grey[50] }} variant="h6" gutterBottom component="div">
                        Abar
                    </Typography>

                    <MenuItem>
                        <Link href="#" underline="none">
                            <AccountCircleIcon sx={{ color: grey[50] }} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#" underline="none">
                            <PeopleIcon sx={{ color: grey[50] }} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#" underline="none">
                            <FeedIcon sx={{ color: grey[50] }} />
                        </Link>
                    </MenuItem>




                </MDBNavbarBrand>

                <form className='d-flex input-group w-auto'>
                    <input type='search' className='form-control' aria-label='Search' />
                    <Button as="input" type="submit" value="Pesquisar" />
                    <MenuItem>
                        <Link className='sair' href="#" underline="none">
                            <LogoutIcon sx={{ color: grey[50] }} />
                        </Link>
                    </MenuItem>
                </form>

            </MDBContainer>
        </MDBNavbar>
    );
}