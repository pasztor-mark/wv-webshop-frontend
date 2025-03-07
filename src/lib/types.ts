import { ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

export interface User {
    id: number
    email: string
    username: string
    role: string
}
export interface UserResponse {
    id: number
    email: string
    name: string
    role: string
}
export type Paged<T> = {
    content: T[]
    totalPages: number
    totalElements: number
    pageNumber: number
}

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
export interface Item {
    id: number
    name: string
    price: number
    description: string
    image: string
    author: UserResponse
}
export interface CreateItemRequest {
    name: string
    price: number
    description: string
    image: string
}