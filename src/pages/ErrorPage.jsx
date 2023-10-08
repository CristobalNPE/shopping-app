import { Button } from "@nextui-org/react";
import Page from "../components/Page";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-semibold">
          There was an unexpected error
        </h1>
        <Button size="lg" color="warning" as={Link} to={"/"}>
          Go back
        </Button>
      </div>
    </Page>
  );
};

export default ErrorPage;
