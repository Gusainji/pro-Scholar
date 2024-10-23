import { aboutUs } from "../constants";
import Footer from "./Footer";

const About = () => {
  const data = aboutUs[0];
  return (
    <div
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb[6rem]">
          <h1 className="h1 mb-[5rem] underline">{data.head1}</h1>
          <h4 className="font-black mb-6 underline">{data.head2}</h4>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-10">
            {data.l1}
          </p>

          <div className="bg-zinc-200 lg:mb-15">
            <h4 className="font-black mb-6 underline">{data.head3}</h4>

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-6">
              {data.l2}
            </p>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-6">
              {data.l3}
            </p>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-6">
              {data.l4}
            </p>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-6">
              {data.l5}
            </p>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8">{data.l6}</p>
          </div>

          <h4 className="font-black mb-6 underline">{data.head4}</h4>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-10">
            {data.l7}
            <br />
            {data.l8} <br /> {data.l9} <br /> {data.l10}
            <br />
            {data.l1}
            <br />
            {data.l2}
            <br />
            {data.l3}
            <br />
            {data.l4}
          </p>
          <h4 className="font-black mb-6 underline">{data.head5}</h4>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-8">
            {data.l15}
          </p>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-8">
            {data.l16}
          </p>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-8">
            {data.l17}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default About;
