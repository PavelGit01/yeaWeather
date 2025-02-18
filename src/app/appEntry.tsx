import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./appStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/appRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
