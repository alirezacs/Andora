import { Container, Grid2, Typography } from '@mui/material';
import './ContactUs.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactUs = () => {
    return (
        <Container sx={{ mt: 15 }}>
            <div className="contact-us">
                <Grid2 container>
                    <Grid2 size={{ lg: 6 }}>
                        <span className='slider-badge'>کاوش در خانه های منحصر به فرد در بازار ملک</span>
                        <Typography variant='h4' fontWeight='bold' sx={{ mt: 2 }}>
                            به دنبال خرید یک ملک هستید؟
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ lg: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }} fontWeight='bold'>
                            <LocalPhoneIcon sx={{ color: '#A68E74', fontSize: '3rem' }} />
                            +(002) 0106-8710-594
                        </Typography>
                        <button className='contactus-btn'>جستجوی ملک</button>
                    </Grid2>
                </Grid2>
            </div>
        </Container>
    );
}

export default ContactUs;