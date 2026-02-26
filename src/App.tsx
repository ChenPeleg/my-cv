 
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router";

 

export function App() {
 
 

  return (
    <div
      className={
        "bg-[url('/background.avif')] bg-cover bg-center bg-no-repeat transition-all duration-300  h-screen w-screen text-black text-center"
      }
    >
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
