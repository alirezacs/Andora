import { Container, Grid2, Typography } from '@mui/material';
import './Consultants.scss';
import ConsultantCard from '../ConsultantCard/ConsultantCard';

const Consultants = () => {
    return (
        <div className="consultants">
            <div className="consultants-title">
                <Typography variant='h4' fontWeight='bold'>
                    مشاور های ما
                </Typography>
                <span>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.</span>
            </div>
            <Container sx={{ mt: 5 }}>
                <Grid2 container columnSpacing={3} rowSpacing={6}>
                    <Grid2
                        size={{
                            lg: 3
                        }}
                    >
                        <ConsultantCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 3
                        }}
                    >
                        <ConsultantCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 3
                        }}
                    >
                        <ConsultantCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 3
                        }}
                    >
                        <ConsultantCard />
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
}

export default Consultants;