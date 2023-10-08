import { Button } from "@nextui-org/react";
import Page from "../../../components/Layout/Page";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <Page animated>
        <div className="mt-unit-4xl sm:mt-[25vh]">
          <motion.h2
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-center text-3xl font-thin  sm:text-left sm:text-5xl"
          >
            Welcome to
          </motion.h2>
          <h1 className="text-center text-5xl font-semibold sm:text-left  sm:text-7xl md:text-8xl">
            Shopper&#39;s Choice
          </h1>

          <motion.h3
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md  line mt-16 text-center font-light leading-8 sm:mt-5  sm:text-left sm:text-lg"
          >
            Start <br className="sm:hidden" />
            <Button
              color="success"
              variant="flat"
              className="mx-2 px-5 text-lg"
              as={Link}
              to={"products"}
            >
              exploring our products
            </Button>{" "}
            <br className="sm:hidden" />
            and discover true shopping comfort.
          </motion.h3>
        </div>
      </Page>
    </>
  );
};

export default Home;
