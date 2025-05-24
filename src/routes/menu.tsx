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
