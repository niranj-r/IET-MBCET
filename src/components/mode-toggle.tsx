import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => setTheme("light")} className={theme === 'light' ? 'bg-accent text-white border-accent' : 'bg-transparent border-primary/30'}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Light Mode</span>
            </Button>
            <Button variant="outline" size="icon" onClick={() => setTheme("dark")} className={theme === 'dark' ? 'bg-accent text-white border-accent' : 'bg-transparent border-primary/30'}>
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Dark Mode</span>
            </Button>
            <Button variant="outline" size="icon" onClick={() => setTheme("system")} className={theme === 'system' ? 'bg-accent text-white border-accent' : 'bg-transparent border-primary/30'}>
                <span className="text-xs font-bold">sys</span>
                <span className="sr-only">System</span>
            </Button>
        </div>
    )
}
