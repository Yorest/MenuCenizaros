import { createFileRoute } from "@tanstack/react-router";
import {SpinnerComponent} from "@/components/SpinnerComponent";
import React, { Suspense } from "react";
const MenuSection = React.lazy(() =>
  import("@/components/MenuSection").then((module) => ({
    default: module.MenuSection,
  })),
);

export const Route = createFileRoute("/menu")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Lugar para pasarla bien",
      },
      {
        title: "Menú | Los Cenizaros",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <Suspense
      fallback={
        <SpinnerComponent/>
      }
    >
      <MenuSection />
    </Suspense>
  );
}
