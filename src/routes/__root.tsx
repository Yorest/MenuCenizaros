import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { FooterComponent } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CustomThemeProvider } from "@/components/CustomThemeProvider";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />

      <div className="max-w-screen-xl">
        <CustomThemeProvider>
          <Header />
          <Outlet />
          <FooterComponent />
          <TanStackRouterDevtools />
        </CustomThemeProvider>
      </div>
      <Scripts />
    </>
  ),
  notFoundComponent: () => <div>404 Not Found</div>,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Lugar para pasarla bien",
      },
      {
        title: "Menu | Los Cenizaros",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    scripts: [{}],
  }),
});
