import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  const [nightMode, setNightMode] = useState(false);

  const switchNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <main
      className={`${
        nightMode && "dark"
      } min-h-screen w-full  overflow-auto bg-background  text-foreground`}
    >
      <ScrollRestoration />

      <ShoppingCartProvider>
        <NavigationBar
          nightMode={nightMode}
          switchNightMode={switchNightMode}
        />
        <Outlet />
        <Footer />
      </ShoppingCartProvider>
    </main>
  );
};

export default App;
