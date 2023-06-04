import Herobox from '@/components/herobox/herobox';
import DesktopHeroImage from '@/assets/images/hospitality_heroImage.png';
import MobileHeroImage from '@/assets/images/mobile_hospitality_heroImage.png';

const Hospitality = () => {
  return (
    <Herobox
      title="Discover our brands"
      description="Cosmetics by Hotel Magazin"
      desktopHeroImage={DesktopHeroImage}
      mobileHeroImage={MobileHeroImage}
    />
  );
};

export default Hospitality;
