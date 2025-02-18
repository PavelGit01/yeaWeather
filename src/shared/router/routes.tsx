import { Layout } from "@/app/layout/Layout";
import { Weather } from "@/pages";
import { lazy, Suspense } from "react";

const HistorySearch = lazy(() => import("@/pages/HistorySearch/HistorySearch"));

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
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <HistorySearch />
        </Suspense>
      ),
    },
  ],
};
