import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import { Container, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import ServiceImage from '../../../assets/why-choose1.png';
import AboutUs from '@/components/AboutUs/AboutUs';
import Consultants from '@/components/Consultants/Consultants';
import Footer from '@/components/Footer/Footer';

const Page = () => {
    return (
        <div className="main">
            <Header />
            <Banner title='درباره ما' />
            <Container sx={{ my: 15 }} maxWidth='xl'>
                <Grid2 container>
                    <Grid2
                        size={3}
                        sx={{ borderRight: '1px solid #DAE8F0', padding: '1rem 0' }}
                    >
                        <div className={styles['service-item']}>
                            <span className={styles['service-item-badge']}>خانه رویای شما</span>
                            <Typography variant='h3' fontWeight='bold' sx={{ mt: 5 }}>
                                خدمات ما چیست؟
                            </Typography>
                            <div className={styles['service-item-line']}></div>
                        </div>
                    </Grid2>
                    <Grid2
                        size={3}
                        sx={{ borderRight: '1px solid #DAE8F0', padding: '1rem' }}
                    >
                        <div className={styles['service-item']}>
                            <Image src={ServiceImage} />
                            <Typography fontWeight='bold' variant='h5' sx={{ mt: 3 }}>
                                ساختمان مدرن
                            </Typography>
                            <Typography fontWeight='bold' sx={{ color: '#687693', mt: 3 }} lineHeight='40px' fontSize='1.1rem'>
                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم صنعت بوده است.
                            </Typography>
                        </div>
                    </Grid2>
                    <Grid2
                        size={3}
                        sx={{ borderRight: '1px solid #DAE8F0', padding: '1rem' }}
                    >
                        <div className={styles['service-item']}>
                            <Image src={ServiceImage} />
                            <Typography fontWeight='bold' variant='h5' sx={{ mt: 3 }}>
                                ساختمان مدرن
                            </Typography>
                            <Typography fontWeight='bold' sx={{ color: '#687693', mt: 3 }} lineHeight='40px' fontSize='1.1rem'>
                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم صنعت بوده است.
                            </Typography>
                        </div>
                    </Grid2>
                    <Grid2
                        size={3}
                        sx={{ padding: '1rem' }}
                    >
                        <div className={styles['service-item']}>
                            <Image src={ServiceImage} />
                            <Typography fontWeight='bold' variant='h5' sx={{ mt: 3 }}>
                                ساختمان مدرن
                            </Typography>
                            <Typography fontWeight='bold' sx={{ color: '#687693', mt: 3 }} lineHeight='40px' fontSize='1.1rem'>
                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم صنعت بوده است.
                            </Typography>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
            <AboutUs />
            <Consultants />
            <Footer />
        </div>
    );
}

export default Page;