import Image from 'next/image';
import './ProperyCard.scss';
import PropertyImage from '../../../assets/properties3.jpg';
import BedSvg from '../../../assets/bed.svg';
import UserAvatar from '../../../assets/user1.png';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const ProperyCard = () => {
    return (
        <div className="propery-card">
            <div className="property-image">
                <Image src={PropertyImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="property-category">
                    <button>اپارتمان</button>
                    <button>فروش</button>
                </div>
                <div className="property-attributes">
                    <div className="attribute-item">
                        <div className="attribute-icon">
                            <Image src={BedSvg} />
                        </div>
                        <span className="attribute-value">۱۰</span>
                    </div>
                    <div className="attribute-item">
                        <div className="attribute-icon">
                            <Image src={BedSvg} />
                        </div>
                        <span className="attribute-value">۱۰</span>
                    </div>
                    <div className="attribute-item">
                        <div className="attribute-icon">
                            <Image src={BedSvg} />
                        </div>
                        <span className="attribute-value">۱۰</span>
                    </div>
                    <div className="attribute-item">
                        <div className="attribute-icon">
                            <Image src={BedSvg} />
                        </div>
                        <span className="attribute-value">۱۰</span>
                    </div>
                </div>
            </div>
            <div className="property-body">
                <div className="property-info">
                    <div className="property-title">
                        <span>اپارتمان فاز ۳</span>
                        <span className='property-address'>ایران، استان تهران، میدان آزادی</span>
                    </div>
                    <div className="property-price">
                        <span>۱،۰۰۰،۰۰۰</span>
                        <span className='property-price-scale'>تومان</span>
                    </div>
                </div>
                <div className="property-footer">
                    <div className="property-admin">
                        <div className="property-admin-avatar">
                            <Image src={UserAvatar} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <span>علیرضا مردانی</span>
                    </div>
                    <div className="property-actions">
                        <button>
                            <ShareIcon sx={{ fontSize: '18px', color: '#B4B7C9' }} />
                        </button>
                        <button>
                            <FavoriteBorderIcon sx={{ fontSize: '18px', color: '#B4B7C9' }} />
                        </button>
                        <button>
                            <CompareArrowsIcon sx={{ fontSize: '18px', color: '#B4B7C9' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProperyCard;