import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import { Checkbox, Container, FormControlLabel, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import GoogleSvg from '../../../assets/google.svg';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '@/components/Footer/Footer';

const Page = () => {
    return (
        <div className="main">
            <Header />
            <Banner title='ورود / ثبت نام' />
            <Container max='xl' sx={{ my: 15 }}>
                <Grid2 container columnSpacing={5}>
                    <Grid2 size={6}>
                        <div className={styles['login-box']}>
                            <Typography fontWeight='bold' variant='h5'>
                                ورود کاربران
                            </Typography>
                            <Typography fontWeight='bold' color='#687693' sx={{ mt: 2 }}>
                                حساب کاربری ندارید؟ثبت نام
                            </Typography>
                            <button className={styles['google-signin']}>
                                <Image src={GoogleSvg} />
                                <Typography sx={{ mx: 1 }} fontWeight='bold'>
                                ورود از طریق گوگل
                                </Typography>
                            </button>
                            <div className={styles['box-divider']}>
                                <div className={styles['divider']}></div>
                                یا
                                <div className={styles['divider']}></div>
                            </div>
                            <div className={styles['box-forms']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="email">ایمیل</label>
                                    <div className={styles['input-group']}>
                                        <MailIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="email" name='email' placeholder='ایمیل' />
                                    </div>
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="password">گذرواژه</label>
                                    <div className={styles['input-group']}>
                                        <MailIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="password" name='password' placeholder='گذرواژه' />
                                    </div>
                                </div>
                                <div className={styles['remember-me']}>
                                    <FormControlLabel control={<Checkbox />} label="مرا به خاطر بسپار" sx={{ color: '#9EA6BA' }} />
                                    <span>فراموشی گذرواژه؟</span>
                                </div>
                                <button className={styles['form-submit']}>
                                    ورود
                                </button>
                            </div>
                        </div>
                    </Grid2>
                    <Grid2 size={6}>
                        <div className={styles['register-box']}>
                            <Typography fontWeight='bold' variant='h5'>
                                ثبت نام
                            </Typography>
                            <Typography fontWeight='bold' color='#687693' sx={{ mt: 2 }}>
                                حساب کاربری دارید؟ ورود کاربران
                            </Typography>
                            <button className={styles['google-signin']}>
                                <Image src={GoogleSvg} />
                                <Typography sx={{ mx: 1 }} fontWeight='bold'>
                                ثبت نام از طریق گوگل
                                </Typography>
                            </button>
                            <div className={styles['box-divider']}>
                                <div className={styles['divider']}></div>
                                یا
                                <div className={styles['divider']}></div>
                            </div>
                            <div className={styles['box-forms']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="name">نام</label>
                                    <div className={styles['input-group']}>
                                        <PersonIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="text" name='name' placeholder='نام' />
                                    </div>
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="email">ایمیل</label>
                                    <div className={styles['input-group']}>
                                        <MailIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="email" name='email' placeholder='ایمیل' />
                                    </div>
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="password">گذرواژه</label>
                                    <div className={styles['input-group']}>
                                        <MailIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="password" name='password' placeholder='گذرواژه' />
                                    </div>
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="re-password">تکرار گذرواژه</label>
                                    <div className={styles['input-group']}>
                                        <MailIcon sx={{ color: '#9EA6BA' }} />
                                        <input type="password" name='re-password' placeholder='تکرار گذرواژه' />
                                    </div>
                                </div>
                                <FormControlLabel control={<Checkbox />} label="موافق هستم با شرایط و ظوابط" sx={{ color: '#9EA6BA' }} />
                                <button className={styles['form-submit']}>
                                    ثبت نام
                                </button>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Container>
            <Footer />
        </div>
    );
}

export default Page;