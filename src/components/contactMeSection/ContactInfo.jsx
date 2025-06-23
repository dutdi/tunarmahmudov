import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="tunarsaleh@outlook.com" Image={HiOutlineMail} />
      <SingleInfo text="+994 50 406 07 14" Image={FiPhone} />
      <SingleInfo text="Baku, Azerbaijan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
