import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

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
        <FavoritesProvider>
          <NavigationBar
            nightMode={nightMode}
            switchNightMode={switchNightMode}
          />
          <Outlet />
          <Footer />
        </FavoritesProvider>
      </ShoppingCartProvider>
    </main>
  );
};

export default App;
