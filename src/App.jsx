import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import { useState } from "react";
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
      <Navbar switchNightMode={switchNightMode} />
      <Page>
        <h1>Shopping App</h1>
        <Button color="primary">Hello</Button>
      </Page>
    </main>
  );
}

export default App;
