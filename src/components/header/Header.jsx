'use client';

import { Button, Container, Grid2 } from '@mui/material';
import './Header.scss';
import Image from 'next/image';
import Logo from '../../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Header = () => {
    const [responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState(false);

    return (
        <div className='header'>
            <Grid2 container sx={{ mx: 4, display: 'flex', alignItems: 'center' }}>
                <Grid2
                    size={{
                        xs: 6,
                        sm: 4,
                        lg: 2
                    }}
                >
                    <Image src={Logo} width={130} />
                </Grid2>
                <Grid2
                    size={{
                        sm: 4,
                        lg: 2
                    }}
                    sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    <div className="header-searchbox">
                        <input type="text" placeholder='جستجو' />
                        <button>
                            <SearchIcon />
                        </button>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 6
                    }}
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                        justifyContent: 'end'
                    }}
                >
                    <ul className='header-navbar'>
                        <li className='header-navbar-item active'>
                            <a href="#">
                                <span>خانه</span>
                                <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                            </a>
                            <ul className='header-navbar-item-dropdown'>
                                <li>
                                    <a href="#">زیرمنو اول</a>
                                </li>
                                <li>
                                    <a href="#">زیرمنو دوم</a>
                                </li>
                                <li>
                                    <a href="#">زیرمنو سوم</a>
                                </li>
                            </ul>
                        </li>
                        <li className='header-navbar-item'>
                            <a href="#">
                                <span>صفحات</span>
                                <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                            </a>
                        </li>
                        <li className='header-navbar-item'>
                            <a href="#">
                                <span>امکانات</span>
                                <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                            </a>
                        </li>
                        <li className='header-navbar-item'>
                            <a href="#">
                                <span>وبلاگ</span>
                                <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                            </a>
                        </li>
                        <li className='header-navbar-item'>
                            <a href="#">
                                <span>تماس با ما</span>
                            </a>
                        </li>
                    </ul>
                </Grid2>
                <Grid2
                    size={{
                        lg: 2
                    }}
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'end'
                    }}
                >
                    <a href="#" className='header-login'>ورود / ثبت نام</a>
                    <button className='header-contactus'>
                        تماس با ما
                    </button>
                </Grid2>
                <Grid2
                    size={{
                        xs: 6,
                        sm: 4
                    }}
                    sx={{
                        display: { xs: 'flex', lg: 'none' },
                        justifyContent: 'end',
                        alignItems: 'center'
                    }}
                >
                    <button className='header-responsive-btn' onClick={() => setResponsiveMenuIsOpen(true)}>
                        <MenuIcon sx={{ fontSize: '2rem', color: '#1B6F58' }} />
                    </button>
                </Grid2>
            </Grid2>
            <div className={`responsive-menu ${responsiveMenuIsOpen ? 'active' : ''}`}>
                <div className="responsive-menu-box">
                    <div className="responsive-menu-header">
                        <Image src={Logo} width={130} />
                        <button className='responsive-menu-close-btn' onClick={() => setResponsiveMenuIsOpen(false)}>
                            <CloseIcon sx={{ fontSize: '16px', color: '#fff' }} />
                        </button>
                    </div>
                    <div className="responsive-menu-body">
                        <ul className='responsive-menu-list'>
                            <li className='responsive-menu-item active'>
                                <a href="#">
                                    <span>صفحه اصلی</span>
                                    <span className='responsive-menu-item-arrow'>
                                        <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                                    </span>
                                </a>
                                <ul className='responsive-menu-item-dropdown'>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='responsive-menu-item'>
                                <a href="#">
                                    <span>صفحه اصلی</span>
                                    <span className='responsive-menu-item-arrow'>
                                        <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                                    </span>
                                </a>
                                <ul className='responsive-menu-item-dropdown'>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='responsive-menu-item'>
                                <a href="#">
                                    <span>صفحه اصلی</span>
                                    <span className='responsive-menu-item-arrow'>
                                        <KeyboardArrowDownIcon sx={{ color: '#020000', fontSize: '18px' }} />
                                    </span>
                                </a>
                                <ul className='responsive-menu-item-dropdown'>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>زیرمنو اول</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="responsive-menu-search">
                        <div className="responsive-menu-search-box">
                            <input type="text" placeholder='جستجو' />
                            <SearchIcon sx={{ fontSize: '1.2rem', color: '#1B6F58' }} />
                        </div>
                    </div>
                    <div className="responsive-menu-footer">
                        <a href="#" className='responsive-menu-login'>ورود / ثبت نام</a>
                        <button className='responsive-menu-contactus'>تماس با ما</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;