import { data } from "../constants";
import Button from "./Button";
import img1 from "../assets/i1.jpg";
import img2 from "../assets/i4.jpg";

const Hero = () => {
  const content = data[0];
  return (
    <div
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative">
          <div className="relative z-1 max-w-[62rem] text-center mb-[4rem] md:mb-20 lg:mb[6rem] ">
            <img src={img1} alt="image1" className="mb-6" />

            <Button
              className="btn btn-primary rounded-full px-10 py-4 text-lg font-medium mt-8"
              onClick={() => {
                window.location.href = "/#learn";
              }}
            >
              Become a Learner
            </Button>
          </div>

          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb[6rem]">
            <div className="h2 mb-6  ">{content.head1}</div>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-8 lg:mb-8 bg-zinc-200 px-1">
              {content.l1}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative ">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb[6rem]">
            <div className="h3 mb-6">
              <h4 className="font-black">{content.head2}</h4>
              <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-8">
                {content.l2}
              </p>
            </div>
          </div>

          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb[6rem]">
            <img src={img2} alt="image2" className="mb-6" />
          </div>
        </div>
      </div>


      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mx-[20rem] sm:mx-3  lg:mb[6rem] bg-zinc-200 px-1">
        <h4 className="font-black mb-3 lg:mb-15 underline">{content.head3}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-8">
          {content.l3}
        </p>
      </div>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] lg:mx-[20rem] sm:mx-3  md:mb-20 lg:mb[6rem] bg-zinc-200 px-1">
        <h4 className="font-black mb-3 underline">{content.head4}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-8">
          {content.l4}
        </p>
      </div>

      <div className="sm:mb-6">
        <h1 className="h2 mb-10 text-center underline">{content.head5}</h1>
        <p className="body-1 max-w-2xl mx-auto text-n-8 lg:mb-10 text-center">
          {content.l5}
        </p>
      </div>

      <div>
      <h4 className="font-black mb-5 text-center underline">{content.head6}</h4>
      <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
        {content.l6}
      </p>
      </div>
     

      <div>
        <h4 className="font-black mb-5 text-center underline">{content.head7}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
          {content.l7}
        </p>
      </div>

      <div>
        <h4 className="font-black mb-5 text-center underline">{content.head8}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
          {content.l8}
        </p>
      </div>

      <div>
        <h4 className="font-black mb-5 text-center underline">{content.head9}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
          {content.l9}
        </p>
      </div>

      <div>
        <h3 className="font-black mb-5 text-center underline">{content.head10}</h3>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
          {content.l10}
        </p>
      </div>

      <div>
        <h4 className="font-black mb-5 text-center underline">{content.head11}</h4>
        <p className="body-1 max-w-2xl mx-auto mb-6 text-n-8 lg:mb-10 text-center">
          {content.l11}
        </p>
      </div>
    </div>
  );
};

export default Hero;

