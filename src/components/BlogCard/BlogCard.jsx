import Image from 'next/image';
import './BlogCard.scss';
import BlogImage from '../../../assets/blog3.jpg';
import Avatar from '../../../assets/user3.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Typography } from '@mui/material';

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-image">
                <Image src={BlogImage} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                <span className='blog-category'>ساختمان</span>
                <div className="blog-admin-avatar">
                    <Image src={Avatar} style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-info">
                    <span className='blog-date'>
                        <CalendarMonthIcon sx={{ color: '#B4B7C9', fontSize: '15px', mr: 1 }} />
                        ۲۱ دی ۱۴۰۲
                    </span>
                    <span className='blog-comment'>
                        <InsertCommentIcon sx={{ color: '#B4B7C9', fontSize: '15px', mr: 1 }} />
                        ۱۰
                    </span>
                </div>
                <Typography variant='h6' fontWeight='bold' sx={{ mt: 2 }}>
                    رونمایی از منظر دیجیتالی املاک و مستغلات
                </Typography>
            </div>
        </div>
    );
}

export default BlogCard;