import PageSection from "../components/PageSection";
import Page from "../components/Page";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <Page>
      <PageSection>
        <div className="mt-unit-4xl sm:mt-unit-5xl">
          <h2 className="text-3xl sm:text-5xl font-thin mb-4">Bienvenido a</h2>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold">
            Shopper&#39;s Choice
          </h1>

          <h3 className="text-md  sm:mt-5 sm:text-lg font-light mt-16 leading-8 line">
            Empieza a{" "}
            <Button
              color="success"
              variant="flat"
              className="text-lg px-5 mx-2"
            >
              explorar nuestros productos
            </Button>{" "}
            y descubre la verdadera comodidad.
          </h3>
        </div>
      </PageSection>

      <PageSection>
        <hr />
        <h1>Shopping App</h1>
        <p>
          Al hacer click en el carrito mostrar popover con items, y dar boton
          para ir al detalle{" "}
        </p>
        <p>lo mismo para favoritos.</p>
        <p>
          We need a home page, with carousel and few cards about the shopping
          service
        </p>
        <p>the search result page when someone search something in top page</p>
        <p>a contact page</p>
        <p>the carrito page</p>
        <p>favorites page</p>

        <Button color="primary">Hello</Button>
      </PageSection>
    </Page>
  );
};

export default Home;
