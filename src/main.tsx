import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/contexts/ThemeContext.tsx'
import { AuthenticationProvider } from './components/contexts/AuthenticationContext.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
<AuthenticationProvider>
    <App />
    <Toaster position='top-center'  />
</AuthenticationProvider>
    </ThemeProvider>
)
