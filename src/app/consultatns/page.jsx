import Header from '@/components/header/Header';
import styles from './style.module.scss';
import Banner from '@/components/Banner/Banner';
import Consultants from '@/components/Consultants/Consultants';
import Footer from '@/components/Footer/Footer';

const Page = () => {
    return (
        <div className="mai">
            <Header />
            <Banner title='مشاوران ما' />
            <Consultants />
            <Footer />
        </div>
    );
}

export default Page;