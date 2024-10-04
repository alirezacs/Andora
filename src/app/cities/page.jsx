import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import { Container, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import CityImage from '../../../assets/city1.jpg';
import LastProperties from '@/components/LastProperties/LastProperties';
import Footer from '@/components/Footer/Footer';

const Page = () => {
    return (
        <div className="main">
            <Header />
            <Banner title='شهر ها' />
            <Container maxWidth='xl' sx={{ my: 10 }}>
                <Grid2 container columnSpacing={3} sx={{ my: 5 }}>
                    <Grid2
                        size={6}
                        sx={{ position: 'relative', overflow: 'hidden' }}
                        className={styles['city-item']}
                    >
                        <Image src={CityImage} layout='responsive' style={{ borderRadius: '8px' }} />
                        <div className={styles['city-info']}>
                            <Typography fontWeight='bold' fontSize='1.8rem' sx={{ mb: 2 }}>تهران</Typography>
                            <Typography fontWeight='bold' fontSize='1rem'>۲۵ فایل</Typography>
                        </div>
                    </Grid2>
                    <Grid2
                        size={6}
                        container
                    >
                        <Grid2
                            size={6}
                            sx={{ position: 'relative', overflow: 'hidden' }}
                            className={styles['city-item']}
                        >
                            <Image src={CityImage} layout='responsive' style={{ borderRadius: '8px' }} />
                            <div className={styles['city-info']}>
                                <Typography fontWeight='bold' fontSize='1.8rem' sx={{ mb: 2 }}>تهران</Typography>
                                <Typography fontWeight='bold' fontSize='1rem'>۲۵ فایل</Typography>
                            </div>
                        </Grid2>
                        <Grid2
                            size={6}
                            sx={{ position: 'relative', overflow: 'hidden' }}
                            className={styles['city-item']}
                        >
                            <Image src={CityImage} layout='responsive' style={{ borderRadius: '8px' }} />
                            <div className={styles['city-info']}>
                                <Typography fontWeight='bold' fontSize='1.8rem' sx={{ mb: 2 }}>تهران</Typography>
                                <Typography fontWeight='bold' fontSize='1rem'>۲۵ فایل</Typography>
                            </div>
                        </Grid2>
                        <Grid2
                            size={6}
                            sx={{ position: 'relative', overflow: 'hidden' }}
                            className={styles['city-item']}
                        >
                            <Image src={CityImage} layout='responsive' style={{ borderRadius: '8px' }} />
                            <div className={styles['city-info']}>
                                <Typography fontWeight='bold' fontSize='1.8rem' sx={{ mb: 2 }}>تهران</Typography>
                                <Typography fontWeight='bold' fontSize='1rem'>۲۵ فایل</Typography>
                            </div>
                        </Grid2>
                        <Grid2
                            size={6}
                            sx={{ position: 'relative', overflow: 'hidden' }}
                            className={styles['city-item']}
                        >
                            <Image src={CityImage} layout='responsive' style={{ borderRadius: '8px' }} />
                            <div className={styles['city-info']}>
                                <Typography fontWeight='bold' fontSize='1.8rem' sx={{ mb: 2 }}>تهران</Typography>
                                <Typography fontWeight='bold' fontSize='1rem'>۲۵ فایل</Typography>
                            </div>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <LastProperties />
            </Container>
            <Footer />
        </div>
    );
}

export default Page;