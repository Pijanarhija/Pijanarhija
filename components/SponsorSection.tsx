import Image from "next/image";
import sponsorLogo from "../public/assets/pivolabs-logo.png";
import Animations from "./Animations";
import ImageAnimations from "./ImageAnimations";

const SponsorSection = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-36">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 max-lg:items-center gap-10 lg:gap-16 max-w-[800px] mx-auto">
          <div className="lg:col-span-4 order-2 lg:order-1 flex items-center justify-center">
            <ImageAnimations delay={0.3}>
              <Image
                src={sponsorLogo}
                alt="sponsor Logo"
                className="h-full w-full max-sm:max-w-[160px] max-lg:max-w-[260px]"
              />
            </ImageAnimations>
          </div>
          <div className="lg:col-span-8 flex flex-col max-lg:items-center order-1 lg:order-2">
            <Animations delay={0.3}>
              <h3 className="text-dark uppercase pb-3 max-lg:text-center">
                Официјален бренд парнер & Спонзор
              </h3>
            </Animations>
            <Animations delay={0.3}>
              <p className="text-dark max-lg:text-center">
                Голема благодарност до Пиволабс, кои го подржаа овој проект и
                помогнаа во неговата реализација!
              </p>
            </Animations>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
