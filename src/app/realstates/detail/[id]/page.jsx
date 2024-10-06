import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import { Box, Checkbox, Container, FormControlLabel, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import Bed from '../../../../../assets/bed2.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '../../../../../assets/user1.png';
import Gallery from '../../../../../assets/property-details1.jpg';
import Gallery2 from '../../../../../assets/property-details-large.jpg';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Page = ({params}) => {
    return (
        <div className="main">
            <Header />
            <Banner title='جزییات ملک' />
            <Container maxWidth='xl' sx={{ my: 10 }}>
                <div className={styles['realstate-info']}>
                    <div className={styles['realstate-title']}>
                        <Typography variant='h5' fontWeight='bold' sx={{ flex: 1 }}>
                            اپارتمان های لوکس

                            <span className={styles['realstate-vip']}> ویژه </span>
                        </Typography>
                        <button className={styles['realstate-category']}>اپارتمان</button>
                        <button className={styles['realstate-category']}>فروش</button>
                    </div>
                    <Typography sx={{ color: '#687693', mt: 2 }}>ایران، استان تهران، میدان آزادی</Typography>
                    <div className={styles['realstate-attributes']}>
                        <div className={styles['realstate-attributes-list']}>
                            <div className={styles['realstate-attribute']}>
                                <Image src={Bed} style={{ marginLeft: '10px' }} />
                                ۶ اتاق خواب
                            </div>
                            <div className={styles['realstate-attribute']}>
                                <Image src={Bed} style={{ marginLeft: '10px' }} />
                                ۶ اتاق خواب
                            </div>
                            <div className={styles['realstate-attribute']}>
                                <Image src={Bed} style={{ marginLeft: '10px' }} />
                                ۶ اتاق خواب
                            </div>
                            <div className={styles['realstate-attribute']}>
                                <Image src={Bed} style={{ marginLeft: '10px' }} />
                                ۶ اتاق خواب
                            </div>
                        </div>
                        <div className={styles['realstate-price']}>
                            ۱۱۰۰ تومان
                        </div>
                    </div>
                    <div className={styles['realstate-info-footer']}>
                        <div className={styles['realstate-actions']}>
                            <button>
                                <FavoriteIcon />
                            </button>
                            <button>
                                <FavoriteIcon />
                            </button>
                            <button>
                                <FavoriteIcon />
                            </button>
                        </div>
                        <div className={styles['realstate-user']}>
                            <Image src={Avatar} width={35} />
                            <span>علیرضا مردانی</span>
                        </div>
                    </div>
                </div>
                <div className={styles['realstate-gallery']}>
                    <Grid2 container columnSpacing={3} rowSpacing={3}>
                        <Grid2 size={4} container columnSpacing={3} rowSpacing={3}>
                            <Grid2 size={6}>
                                <Image src={Gallery} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                <Image src={Gallery} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                <Image src={Gallery} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                            </Grid2>
                            <Grid2 size={6}>
                                <Image src={Gallery} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                            </Grid2>
                        </Grid2>
                        <Grid2 size={8}>
                            <Image src={Gallery2} layout='responsive' style={{ borderRadius: '8px' }} />
                        </Grid2>
                    </Grid2>
                </div>
                <Grid2 container sx={{ my: 5 }}>
                    <Grid2 size={8}>
                        <div className={styles['realstate-description']}>
                            <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>شرح خدمات</Typography>
                            <p>
                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                            </p>
                            <p>
                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                            </p>
                        </div>
                        <div className={styles['realstate-attrs']}>
                            <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>ویژگی ها</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div className={styles['realstate-attr']}>
                                    <CheckIcon />
                                    ویژگی یک
                                </div>
                                <div className={styles['realstate-attr']}>
                                    <CheckIcon />
                                    ویژگی یک
                                </div>
                                <div className={styles['realstate-attr']}>
                                    <CheckIcon />
                                    ویژگی یک
                                </div>
                                <div className={styles['realstate-attr']}>
                                    <CheckIcon />
                                    ویژگی یک
                                </div>
                                <div className={styles['realstate-attr']}>
                                    <CheckIcon />
                                    ویژگی یک
                                </div>
                            </Box>
                        </div>
                        <div className={styles['realstate-comments']}>
                            <Typography sx={{ mb: 4 }} variant='h5' fontWeight='bold'>نظرات</Typography>
                            <div className={styles['realstate-comment']}>
                                <div className={styles['realstate-comment-avatar']}>
                                    <Image src={Avatar} width={55} />
                                </div>
                                <div className={styles['realstate-comment-info']}>
                                    <Typography fontWeight='bold' variant='h6' sx={{ ml: 2 }}>علیرضا مردانی</Typography>
                                    <Typography sx={{ ml: 2, mt: 1, color: '#687693' }}>۲۱ دی ۱۴۰۲</Typography>
                                    <div className={styles['realstate-comment-stars']}>
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </div>
                                    <Typography variant='body1' sx={{ mt: 1 }} fontWeight='bold'>
                                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles['realstate-comment']}>
                                <div className={styles['realstate-comment-avatar']}>
                                    <Image src={Avatar} width={55} />
                                </div>
                                <div className={styles['realstate-comment-info']}>
                                    <Typography fontWeight='bold' variant='h6' sx={{ ml: 2 }}>علیرضا مردانی</Typography>
                                    <Typography sx={{ ml: 2, mt: 1, color: '#687693' }}>۲۱ دی ۱۴۰۲</Typography>
                                    <div className={styles['realstate-comment-stars']}>
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </div>
                                    <Typography variant='body1' sx={{ mt: 1 }} fontWeight='bold'>
                                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles['realstate-comment']}>
                                <div className={styles['realstate-comment-avatar']}>
                                    <Image src={Avatar} width={55} />
                                </div>
                                <div className={styles['realstate-comment-info']}>
                                    <Typography fontWeight='bold' variant='h6' sx={{ ml: 2 }}>علیرضا مردانی</Typography>
                                    <Typography sx={{ ml: 2, mt: 1, color: '#687693' }}>۲۱ دی ۱۴۰۲</Typography>
                                    <div className={styles['realstate-comment-stars']}>
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </div>
                                    <Typography variant='body1' sx={{ mt: 1 }} fontWeight='bold'>
                                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles['realstate-comment']}>
                                <div className={styles['realstate-comment-avatar']}>
                                    <Image src={Avatar} width={55} />
                                </div>
                                <div className={styles['realstate-comment-info']}>
                                    <Typography fontWeight='bold' variant='h6' sx={{ ml: 2 }}>علیرضا مردانی</Typography>
                                    <Typography sx={{ ml: 2, mt: 1, color: '#687693' }}>۲۱ دی ۱۴۰۲</Typography>
                                    <div className={styles['realstate-comment-stars']}>
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                        <StarBorderIcon />
                                    </div>
                                    <Typography variant='body1' sx={{ mt: 1 }} fontWeight='bold'>
                                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={styles['realstate-comment-create']}>
                            <Typography variant='h5' fontWeight='bold' sx={{ mb: 3 }}>نظر بدهید</Typography>
                            <div className={styles['realstate-comment-form']}>
                                <Grid2 container columnSpacing={5}>
                                    <Grid2 size={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor="name" className={styles['realstate-comment-label']}>نام شما</label>
                                        <input type="text" className={styles['realstate-comment-input']} placeholder='نام خود را وارد کنید' />
                                    </Grid2>
                                    <Grid2 size={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor="email" className={styles['realstate-comment-label']}>ایمیل</label>
                                        <input type="email" className={styles['realstate-comment-input']} placeholder='ایمیل خود را وارد کنید' />
                                    </Grid2>
                                    <Grid2 size={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <label htmlFor="message" className={styles['realstate-comment-label']}>پیام</label>
                                        <textarea type="text" className={styles['realstate-comment-input']} placeholder='نظر شما...'></textarea>
                                    </Grid2>
                                </Grid2>
                                <button className={styles['realstate-comment-submit']}>ارسال</button>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>    
        </div>
    );
}

export default Page;