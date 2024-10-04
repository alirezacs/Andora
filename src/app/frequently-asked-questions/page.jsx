import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid2, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/Footer/Footer';

const Page = () => {
    return (
        <div className="main">
            <Header />
            <Banner title='سوالات متداول' />
            <Container maxWidth='xl' sx={{ my: 15}}>
                <Grid2 container columnSpacing={5}>
                    <Grid2 size={6}>
                        <Grid2 container columnSpacing={5} rowSpacing={5}>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={6}>
                        <Grid2 container columnSpacing={5} rowSpacing={5}>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                            <Grid2 size={12}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{ backgroundColor: '#F1F0EB', color: '#1B6F58' }}
                                    >
                                        <Typography fontWeight='bold' fontSize='1.2rem'>
                                            سوالات متداول ۱
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#F1F0Eb' }}>
                                        <Typography fontWeight='bold' color='#687693' fontSize='1.1rem' lineHeight='40px'>
                                            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
            <Footer />
        </div>
    );
}

export default Page;