import { HashRouter, Route } from "react-router";
import { BrowserRouter, Routes } from "react-router";
import { App } from "../App";
import { Orders } from "../pages/Orders";
import { IcecreamBuilderPage } from "../pages/IcecreamBuilderPage";
import { Checkout } from "../pages/Checkout";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    
    </Routes>
  );
};
