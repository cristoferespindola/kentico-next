import { ThemeProvider } from "./ThemeProvider";

export default function Theme({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider>
            {children}  
        </ThemeProvider>
    )
}