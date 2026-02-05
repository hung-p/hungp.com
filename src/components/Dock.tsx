
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, Beaker, BookOpen, User, Github, Linkedin, Mail } from "lucide-react";

export function Dock() {
    let mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-background/70 px-4 pb-3 backdrop-blur-2xl border border-white/10 shadow-2xl dark:border-white/10 dark:bg-black/50"
            >

                <DockIcon mouseX={mouseX} href="/" label="Home">
                    <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>
                <DockIcon mouseX={mouseX} href="/studio" label="Studio">
                    <Beaker className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>
                <DockIcon mouseX={mouseX} href="/research" label="Research">
                    <BookOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>
                <DockIcon mouseX={mouseX} href="/about" label="About">
                    <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>

                <div className="h-10 w-px bg-neutral-200 dark:bg-neutral-800 mx-1 self-center" />

                <DockIcon mouseX={mouseX} href="https://github.com/hung-p" target="_blank" label="GitHub">
                    <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>
                <DockIcon mouseX={mouseX} href="https://linkedin.com/in/hungp" target="_blank" label="LinkedIn">
                    <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>
                <DockIcon mouseX={mouseX} href="mailto:hello@hungp.com" label="Email">
                    <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                </DockIcon>

            </motion.div>
        </div>
    );
}

function DockIcon({ mouseX, children, href, target, label }: any) {
    let ref = useRef<HTMLAnchorElement>(null);

    let distance = useTransform(mouseX, (val: number) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            target={target}
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 cursor-pointer rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 dark:bg-neutral-900/80 border dark:border-neutral-800 transition-colors group relative"
        >
            {children}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-100 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
            </span>
        </motion.a>
    );
}
