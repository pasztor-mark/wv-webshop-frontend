import { ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeContextType = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}
export type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}
export interface LoginRequest {
    email: string,
    password: string,
}
export interface RegisterRequest {
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string
}
export interface RegisterPostRequest {
    email: string
    password: string
    name: string
}