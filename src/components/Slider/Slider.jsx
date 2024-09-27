'use client'

import { Box, Grid2, Tab, Tabs, Typography } from '@mui/material';
import './Slider.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Banner1 from '../../../assets/banner1.jpg';
import Banner2 from '../../../assets/banner2.jpg';
import Banner3 from '../../../assets/banner3.jpg';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Slider = () => {
    const [value, setValue] = useState(0);

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
          >
            {value === index && <Box sx={{ p: 1, width: '100%' }}>{children}</Box>}
          </div>
        );
    }

    return (
        <Grid2 container sx={{ backgroundColor: '#F1F0EB' }}>
            <Grid2
                size={{
                    sm: 12,
                    lg: 6
                }}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: 3 }}
            >
                <span className='slider-badge'>
                    ساختن خانه رویایی شما
                </span>
                <Typography variant='h2' fontWeight='bold' sx={{ paddingRight: {lg: '6rem', xs: 1}, mt: 2 }}>
                    بیش از خدمات، ما امکاناتی را ارايه می دهیم
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                    <Tabs value={value} onChange={(e, val) => setValue(val)}>
                        <Tab label='فروش' id={`tab-1`} />
                        <Tab label='اجاره' id={`tab-2`} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Grid2 container>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>جستجو</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>نوع ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>موقعیت</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>همه شهر ها</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>قمیت شما</Typography>
                            <div className="slider-search-input">
                                <input type="text" placeholder='حداکثر قیمت' />
                            </div>
                        </Grid2>

                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>مساحت</Typography>
                            <div className="slider-search-input">
                                <input type="text" placeholder='مساحت ساخت' />
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>وضعیت</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>وضعیت ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem', display: 'flex', alignItems: 'flex-end' }}
                        >
                            <button className='slider-search-submit'>
                                <SearchIcon sx={{ fontSize: '18px', mr: 1 }} />
                                <span>جستجوی ملک</span>
                            </button>
                        </Grid2>
                    </Grid2>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Grid2 container>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>جستجو</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>نوع ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>موقعیت</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>همه شهر ها</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>قمیت شما</Typography>
                            <div className="slider-search-input">
                                <input type="text" placeholder='حداکثر قیمت' />
                            </div>
                        </Grid2>

                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>مساحت</Typography>
                            <div className="slider-search-input">
                                <input type="text" placeholder='مساحت ساخت' />
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>وضعیت</Typography>
                            <div className="slider-search-input">
                                <select>
                                    <option>وضعیت ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem', display: 'flex', alignItems: 'flex-end' }}
                        >
                            <button className='slider-search-submit'>
                                <SearchIcon sx={{ fontSize: '18px', mr: 1 }} />
                                <span>جستجوی ملک</span>
                            </button>
                        </Grid2>
                    </Grid2>
                </CustomTabPanel>
            </Grid2>
            <Grid2
                size={{
                    xs: 12,
                    lg: 6
                }}
                sx={{ 
                    padding: {xs: 2, lg: 0}
                }}
            >
                <Swiper autoplay={{ delay: 1000 }}>
                    <SwiperSlide className='swiper-slide-item'><Image src={Banner1} width={700} style={{ width: '100%' }} /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-item'><Image src={Banner2} width={700} style={{ width: '100%' }} /></SwiperSlide>
                    <SwiperSlide className='swiper-slide-item'><Image src={Banner3} width={700} style={{ width: '100%' }} /></SwiperSlide>
                </Swiper>
            </Grid2>
        </Grid2>
    );
}

export default Slider;