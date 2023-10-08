import { MdHelp } from "react-icons/md";
import NavButton from "./NavButton";

const ContactButton = () => {
  return (
    <NavButton name={"Help / Contact"} icon={<MdHelp />} toLink={"contact"} />
  );
};

export default ContactButton;
