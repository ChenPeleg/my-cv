import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router";

export function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}background.avif)`,
      }}
      className={
        "  bg-cover bg-center bg-no-repeat transition-all duration-300  h-screen w-screen  overflow-hidden"
      }
    >
      <div className=" h-screen overflow-y-scroll  backdrop-blur-sm  ">
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}
