import { Grid2, Typography } from '@mui/material';
import './AboutUs.scss';
import Image from 'next/image';
import Sell from '../../../assets/sell.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AboutUs = () => {
    return (
        <>
            <Grid2 container sx={{ mt: 10 }}>
                <Grid2
                    size={{
                        lg: 6
                    }}
                >
                    <Image src={Sell} style={{ width: '100%', height: '100%' }} />
                </Grid2>
                <Grid2
                    size={{
                        lg: 6
                    }}
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', p: 10 }}
                >
                    <span className='slider-badge'>بازکردن قفل رویاها، بازکردن درها</span>
                    <Typography fontWeight='bold' variant='h3' sx={{ paddingRight: {lg: '6rem', xs: 1}, my: 2 }}>
                        پیمایش خانه شما ادیسه در پناهگاه شما
                    </Typography>
                    <Typography sx={{ maxWidth: '580px', textAlign: 'justify', color: '#687693', fontWeight: 'bold', mb: 4 }}>
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                    </Typography>
                    <div className="aboutus-sell">
                        <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
                            ملک خود را بفروشید
                        </Typography>
                        <Typography variant='body1' sx={{ mb: 2 }}>
                        لورم ایپسوم به سادگی ساختار متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است.
                        </Typography>
                        <ArrowBackIcon sx={{ color: '#1B6F58' }} />
                    </div>
                </Grid2>
            </Grid2>
            <Grid2 container sx={{ mt: 10 }}>
                <Grid2
                    size={{
                        lg: 6
                    }}
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', p: 10 }}
                >
                    <span className='slider-badge'>بازکردن قفل رویاها، بازکردن درها</span>
                    <Typography fontWeight='bold' variant='h3' sx={{ paddingRight: {lg: '6rem', xs: 1}, my: 2 }}>
                        پیمایش خانه شما ادیسه در پناهگاه شما
                    </Typography>
                    <Typography sx={{ maxWidth: '580px', textAlign: 'justify', color: '#687693', fontWeight: 'bold', mb: 4 }}>
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                    </Typography>
                    <div className="aboutus-sell">
                        <Typography variant='h5' fontWeight='bold' sx={{ mb: 2 }}>
                            ملک خود را بفروشید
                        </Typography>
                        <Typography variant='body1' sx={{ mb: 2 }}>
                        لورم ایپسوم به سادگی ساختار متن را در بر می گیرد. لورم ایپسوم استاندارد صنعت بوده است.
                        </Typography>
                        <ArrowBackIcon sx={{ color: '#1B6F58' }} />
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 6
                    }}
                >
                    <Image src={Sell} style={{ width: '100%', height: '100%' }} />
                </Grid2>
            </Grid2>
        </>
    );
}

export default AboutUs;