import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router";

export function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}background.avif)`,
      }}
      className={
        "  bg-cover bg-center bg-no-repeat transition-all duration-300  h-screen w-screen  overflow-hidden print:bg-none print:h-auto print:overflow-visible"
      }
    >
      <div className="h-screen overflow-y-scroll backdrop-blur-sm print:overflow-visible print:h-auto print:backdrop-blur-none">
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}
