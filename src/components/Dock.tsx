import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Home,
    Blocks,
    BookOpen,
    User,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";
import { siteConfig } from "../site.config";

export function Dock() {
    const mouseX = useMotionValue(Infinity);
    const [visible, setVisible] = useState(false);

    // Hidden at the top; slides in after a little scroll; hides again at the footer.
    useEffect(() => {
        let footerInView = false;
        const update = () =>
            setVisible(window.scrollY > 80 && !footerInView);
        update();
        window.addEventListener("scroll", update, { passive: true });

        const footer = document.querySelector("footer");
        let io: IntersectionObserver | undefined;
        if (footer && "IntersectionObserver" in window) {
            io = new IntersectionObserver(
                (entries) => {
                    footerInView = entries[0].isIntersecting;
                    update();
                },
                { threshold: 0 },
            );
            io.observe(footer);
        }
        return () => {
            window.removeEventListener("scroll", update);
            io?.disconnect();
        };
    }, []);

    return (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
            <motion.div
                initial={false}
                animate={{ y: visible ? 0 : 28, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ pointerEvents: visible ? "auto" : "none" }}
            >
                <motion.div
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="mx-auto flex h-16 items-end gap-3 rounded-2xl border border-border bg-background/60 px-3.5 pb-3 shadow-2xl backdrop-blur-2xl"
                >
                    <DockIcon mouseX={mouseX} href="/" label="Home">
                        <Home className="h-full w-full" />
                    </DockIcon>
                    <DockIcon mouseX={mouseX} href="/projects" label="Projects">
                        <Blocks className="h-full w-full" />
                    </DockIcon>
                    <DockIcon mouseX={mouseX} href="/research" label="Research">
                        <BookOpen className="h-full w-full" />
                    </DockIcon>
                    <DockIcon mouseX={mouseX} href="/about" label="About">
                        <User className="h-full w-full" />
                    </DockIcon>

                    <div className="mx-1 h-9 w-px self-center bg-border" />

                    <DockIcon
                        mouseX={mouseX}
                        href={siteConfig.github}
                        target="_blank"
                        label="GitHub"
                    >
                        <Github className="h-full w-full" />
                    </DockIcon>
                    <DockIcon
                        mouseX={mouseX}
                        href={siteConfig.linkedin}
                        target="_blank"
                        label="LinkedIn"
                    >
                        <Linkedin className="h-full w-full" />
                    </DockIcon>
                    <DockIcon
                        mouseX={mouseX}
                        href={`mailto:${siteConfig.email}`}
                        copy={siteConfig.email}
                        label="Email"
                    >
                        <Mail className="h-full w-full" />
                    </DockIcon>
                </motion.div>
            </motion.div>
        </div>
    );
}

function DockIcon({ mouseX, children, href, target, label, copy }: any) {
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 78, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            ref={ref}
            style={{ width }}
            aria-label={label}
            data-copy={copy || undefined}
            className="group relative flex aspect-square w-10 cursor-pointer items-center justify-center rounded-[13px] border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:border-foreground/15 hover:text-brand-2"
        >
            {children}
            <span
                data-copy-label
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
                {label}
            </span>
        </motion.a>
    );
}
