import { ThemeProvider, ThemeConfig } from "flowbite-react";
import { customTheme } from "@/utils/customeTheme";

export function CustomThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeConfig dark={false} />
            <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        </>
    );
}
