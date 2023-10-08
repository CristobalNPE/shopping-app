import { Button } from "@nextui-org/react";
import Page from "../../../components/Page";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Page>
      <div className="mt-24 sm:mt-40 flex flex-col gap-10 font-semibold items-center">
        <h1 className="text-center text-4xl">
          Sorry, the page you were looking for was not found.
        </h1>

        <Button as={Link} to="/" size="lg" color="primary" variant="flat" className="w-full md:w-fit ">
          Return to Home
        </Button>
      </div>
    </Page>
  );
};

export default NotFound;
