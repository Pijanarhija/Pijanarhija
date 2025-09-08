import Image from "next/image";
import contactImage from "../public/assets/constact-image.png";
import Animations from "./Animations";
import ImageAnimations from "./ImageAnimations";

const ContactSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-accent py-16 md:py-24 lg:py-36"
      id="контакт"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <ul className="list-disc flex flex-col gap-1 pl-6 lg:hidden pb-8">
          <Animations delay={0.3}>
            <li className="text-light-100 text-base sm:text-lg">
              Само 690 ден.
            </li>
            <li className="text-light-100 text-base sm:text-lg">
              БЕСПЛАТНА ДОСТАВА Низ цела Македонија!
            </li>
            <li className="text-light-100 text-base sm:text-lg">
              Купи еднаш, играј засекогаш! Бескрајна забавa!
            </li>
          </Animations>
        </ul>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-light-100 lg:rounded-xl px-5 md:px-10 py-9 md:py-14">
          <div className="relative h-full w-full overflow-hidden rounded-lg max-lg:hidden">
            <ImageAnimations delay={0.3}>
              <Image
                src={contactImage}
                alt="contact image"
                className="h-full w-full object-cover"
              />
            </ImageAnimations>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
              <ul className="list-disc flex flex-col gap-1 pl-10 xl:pl-20">
                <Animations delay={0.3}>
                  <li className="text-light-100 text-base sm:text-lg">
                    Само 690 ден.
                  </li>
                  <li className="text-light-100 text-base sm:text-lg">
                    БЕСПЛАТНА ДОСТАВА Низ цела Македонија!
                  </li>
                  <li className="text-light-100 text-base sm:text-lg">
                    Купи еднаш, играј засекогаш! Бескрајна забавa!
                  </li>
                </Animations>
              </ul>
            </div>
          </div>
          <div className="">
            <Animations delay={0.3}>
              <h2 className="text-dark pb-6 uppercase">
                Доста беа досадни вечери!
              </h2>
            </Animations>
            <Animations delay={0.3}>
              <p className="text-[#333333]">
                Време за Пијанархија - Играта што ке посакаш да си ја имал
                порано!
              </p>
            </Animations>

            <form
              action=""
              className="grid grid-cols-1 sm:grid-cols-5 gap-5 pt-8"
            >
              <div className="flex flex-col gap-1 sm:col-span-5">
                <Animations delay={0.3}>
                  <label htmlFor="name" className="text-dark text-lg">
                    Име и Презиме
                  </label>
                </Animations>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="ex. Ангел Стојковски "
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-3">
                <Animations delay={0.3}>
                  <label htmlFor="email" className="text-dark text-lg">
                    Е-пошта
                  </label>
                </Animations>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ex. a.stojkovski@gmail.com"
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <Animations delay={0.3}>
                  <label htmlFor="phone" className="text-dark text-lg">
                    Тел. број
                  </label>
                </Animations>
                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="ex. +389 070 070 070"
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <Animations delay={0.3}>
                  <label htmlFor="city" className="text-dark text-lg">
                    Град на живеење
                  </label>
                </Animations>
                <input
                  required
                  type="text"
                  name="city"
                  id="city"
                  placeholder="ex. 1000 Скопје"
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-3">
                <Animations delay={0.3}>
                  <label htmlFor="address" className="text-dark text-lg">
                    Адреса за Достава
                  </label>
                </Animations>
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  placeholder="ex. Партизанска 93 / 4-5"
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-5">
                <Animations delay={0.3}>
                  <label htmlFor="amount" className="text-dark text-lg">
                    Количина
                  </label>
                </Animations>
                <input
                  required
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="ex. 1"
                  className="px-5 py-3 bg-light-300 rounded-[10px] focus outline-accent"
                />
              </div>
              <div className="sm:col-span-5">
                <button
                  type="submit"
                  className="flex items-center justify-center cursor-pointer w-full bg-accent border border-accent text-xl text-light-100 px-7 py-4 font-bold hover:bg-light-100 hover:text-accent transition-colors duration-300 ease-in-out"
                >
                  Оствари нарачка
                </button>
                <div className="sm:col-span-5 pt-6">
                  <p className="text-body">
                    Бесплатна достава до врата за 1-5 работни дена.
                  </p>
                  <p className="text-body">
                    Исплатата се врши на рака кога ке ви стигне нарачката.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
