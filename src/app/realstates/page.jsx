'use client'

import Banner from "@/components/Banner/Banner";
import Header from "@/components/header/Header";
import styles from './style.module.scss';
import { Box, Container, Grid2, Tab, Tabs, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Image from "next/image";
import PropertyImage from '../../../assets/properties10.jpg';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Bed from '../../../assets/bed2.svg';
import Avatar from '../../../assets/user1.png';
import Footer from "@/components/Footer/Footer";

const Page = () => {
    const [value, setValue] = useState(0);

    const CustomTabPanel = (props) => {
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
        <div className="main">
            <Header />
            <Banner title='لیست املاک نجاری' />
            <Container sx={{ my: 10 }} maxWidth='xl'>
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
                            <div className={styles['slider-search-input']}>
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
                            <div className={styles['slider-search-input']}>
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
                            <div className={styles['slider-search-input']}>
                                <input type="text" placeholder='حداکثر قیمت' />
                            </div>
                        </Grid2>

                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>مساحت</Typography>
                            <div className={styles['slider-search-input']}>
                                <input type="text" placeholder='مساحت ساخت' />
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>وضعیت</Typography>
                            <div className={styles['slider-search-input']}>
                                <select>
                                    <option>وضعیت ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem', display: 'flex', alignItems: 'flex-end' }}
                        >
                            <button className={styles['slider-search-submit']}>
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
                            <div className={styles['slider-search-input']}>
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
                            <div className={styles['slider-search-input']}>
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
                            <div className={styles['slider-search-input']}>
                                <input type="text" placeholder='حداکثر قیمت' />
                            </div>
                        </Grid2>

                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>مساحت</Typography>
                            <div className={styles['slider-search-input']}>
                                <input type="text" placeholder='مساحت ساخت' />
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem' }}
                        >
                            <Typography sx={{ ml: 1, mb: 1 }} fontWeight='bold'>وضعیت</Typography>
                            <div className={styles['slider-search-input']}>
                                <select>
                                    <option>وضعیت ملک</option>
                                </select>
                            </div>
                        </Grid2>
                        <Grid2
                            size={4}
                            sx={{ padding: '1rem', display: 'flex', alignItems: 'flex-end' }}
                        >
                            <button className={styles['slider-search-submit']}>
                                <SearchIcon sx={{ fontSize: '18px', mr: 1 }} />
                                <span>جستجوی ملک</span>
                            </button>
                        </Grid2>
                    </Grid2>
                </CustomTabPanel>
                <div className={styles['realstates']}>
                    <div className={styles['realstates-filter']}>
                        <Typography fontWeight='bold' color="#687693">
                            نمایش ۱-۸ از ۲۷ نتیجه
                        </Typography>
                        <div className={styles['realstates-filter-input']}>
                            <select>
                                <option>نوع ملک</option>
                            </select>
                        </div>
                    </div>
                    <Grid2 container columnSpacing={3} rowSpacing={3}>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 size={6}>
                            <div className={styles['realstate-item']}>
                                <div className={styles['realstate-image']}>
                                    <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover',  borderRadius: '8px' }} />
                                </div>
                                <div className={styles['realstate-content']}>
                                    <div className={styles['realstate-comment']}>
                                        <div className={styles['realstate-category']}>
                                            <button>اپارتمان</button>
                                            <button>فروش</button>
                                        </div>
                                        <div className={styles['realstate-actions']}>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                            <button>
                                                <ShareIcon />                                                
                                            </button>
                                            <button>
                                                <ShareIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Typography variant="h5" fontWeight='bold' sx={{ mt: 5 }}>
                                        خانه های تعطیلات
                                    </Typography>
                                    <Typography variant="body2" fontWeight='bold' sx={{ mt: 2, color: '#687693' }}>
                                        ایران استان تهران میدان ازادی
                                    </Typography>
                                    <div className={styles['realstate-attributes']}>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                        <div className={styles['realstate-attribute']}>
                                            <Image src={Bed} width={25} style={{ marginLeft: '5px' }} />
                                            <span>۶</span>
                                        </div>
                                    </div>
                                    <div className={styles['realstate-footer']}>
                                        <div className={styles['realstate-avatar']}>
                                            <Image src={Avatar} style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                        <Typography sx={{ ml: 2, color: '#687693', display: 'flex', flex: 1 }}>علیرضا مردانی</Typography>
                                        <Typography sx={{ color: '#1B6F58', fontSize: '2rem' }} fontWeight='bold'>
                                            ۱۱۰۰ تومان
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Page;