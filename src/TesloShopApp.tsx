import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
document.documentElement.classList.add("dark"); // o lógica para toggle

export default function TesloShopApp() {
  return <RouterProvider router={appRouter} />;
}
