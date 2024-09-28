import { Box, Container, Grid2, Typography } from '@mui/material';
import './Footer.scss';
import Image from 'next/image';
import Logo from '../../../assets/logo2.png';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Grid2 container sx={{ my: 5 }} columnSpacing={5}>
                    <Grid2
                        size={{
                            lg: 4
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <Image src={Logo} />
                        <Typography variant='caption' sx={{ color: '#DAE8F0', mt: 2, fontSize: '1rem', textAlign: 'justify' }} fontWeight='bold'>
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                        </Typography>
                        <Box sx={{ display: 'flex', mt: 3 }}>
                            <a href="#" className='footer-social'>
                                <InstagramIcon sx={{ color: '#A68E74' }} />
                            </a>
                            <a href="#" className='footer-social'>
                                <InstagramIcon sx={{ color: '#A68E74' }} />
                            </a>
                            <a href="#" className='footer-social'>
                                <InstagramIcon sx={{ color: '#A68E74' }} />
                            </a>
                            <a href="#" className='footer-social'>
                                <InstagramIcon sx={{ color: '#A68E74' }} />
                            </a>
                        </Box>
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 2
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ul className='footer-menu'>
                            <li className='footer-menu-title'>
                                شرکت
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 2
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ul className='footer-menu'>
                            <li className='footer-menu-title'>
                                شرکت
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 2
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ul className='footer-menu'>
                            <li className='footer-menu-title'>
                                شرکت
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 2
                        }}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <ul className='footer-menu'>
                            <li className='footer-menu-title'>
                                اطلاعات تماس
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    موقعیت: تهران اندیشه
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                            <li className='footer-menu-item'>
                                <a href="#">
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </Grid2>
                </Grid2>
            </Container>
            <div className="footer-developer">
                <Typography sx={{ color: '#687693', textAlign: 'center' }}>
                    Developed By Alireza Mardani
                </Typography>
            </div>
        </div>
    );
}

export default Footer;