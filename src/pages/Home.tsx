import { useTheme } from "@/components/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { initialValidation } from "@/lib/api/auth/General";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        initialValidation("/auth", false)
    }, [])
    const { setTheme} = useTheme()
    return (
        <div>

        <Button  onClick={() => {setTheme("dark")}}>
            toggle
        </Button>
        <Button  onClick={() => {setTheme("light")}}>
            toggle
        </Button>
        </div>
    )
}