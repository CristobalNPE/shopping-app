import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import {
  MdWhatsapp,
  MdOutlineMailOutline,
  MdOutlinePhone,
} from "react-icons/md";
const Contact = () => {
  // Falta: When button click, popup with "Hemos recibido tu solicitud, nos comunicaremos contigo al correo indicado. bla bla bla"

  return (
    <Page>
      <PageTitle>¿Con qué podemos ayudarte?</PageTitle>
      <main className="flex flex-col md:flex-row gap-10">
        <form
          className="md:w-8/12 xl:w-1/2 mt-10 flex flex-col gap-5"
          action=""
        >
          <h2 className="text-md font-light mt-3">
            Completa la solicitud de contacto. Responderemos a la brevedad.
          </h2>
          <Input type="email" label="Correo Electrónico" />
          <Select label="Motivo">
            <SelectItem>Administrar y/o cancelar compra</SelectItem>
            <SelectItem>Devoluciones y reembolsos</SelectItem>
            <SelectItem>Pregunta sobre compra</SelectItem>
            <SelectItem>Seguridad de mi cuenta</SelectItem>
            <SelectItem>Otros</SelectItem>
          </Select>
          <Textarea minRows={8} label="Detalles" />
          <Button color="secondary" variant="ghost">
            Enviar solicitud
          </Button>
        </form>
        <section>
          <h2 className="text-md font-light mt-12">
            Si prefieres, nos puedes contactar a:
          </h2>

          <div className=" mt-5  flex flex-col gap-6">
            <h1 className="flex gap-5 items-center text-2xl font-normal">
              <MdOutlineMailOutline className="text-4xl " />
              contacto@shc.com
            </h1>
            <h1 className="flex gap-5 items-center text-2xl font-normal">
              <MdWhatsapp className="text-4xl" />
              +569 9999 99 99
            </h1>
            <h1 className="flex gap-5 items-center text-2xl font-normal">
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
