import { Layout } from "@/app/layout/Layout";
import { HistorySearch, Weather } from "@/pages";

export const routes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Weather />,
    },
    {
      path: "history",
      element: <HistorySearch />,
    },
  ],
};
