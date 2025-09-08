import Animations from "./Animations";

interface InfoProps {
  id: number;
  text: string;
  bold?: string;
}

const shippingData: InfoProps[] = [
  {
    id: 1,
    text: "ДА, ",
    bold: "БЕСПЛАТНА ДОСТАВА!",
  },
  {
    id: 2,
    text: "Испорака низ цела Македонија!",
  },
  {
    id: 3,
    text: "Плаќање при достава - ништо однапред!",
  },
];

const priceData: InfoProps[] = [
  {
    id: 1,
    text: "Играта + достава е ",
    bold: "само 690 ден.",
  },
  {
    id: 2,
    text: "Или 2 коктели во Скопје! (реално...)",
  },
  {
    id: 3,
    text: "Купи еднаш, играј засекогаш!",
  },
];

const InfoSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-36" id="цена-и-достава">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 max-w-[1200px] mx-auto">
          <div className="lg:pr-16 xl:pr-[92px] lg:border-r lg:border-dark">
            <Animations delay={0.3}>
              <h2 className="text-accent pb-4 sm:pb-6 uppercase">
                достава имате?
              </h2>
            </Animations>
            <ul className="list-disc flex flex-col gap-1 pl-5">
              {shippingData.map((data: InfoProps) => (
                <li key={data.id} className="text-dark">
                  <Animations delay={0.3}>
                    <p className="text-[#333333]">
                      {data.text}
                      {data.bold && (
                        <span className="font-semibold">{data.bold}</span>
                      )}
                    </p>
                  </Animations>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-16 xl:pl-[92px]">
            <Animations delay={0.3}>
              <h2 className="text-accent pb-4 sm:pb-6 uppercase">а ЦЕНАта?</h2>
            </Animations>
            <ul className="list-disc flex flex-col gap-1 pl-5">
              {priceData.map((data: InfoProps) => (
                <li key={data.id} className="text-dark">
                  <Animations delay={0.3}>
                    <p className="text-[#333333]">
                      {data.text}{" "}
                      {data.bold && (
                        <span className="font-semibold">{data.bold}</span>
                      )}
                    </p>
                  </Animations>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
