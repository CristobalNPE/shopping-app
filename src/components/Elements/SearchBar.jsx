import { Input, Button, ButtonGroup } from "@nextui-org/react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <form className="flex w-full " action="" >
      <ButtonGroup fullWidth className="min-w-[15rem] w-11/12">
        <Input
          color="default"
          size="xl"
          placeholder="Buscar productos"
          radius="none"
        />
        <Button size="md" color="primary" variant="solid" isIconOnly>
          <MdSearch className="text-2xl" />
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default SearchBar;
