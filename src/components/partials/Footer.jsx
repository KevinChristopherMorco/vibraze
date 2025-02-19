import {
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";
import useScreenResponsive from "../../hooks/useScreenResponsive";

const FooterIcons = ({ icon }) => {
  return (
    <div className="rounded-full bg-white p-[.3rem] text-black">{icon}</div>
  );
};

const FooterLists = ({ listTitle, listItems }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium tracking-[.1rem] md:text-base md:tracking-[.2rem]">
        {listTitle}
      </h4>
      <ul className="flex flex-col gap-y-3">
        {listItems?.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer text-sm font-light">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="mx-[20px] my-[5rem] rounded-b-2xl bg-[#E4E3E3] md:mx-[32px] lg:mx-[160px] 2xl:mx-[320px]">
      <div className="flex flex-col gap-10 rounded-t-2xl bg-[--primary-color] px-[20px] py-[36px] md:flex-row xl:py-[72px]">
        <h1 className="font-roboto-flex text-3xl font-black uppercase text-white md:text-4xl xl:basis-[50%] 2xl:text-5xl">
          Never Miss a Deal Stay Updated!
        </h1>
        <form
          action=""
          className="flex w-full flex-col gap-4 md:place-self-center xl:basis-[50%]"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg px-[10px] py-[14px]"
          />
          <input
            type="submit"
            value={"Sign Me Up!"}
            className="w-full cursor-pointer rounded-lg bg-white px-[10px] py-[14px] font-bold transition-colors hover:bg-black hover:text-white"
          />
        </form>
      </div>
      <div className="grid gap-[54px] px-[20px] py-[36px] md:gap-[32px] lg:grid-cols-[2fr_3fr] xl:grid-cols-[1.5fr_4fr] xl:gap-0 xl:py-[72px]">
        <div className="grid gap-y-[32px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h1 className="font-poppins text-4xl font-black uppercase">
                VIBRAZE
              </h1>
              <p className="text-lg font-light">
                Wear confidence feel amazing.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-black p-[.3rem]">
                <RiFacebookFill className="h-5 w-5 text-white" />
              </div>
              <FooterIcons icon={<RiTwitterXLine className="h-5 w-5" />} />
              <FooterIcons icon={<RiInstagramLine className="h-5 w-5" />} />
              <FooterIcons icon={<RiPinterestLine className="h-5 w-5" />} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[24px] xl:grid-cols-[auto_auto_auto_auto] xl:gap-x-[28px]">
          <FooterLists
            listTitle={"Company"}
            listItems={[
              "About Us",
              "Careers",
              "Our Partners",
              "Vibraze Worldwide",
            ]}
          />
          <FooterLists
            listTitle={"Customer Service"}
            listItems={[
              "Contact Us",
              "FAQ's",
              "Track your Order",
              "Return & Exchange",
            ]}
          />
          <FooterLists
            listTitle={"Legalities"}
            listItems={[
              "Terms & Conditions",
              "Privacy Policy",
              "Licenses & Permits",
            ]}
          />
          <FooterLists
            listTitle={"Store Locations"}
            listItems={[
              "Local/Domestic",
              "International",
              "Stores Near Me",
              "Upcoming",
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
