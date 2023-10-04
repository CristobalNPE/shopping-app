import { MdHelp } from "react-icons/md";
import NavButton from "./NavButton";

const ContactButton = () => {
  return (
    <NavButton name={"Ayuda / Contacto"} icon={<MdHelp />} toLink={"contact"} />
  );
};

export default ContactButton;
