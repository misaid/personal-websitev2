"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

/**
 * The ThemeProvider component is a component that provides the theme context to its children.
 * It is composed of a NextThemesProvider component.
 * @param children {React.ReactNode} - The children of the ThemeProvider component.
 * @param props {ThemeProviderProps} - The props of the ThemeProvider component.
 * @returns ThemeProvider {JSX.Element} - A JSX element representing the ThemeProvider component.
 */

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
