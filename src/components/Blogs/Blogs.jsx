import { Container, Grid2, Typography } from '@mui/material';
import './Blogs.scss';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blogs-title">
                <Typography variant='h4' fontWeight='bold'>
                    وبلاگ ما
                </Typography>
                <span>
                لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم متن را در بر می گیرد.
                </span>
            </div>
            <Container sx={{ mt: 6 }} maxWidth='xl'>
                <Grid2 container columnSpacing={3} rowSpacing={3}>
                    <Grid2
                        size={{
                            lg: 4,
                            xs: 6
                        }}
                    >
                        <BlogCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 4,
                            xs: 6
                        }}
                    >
                        <BlogCard />
                    </Grid2>
                    <Grid2
                        size={{
                            lg: 4,
                            xs: 6
                        }}
                    >
                        <BlogCard />
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
}

export default Blogs;