import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import Page from "../../../components/Layout/Page";
import PageTitle from "../../../components/Elements/PageTitle";
import {
  MdWhatsapp,
  MdOutlineMailOutline,
  MdOutlinePhone,
} from "react-icons/md";
const Contact = () => {
  // Falta: When button click, popup with "Hemos recibido tu solicitud, nos comunicaremos contigo al correo indicado. bla bla bla"

  return (
    <Page>
      <PageTitle>What can we help you with?</PageTitle>
      <main className="flex flex-col gap-10 md:flex-row">
        <form
          className="mt-10 flex flex-col gap-5 md:w-8/12 xl:w-1/2"
          action=""
        >
          <h2 className="text-md mt-3 font-light">
            Please complete this form. We will answer you shortly.
          </h2>
          <Input type="email" label="Email" />
          <Select label="Contact reason">
            <SelectItem>Manage and/or cancel purchase</SelectItem>
            <SelectItem>Returns and refunds</SelectItem>
            <SelectItem>About my purchase</SelectItem>
            <SelectItem>Account security</SelectItem>
            <SelectItem>Other</SelectItem>
          </Select>
          <Textarea minRows={8} label="Details" />
          <Button color="secondary" variant="ghost">
            Submit request
          </Button>
        </form>
        <section>
          <h2 className="text-md mt-12 font-light">
            You can also contact us at:
          </h2>

          <div className=" mt-5  flex flex-col gap-6">
            <h1 className="flex items-center gap-5 text-2xl font-normal">
              <MdOutlineMailOutline className="text-4xl " />
              contact@shc.com
            </h1>
            <h1 className="flex items-center gap-5 text-2xl font-normal">
              <MdWhatsapp className="text-4xl" />
              +569 9999 99 99
            </h1>
            <h1 className="flex items-center gap-5 text-2xl font-normal">
              <MdOutlinePhone className="text-4xl" />
              3333 33 33
            </h1>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default Contact;
