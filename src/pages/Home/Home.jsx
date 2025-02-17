import React from "react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import OutlineButton from "../../components/buttons/OutlineButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import CategoryCard from "../../components/cards/CategoryCard";
import FeaturedCard from "../../components/cards/FeaturedCard";
import ReviewCard from "../../components/cards/ReviewCard";
import SubgridContainer from "../../components/containers/SubgridContainer";
import SwiperContainer from "../../components/containers/SwiperContainer";
import SectionHeading from "../../components/headings/SectionHeading";
import useScreenResponsive from "../../hooks/useScreenResponsive";

const HomeStat = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[3rem] font-black leading-none text-[--primary-color] md:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem]">
        {number}
      </h4>
      <p className="md:text-center md:text-[.8rem] xl:text-base 2xl:text-[1rem]">
        {text}
      </p>
    </div>
  );
};

const Home = () => {
  const { sm, md, isLargeScreen } = useScreenResponsive();
  return (
    <>
      <SubgridContainer
        type={"section"}
        dynamicClass={"content-start h-fit relative"}
      >
        <div className="col-span-full flex flex-col gap-y-[28px] md:col-span-4 lg:place-self-center xl:col-span-6">
          <div>
            <h1 className="font-poppins text-5xl font-black uppercase text-black md:text-6xl 2xl:text-7xl">
              Wear
            </h1>
            <h1 className="font-poppins text-5xl font-black uppercase text-black md:text-6xl 2xl:text-7xl">
              Confidence.
            </h1>
            <h1 className="font-poppins text-5xl font-black uppercase text-[--primary-color] md:text-6xl 2xl:text-7xl">
              Feel
            </h1>
            <h1 className="font-poppins text-5xl font-black uppercase text-[--primary-color] md:text-6xl 2xl:text-7xl">
              Amazing.
            </h1>
          </div>
          <p className="2xl:text-lg">
            Discover the latest trends and timeless pieces that empower you to
            express yourself. From everyday essentials to standout styles, our
            collection is designed to make you feel confident, comfortable, and
            ready to take on the world.
          </p>
          <PrimaryButton
            text={"shop now"}
            dynamicClass={"uppercase lg:w-[50%]"}
          />
          <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[36px] md:flex-nowrap md:justify-between md:gap-x-[14px] md:pb-10 lg:justify-between lg:gap-x-0 2xl:justify-start 2xl:gap-[64px]">
            <HomeStat number={"220"} text={"Branches Worldwide"} />
            <HomeStat number={"25"} text={"International Partners"} />
            <HomeStat number={"1M+"} text={"Satisfied Customers"} />
          </div>
        </div>

        <img
          src="/assets/images/home/hero-img.png"
          alt=""
          className="col-span-4 md:absolute md:-top-14 md:col-span-4 md:col-start-5 md:h-full xl:col-span-6 xl:col-start-7"
        />

        <section class="z-[99] col-span-4 -mx-[20px] flex flex-col gap-10 bg-black py-6 text-white md:col-span-12 md:row-start-2 md:-mx-[32px] md:gap-4 md:rounded-md xl:-mx-[160px] 2xl:-mx-[320px]">
          <div className="px-2">
            <h2 class="mb-2 text-center text-3xl font-bold leading-8">
              Our Partners
            </h2>
            <p class="text-center font-extralight leading-8">
              Partnered with some of the most recognized and respected brands
              worldwide.
            </p>
          </div>
          <div class="logos group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] md:py-4">
            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <img
                src="/assets/images/home/HM-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Levis-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Obey-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Puma-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Adidas-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Uniqlo-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
            </div>

            <div class="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <img
                src="/assets/images/home/HM-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Levis-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Obey-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Puma-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Adidas-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
              <img
                src="/assets/images/home/Uniqlo-Logo.png"
                alt="logo"
                className="mx-8 inline w-[90px] lg:w-[100px] xl:mx-14 2xl:mx-28 2xl:w-[110px]"
              />
            </div>
          </div>
        </section>
      </SubgridContainer>

      <SubgridContainer type={"section"} dynamicClass={"gap-y-[36px]"}>
        <SectionHeading
          text={"Stylist's Choice"}
          dynamicClass={"text-center col-span-full"}
        />
        <SwiperContainer>
          <SwiperSlide>
            <FeaturedCard
              productName={"Cotton Shirt"}
              productPrice={"$120"}
              productImage={"/assets/images/products/cotton-shirt.png"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              productName={"Polo Shirt"}
              productPrice={"$220"}
              productImage={"/assets/images/products/polo-shirt.png"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              productName={"Polo Shirt"}
              productPrice={"$220"}
              productImage={"/assets/images/products/polo-shirt.png"}
            />
          </SwiperSlide>
        </SwiperContainer>
        <OutlineButton
          text={"View All"}
          dynamicClass={
            "md:w-[50%] md:justify-self-center xl:w-[40%] col-span-full"
          }
        />
      </SubgridContainer>
      <SubgridContainer type={"section"} dynamicClass={"gap-y-[36px] "}>
        <SectionHeading
          text={"New Arrivals"}
          dynamicClass={"text-center col-span-full"}
        />
        <SwiperContainer>
          <SwiperSlide>
            <FeaturedCard
              productName={"CHIC Designed Shirt"}
              productPrice={"$330"}
              productImage={"/assets/images/products/chic-shirt.png"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              productName={"Baggy Jeans"}
              productPrice={"$120"}
              productImage={"/assets/images/products/baggy-jeans.png"}
              hasDiscount={true}
              productDiscountPrice={"$180"}
              productDiscountPercent={"33%"}
            />
          </SwiperSlide>
        </SwiperContainer>
        <OutlineButton
          text={"View All"}
          dynamicClass={
            "md:w-[50%] md:justify-self-center xl:w-[40%] col-span-full"
          }
        />
      </SubgridContainer>
      <SubgridContainer type={"section"} dynamicClass={"gap-y-[36px]"}>
        <SectionHeading
          text={"Hot Items"}
          dynamicClass={"text-center col-span-full"}
        />
        <SwiperContainer>
          <SwiperSlide>
            <FeaturedCard
              productName={"Cotton Crew Neck"}
              productPrice={"$170"}
              productImage={"/assets/images/products/crew-neck.png"}
              dynamicClass={"col-span-2"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard
              productName={"Vote Designed Shirt"}
              productPrice={"$150"}
              productImage={"/assets/images/products/vote-shirt.png"}
              dynamicClass={"col-span-2"}
              hasDiscount={true}
              productDiscountPrice={"$220"}
              productDiscountPercent={"32%"}
            />
          </SwiperSlide>
        </SwiperContainer>
        <OutlineButton
          text={"View All"}
          dynamicClass={
            "md:w-[50%] md:justify-self-center xl:w-[40%] col-span-full"
          }
        />
      </SubgridContainer>

      <div className="col-span-full grid gap-y-[36px]">
        <SectionHeading text={"Find your Fit"} dynamicClass={"text-center"} />
        <section className="grid grid-cols-4 gap-y-[36px] md:grid-cols-8 md:gap-[16px] lg:h-[450px] xl:h-[400px] xl:grid-cols-12 xl:grid-rows-4 xl:gap-1 2xl:h-[550px]">
          <CategoryCard
            cardText={"Casual"}
            cardImage={"/assets/images/home/casual.png"}
            dynamicClass={
              "hover:bg-[right_10px_top_-5px] lg:col-span-3 lg:col-start-1 lg:row-span-4 lg:row-start-1 xl:row-start-1 xl:col-span-4 xl:col-start-1 xl:row-span-4"
            }
          />
          <CategoryCard
            cardText={"Formal"}
            cardImage={"/assets/images/home/formal.png"}
            dynamicClass={
              "bg-[right_-80px_top_-25px] hover:bg-[right_-70px_top_-30px] lg:col-span-3 lg:col-start-4 lg:row-span-2 lg:row-start-1 xl:row-start-1 xl:col-span-4 xl:col-start-5 xl:row-span-2"
            }
          />
          <CategoryCard
            cardText={"Athletics"}
            cardImage={"/assets/images/home/athletics.png"}
            dynamicClass={
              "bg-[right_-70px_top] hover:bg-[right_-60px_top_-5px] lg:hover:bg-[right_-80px_top_-5px] lg:bg-[right_-90px_top] lg:col-span-3 lg:col-start-4 lg:row-span-2 lg:row-start-3 xl:row-start-3 xl:col-span-4 xl:col-start-5 xl:row-span-2"
            }
          />
          <CategoryCard
            cardText={"Swimwear"}
            cardImage={"/assets/images/home/swimwear.png"}
            dynamicClass={
              "bg-[right_-70px_top] hover:bg-[right_-60px_top_-5px] lg:hover:bg-[right_-90px_top_-5px] lg:bg-[right_-100px_top] lg:col-span-3 lg:col-start-7 lg:row-span-4 lg:row-start-1 xl:row-start-1 xl:col-span-4 xl:col-start-9 xl:row-span-4"
            }
          />
        </section>
      </div>

      <SubgridContainer type={"section"} dynamicClass={"gap-y-[36px]"}>
        <SectionHeading
          text={"How we're doing?"}
          dynamicClass={"text-center col-span-full"}
        />
        <SubgridContainer
          type={"div"}
          dynamicClass={"gap-[16px] lg:gap-[32px] col-span-full"}
        >
          <ReviewCard
            cardName={"Kayle R."}
            cardReview={
              "I had such a smooth experience shopping here! The website is easy to navigate, and I found exactly what I was looking for without any hassle. My order arrived quickly and was beautifully packaged. I also loved the personal touch in the packaging with a handwritten thank-you note. Will definitely be shopping here !"
            }
            cardDate={"August 15, 2024"}
          />
          <ReviewCard
            cardName={"Sean T."}
            cardReview={
              "Fantastic service! I had a question about sizing, and their customer support team was super helpful and quick to respond. They helped me choose the right size, and the shipping was faster than expected. It’s rare to find such excellent customer service these days—definitely a loyal customer now!"
            }
            cardDate={"May 19, 2024"}
          />
          <ReviewCard
            cardName={"Mary B."}
            cardReview={
              "Great experience overall! The website is very user-friendly, and I appreciate the wide range of payment options. I was a bit worried about shipping delays due to the holidays, but my order arrived on time, and everything was exactly as described. My only suggestion would be to add more details on fabric care for some of the items, but otherwise, I’m very happy!"
            }
            cardDate={"February 6, 2024"}
          />
        </SubgridContainer>
        <OutlineButton
          text={"More Reviews"}
          dynamicClass={
            "md:w-[50%] md:justify-self-center xl:w-[40%] col-span-full"
          }
        />
      </SubgridContainer>
    </>
  );
};

export default Home;
