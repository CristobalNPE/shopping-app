import { Outlet, ScrollRestoration } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer";
const App = () => {
  const [nightMode, setNightMode] = useState(false);

  const switchNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <main
      className={`${
        nightMode && "dark"
      } bg-background text-foreground  w-full min-h-screen  overflow-auto`}
    >
      <ScrollRestoration />
      <NavigationBar nightMode={nightMode} switchNightMode={switchNightMode} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
