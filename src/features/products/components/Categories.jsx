import { Button } from "@nextui-org/react";
import { MdClose } from "react-icons/md";

const Categories = ({ categoryFilter, setSearchParams, categories }) => {
  return (
    <div className="my-5 flex flex-wrap gap-3">
      {categories.map((c, index) => (
        <Button
          onClick={() => setSearchParams({ category: c })}
          className="sm:w-fit "
          variant="flat"
          color="warning"
          key={c || index}
        >
          {c}
        </Button>
      ))}
      {categoryFilter && (
        <Button
          onClick={() => setSearchParams({})}
          className="ml-auto w-full sm:w-fit"
          variant="bordered"
          color="danger"
        >
          <MdClose className="text-xl" /> Clear Filter
        </Button>
      )}
    </div>
  );
};

export default Categories;
