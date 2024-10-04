import { Typography } from '@mui/material';
import './Banner.scss';

const Banner = ({title}) => {
    return (
        <div className="banner">
            <Typography variant='h3' fontWeight='bold'>
                {title}
            </Typography>
        </div>
    );
}

export default Banner;