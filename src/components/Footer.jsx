import React from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="bg-slate-950 w-full mt-20 font-thin-20 py-10 text-white px-56">
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <span className="text-3xl font-bold">Ziggy</span>
          </div>
          <p>© {new Date().getFullYear()} Ziggy pvt. ltd.</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">Company</span>
          <span className="cursor-pointer font-thin">About</span>
          <span className="cursor-pointer font-thin">Careers</span>
          <span className="cursor-pointer font-thin">Team</span>
          <span className="cursor-pointer font-thin">Zwiggy One</span>
          <span className="cursor-pointer font-thin">Zwiggy Instamart</span>
          <span className="cursor-pointer font-thin">Zwiggy Genie</span>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">Contact us</span>
            <span className="cursor-pointer font-thin">Help & Support</span>
            <span className="cursor-pointer font-thin">Partner with us</span>
            <span className="cursor-pointer font-thin">Ride with us</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">Legal</span>
            <span className="cursor-pointer font-thin">Terms & Conditions</span>
            <span className="cursor-pointer font-thin">Cookie Policy</span>
            <span className="cursor-pointer font-thin">Privacy Policy</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">We deliver to:</span>
          <span className="cursor-pointer font-thin">Bangalore</span>
          <span className="cursor-pointer font-thin">Gurgaon</span>
          <span className="cursor-pointer font-thin">Hyderabad</span>
          <span className="cursor-pointer font-thin">Delhi</span>
          <span className="cursor-pointer font-thin">Mumbai</span>
          <span className="cursor-pointer font-thin">Pune</span>
        </div>
      </div>
    </div>
  );
}
