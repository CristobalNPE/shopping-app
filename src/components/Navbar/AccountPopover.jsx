import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AccountPopover = ({ setIsOpen }) => {
  return (
    <aside className="flex flex-col p-4 ">
      <Button
        className="mb-5"
        color="secondary"
        onClick={() => setIsOpen(false)}
        as={Link}
        to={"login"}
      >
        Log In
      </Button>
      <div className="text-center text-xs">
        <h5>Not our client yet?</h5>
        <h5>
          Register{" "}
          <span className="cursor-pointer font-semibold text-primary">here</span>
        </h5>
      </div>
    </aside>
  );
};

export default AccountPopover;
