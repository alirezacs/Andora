import { Container, Grid2, Typography } from '@mui/material';
import './SuggestProperties.scss';
import ProperyCard from '../ProperyCard/ProperyCard';

const SuggestProperties = () => {
    return (
        <div className="suggest-properties">
            <div className="suggest-properties-title">
                <Typography variant='h4' fontWeight='bold'>فایل های پیشنهادی</Typography>
                <span>لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.</span>    
            </div>
            <Container>
                <Grid2 container columnSpacing={3} rowSpacing={3}>
                    <Grid2
                        size={{
                            lg: 4,
                            md: 6,
                            sm: 12
                        }}
                    >
                        <ProperyCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 4,
                            md: 6,
                            sm: 12
                        }}
                    >
                        <ProperyCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 4,
                            md: 6,
                            sm: 12
                        }}
                    >
                        <ProperyCard />
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
}

export default SuggestProperties;