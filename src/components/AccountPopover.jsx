import { Button } from "@nextui-org/react";

const AccountPopover = ({ setIsOpen }) => {
  return (
    <aside className="flex flex-col p-4 ">
      <Button
        className="mb-5"
        color="secondary"
        onClick={() => setIsOpen(false)}
      >
        Iniciar Sesión
      </Button>
      <div className="text-center text-xs">
        <h5>Aún no eres nuestro cliente?</h5>
        <h5>
          Registrate{" "}
          <span className="cursor-pointer font-semibold text-primary">acá</span>
        </h5>
      </div>
    </aside>
  );
};

export default AccountPopover;
