import { Button } from "@nextui-org/react";

const AccountPopover = () => {
  return (
    <aside className="p-4 flex flex-col ">
      <Button className="mb-5" color="secondary">
        Iniciar Sesión
      </Button>
      <div className="text-center text-xs">
        <h5>Aún no eres nuestro cliente?</h5>
        <h5>
          Registrate{" "}
          <span className="text-primary cursor-pointer font-semibold">acá</span>
        </h5>
      </div>
    </aside>
  );
};

export default AccountPopover;
