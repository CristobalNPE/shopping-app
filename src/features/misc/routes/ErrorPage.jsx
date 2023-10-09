import { Button } from "@nextui-org/react";
import Page from "../../../components/Layout/Page";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-5xl">
          Error <span className="font-bold">{error.status}</span>
        </h1>
        <h2 className="text-xl">{error.statusText}</h2>
        <h1 className="text-3xl font-semibold">{error.message}</h1>
        <Button
          size="lg"
          color="primary"
          variant="shadow"
          as={Link}
          to={"/"}
          className="w-full sm:w-fit"
        >
          Go back home
        </Button>
      </div>
    </Page>
  );
};

export default ErrorPage;
