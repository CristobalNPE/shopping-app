import { Button } from "@nextui-org/react";
import { useState } from "react";

import Page from "./components/Page";
import NavigationBar from "./components/NavigationBar";
function App() {
  const [nightMode, setNightMode] = useState(false);

  const switchNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <main
      className={`${
        nightMode && "dark"
      } bg-background text-foreground  w-full min-h-screen`}
    >
      <NavigationBar switchNightMode={switchNightMode} />
      <Page>
        <h1>Shopping App</h1>
        <p>
          Al hacer click en el carrito mostrar popover con items, y dar boton
          para ir al detalle{" "}
        </p>
        <p>lo mismo para favoritos.</p>
        <p>
          We need a home page, with carousel and few cards about the shopping
          service
        </p>
        <p>the search result page when someone search something in top page</p>
        <p>a contact page</p>
        <p>the carrito page</p>
        <p>favorites page</p>

        <Button color="primary">Hello</Button>
      </Page>
    </main>
  );
}

export default App;
