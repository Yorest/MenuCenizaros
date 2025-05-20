import { createTheme, ThemeProvider, ThemeConfig } from "flowbite-react";

export const customTheme = createTheme({
      navbar: {
        root: {
          base: "bg-white px-2 py-2.5 sm:px-4",
        },
        link: {
          base: "block py-2 pl-3 pr-4 md:p-0",
          active: {
            on: "bg-green-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
            off: "border-b border-green-100 text-gray-700 hover:bg-green-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700",
          },
          disabled: {
            on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
            off: "",
          },
        },
        toggle: {
          base: "inline-flex items-center rounded-lg p-2 text-sm text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 md:hidden",
          icon: "h-6 w-6 shrink-0",
          title: "sr-only",
        },
      },
    });

