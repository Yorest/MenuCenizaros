import React, { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {SpinnerComponent} from "@/components/SpinnerComponent";

const HeroSection = React.lazy(() =>
  import("@/components/HeroSection").then((module) => ({
    default: module.HeroSection,
  })),
);

const MenuSection = React.lazy(() =>
  import("@/components/MenuSection").then((module) => ({
    default: module.MenuSection,
  })),
);

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Suspense fallback={<SpinnerComponent/>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SpinnerComponent/>}>
        <MenuSection />
      </Suspense>
    </>
  );
}