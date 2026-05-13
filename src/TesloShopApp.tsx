import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export default function TesloShopApp() {
  return <RouterProvider router={appRouter} />;
}
