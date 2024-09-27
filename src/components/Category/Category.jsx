import { Container, Grid2 } from '@mui/material';
import './Category.scss';
import Image from 'next/image';
import HomeImage from '../../../assets/category1.png';

const Category = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid2 container columnSpacing={3} rowSpacing={3}>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 6,
                        xs: 12
                    }}
                >
                    <div className="category-item">
                        <div className="category-image">
                            <Image src={HomeImage} />
                        </div>
                        <div className="category-info">
                            <span className='category-name'>مسکونی</span>
                            <span className='category-count'>(۲۶ نمونه)</span>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Category;