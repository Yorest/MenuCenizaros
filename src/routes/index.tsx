import React, { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

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
      <Suspense fallback={<div style={{height:'100vh',flex:'1',display:'flex',justifyContent:'center', alignItems:'center'}}>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MenuSection />
      </Suspense>
    </>
  );
}