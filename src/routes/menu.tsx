import { createFileRoute } from "@tanstack/react-router";
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
    <Suspense fallback={<div>Loading...</div>}>
      <MenuSection />
    </Suspense>
  );
}
