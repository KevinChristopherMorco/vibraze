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
      <h4 className="font-medium tracking-[.1rem] md:text-xl md:tracking-[.2rem]">
        {listTitle}
      </h4>
      <ul className="flex flex-col gap-y-1">
        {listItems?.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer text-lg font-light">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { sm, md, lg, xl, xxl } = useScreenResponsive();
  return (
    <footer className="my-[20rem] bg-[#E4E3E3]">
      <div className="relative mx-[20px] h-[10rem] md:mx-[32px] lg:mx-[160px]">
        <div className="absolute grid w-full -translate-y-[50%] gap-[36px] rounded-2xl bg-[--primary-color] p-[20px] md:grid-cols-2 xl:px-[20px] xl:py-[54px]">
          {(sm || md || lg) && (
            <div>
              <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
                Never Miss A
              </h4>
              <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
                Deal Stay
              </h4>
              <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
                Updated!
              </h4>
            </div>
          )}

          {(xl || xxl) && (
            <div className="flex flex-col justify-center">
              <h4 className="font-roboto-flex text-[2.5rem] font-black uppercase leading-[1.3] text-white">
                Never Miss A Deal
              </h4>

              <h4 className="font-roboto-flex text-[2.5rem] font-black uppercase leading-[1.3] text-white">
                Stay Updated!
              </h4>
            </div>
          )}

          <form
            action=""
            className="flex w-full flex-col gap-4 md:place-self-center"
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
      </div>
      <div className="grid gap-[24px] px-[20px] py-10 md:gap-[32px] md:px-[32px] lg:grid-cols-[2fr_3fr] xl:grid-cols-[1.5fr_4fr]">
        <div className="grid gap-y-[32px]">
          <div className="flex flex-col gap-1">
            <h1 className="font-poppins text-4xl font-black uppercase">
              VIBRAZE
            </h1>
            <p className="text-lg font-light">Wear confidence feel amazing.</p>
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
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[24px] xl:grid-cols-[auto_auto_auto_auto]">
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
