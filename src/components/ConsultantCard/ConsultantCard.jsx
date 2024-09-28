import Image from 'next/image';
import './ConsultantCard.scss';
import Avatar from '../../../assets/agents1.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';

const ConsultantCard = () => {
    return (
        <div className="consultant-card">
            <div className="consultant-image">
                <Image src={Avatar} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
            </div>
            <div className="consultant-info">
                <span className='consultant-name'>علیرضا مردانی</span>
                <span className='consultant-role'>طراح و توسعه دهنده</span>
                <div className="consultant-socials">
                    <a href="#"><InstagramIcon sx={{ color: '#1B6F58' }} /></a>
                    <a href="#"><InstagramIcon sx={{ color: '#1B6F58' }} /></a>
                    <a href="#"><InstagramIcon sx={{ color: '#1B6F58' }} /></a>
                    <a href="#"><InstagramIcon sx={{ color: '#1B6F58' }} /></a>
                </div>
            </div>
        </div>
    );
}

export default ConsultantCard;