import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterContact = () => {
  return (
    <div className=" w-fit h-full flex flex-col items-start justify-start pt-6 ">
      <span className=" w-full flex flex-row gap-1 items-center mb-7">
        <p className=" text-[12px] font-semibold text-white ">Contact</p>
      </span>

      <div className=" w-full flex items-center gap-3 mb-3">
        <TiSocialFacebook size={12} color="white" />
        <RiInstagramFill size={12} className=" text-rose-400" />
        <FaYoutube size={12} color="white" />
        <FaTwitter size={12} color="white" />
      </div>
      <span className=" text-[10px] text-neutral-100 flex gap-1 items-center mb-1">
        <FaPhoneVolume size={12} />
        <p>+27 234 5678</p>
      </span>
      <span className=" text-[10px] text-neutral-100 flex gap-1 items-center">
        <MdEmail size={12} />
        <p>thato@hillsawft.com</p>
      </span>
    </div>
  );
};

export default FooterContact;
