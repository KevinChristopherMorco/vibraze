import { RiEyeOffLine } from "@remixicon/react";
import React from "react";
import BackButton from "../../components/buttons/BackButton";
import Input from "../../components/form/Input";
import useScreenResponsive from "../../hooks/useScreenResponsive";
import { Link } from "react-router-dom";

const SignWithCard = ({ icon, text }) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md border border-gray-400 p-3 transition-colors hover:bg-gray-100">
      <img src={icon} alt="" className="h-5 w-5" />
      <p className="font-medium">{text}</p>
    </div>
  );
};

const SignIn = () => {
  const { md, isLargeScreen } = useScreenResponsive();
  return (
    <div className="col-span-4 flex h-full flex-col md:col-span-8 md:grid md:grid-cols-subgrid md:grid-rows-[min-content_1fr] xl:col-span-12 xl:gap-y-[64px]">
      <BackButton />
      <div className="col-span-4 grid h-fit grid-cols-subgrid rounded-xl border border-gray-400 md:col-span-8 md:place-items-center md:place-self-center xl:col-start-2 xl:col-end-12">
        {(md || isLargeScreen) && (
          <img
            src="/assets/images/signup/portrait.jpg"
            alt=""
            className="rounded-l-xl md:col-span-5 md:col-start-1 md:h-full md:w-full md:object-fill xl:col-span-6"
          />
        )}
        <div className="col-span-4 flex w-full flex-col gap-y-[28px] px-[28px] py-6 md:col-span-4 md:col-start-6 xl:col-start-7 xl:pl-0 xl:pr-[28px]">
          <div className="flex flex-col items-center gap-1 text-center">
            <h4 className="text-center text-3xl font-bold">Welcome Back!</h4>
            <p className="w-full text-center text-sm font-light">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="cursor-pointer font-bold">
                Sign Up
              </Link>{" "}
            </p>
          </div>
          <form action="" className="flex w-full flex-col gap-3">
            <Input placeholder={"Email Address"} />
            <Input
              placeholder={"Enter Password"}
              hasIcon={true}
              icon={
                <RiEyeOffLine className="absolute right-2 h-5 w-5 cursor-pointer text-gray-500" />
              }
            />
          </form>
          <p className="place-self-center text-center text-gray-500">or</p>
          <div className="flex w-full flex-col gap-3">
            <SignWithCard
              icon={"/assets/images/icons/google.png"}
              text={"Continue with Google"}
            />
            <SignWithCard
              icon={"/assets/images/icons/facebook.png"}
              text={"Continue with Facebook"}
            />
            <SignWithCard
              icon={"/assets/images/icons/apple.png"}
              text={"Continue with Apple"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
