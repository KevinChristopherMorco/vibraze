import {
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";

const FooterIcons = ({ icon }) => {
  return (
    <div className="rounded-full bg-white p-[.3rem] text-black">{icon}</div>
  );
};

const FooterLists = ({ listTitle, listItems }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl tracking-[.3rem]">{listTitle}</h4>
      <ul className="flex flex-col gap-y-1">
        {listItems?.map((item, index) => {
          return (
            <li key={index} className="text-lg font-light">
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
    <footer className="my-[20rem] bg-[#E4E3E3]">
      <div className="relative mx-[20px] h-[10rem]">
        <div className="absolute grid w-full -translate-y-[50%] gap-[36px] rounded-2xl bg-[--primary-color] p-[20px]">
          <div>
            <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
              Never Miss A
            </h4>
            <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
              Deal Stay
            </h4>
            <h4 className="font-roboto-flex text-[2.3rem] font-black uppercase leading-[1.3] text-white">
              Updated
            </h4>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg px-[10px] py-[14px]"
            />
            <input
              type="submit"
              value={"Sign Me Up!"}
              className="w-full rounded-lg bg-white px-[10px] py-[14px] font-bold"
            />
          </form>
        </div>
      </div>
      <div className="grid gap-[24px] px-[20px] py-10">
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
        <div className="flex flex-wrap items-center justify-between gap-y-[24px]">
          {/* <div className="flex flex-col gap-4">
            <h4 className="text-xl tracking-[.3rem]">Company</h4>
            <ul className="flex flex-col gap-y-1">
              <li className="text-lg font-light">About Us</li>
              <li className="text-lg font-light">Careers</li>
            </ul>
          </div> */}
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
