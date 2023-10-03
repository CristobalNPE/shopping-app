import { Button } from "@nextui-org/react";
import Page from "../components/Page";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Page>
        <div className="mt-unit-4xl sm:mt-unit-5xl">
          <h2 className="mb-4 text-3xl font-thin sm:text-5xl  sm:text-left text-center">Bienvenido a</h2>
          <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl  sm:text-left text-center">
            Shopper&#39;s Choice
          </h1>

          <h3 className="text-md  line mt-16 font-light leading-8 sm:mt-5 sm:text-lg  sm:text-left text-center">
            Empieza a{" "}
            <Button
              color="success"
              variant="flat"
              className="mx-2 px-5 text-lg"
              as={Link}
              to={"products"}
            >
              explorar nuestros productos
            </Button>{" "}
            y descubre la verdadera comodidad.
          </h3>
        </div>
      </Page>
    </>
  );
};

export default Home;
