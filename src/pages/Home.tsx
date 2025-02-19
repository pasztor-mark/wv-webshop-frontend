import { useTheme } from "@/components/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { toggleColorScheme } from "@/lib/functions";

export default function Home() {
    const {theme, setTheme} = useTheme()
    return (
        <div>

        <Button  onClick={() => {console.log("fasz"); setTheme("dark")}}>
            toggle
        </Button>
        <Button  onClick={() => {console.log("fasz"); setTheme("light")}}>
            toggle
        </Button>
        </div>
    )
}