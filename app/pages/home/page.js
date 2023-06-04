import Herobox from '@/components/herobox/herobox';
import DesktopHeroImage from '@/assets/images/home_heroImage.png';
import MobileHeroImage from '@/assets/images/mobile_home_heroImage.png';

const Home = () => {
  return (
    <Herobox
      title="Discover our brands"
      description="Cosmetics by Hotel Magazin"
      desktopHeroImage={DesktopHeroImage}
      mobileHeroImage={MobileHeroImage}
    />
  );
};

export default Home;
