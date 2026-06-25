import { useRef, useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    Home,
    Blocks,
    BookOpen,
    User,
    Github,
    Linkedin,
    Mail,
    LayoutGrid,
    X,
} from "lucide-react";
import { siteConfig } from "../site.config";

export function Dock() {
    const mouseX = useMotionValue(Infinity);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [canHover, setCanHover] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);

    // Hidden at the top; appears after a little scroll; hides again at the footer.
    useEffect(() => {
        let footerInView = false;
        const update = () => setVisible(window.scrollY > 80 && !footerInView);
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

    // Hover-capable pointers (desktop) open on hover; touch devices tap.
    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        const sync = () => setCanHover(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // Collapse whenever the dock is hidden.
    useEffect(() => {
        if (!visible) setOpen(false);
    }, [visible]);

    // Close on outside pointer / Escape (mainly for touch).
    useEffect(() => {
        if (!open) return;
        const onDown = (e: PointerEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node))
                setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("pointerdown", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    // Hover intent (desktop): a small delay so the gap between the button and
    // the dock doesn't snap it shut.
    const cancelClose = () => window.clearTimeout(closeTimer.current);
    const openNow = () => {
        if (!canHover) return;
        cancelClose();
        setOpen(true);
    };
    const scheduleClose = () => {
        if (!canHover) return;
        cancelClose();
        closeTimer.current = window.setTimeout(() => setOpen(false), 140);
    };

    const nav = [
        { href: "/", label: "Home", Icon: Home },
        { href: "/projects", label: "Projects", Icon: Blocks },
        { href: "/research", label: "Research", Icon: BookOpen },
        { href: "/about", label: "About", Icon: User },
    ];
    const social = [
        { href: siteConfig.github, label: "GitHub", Icon: Github },
        { href: siteConfig.linkedin, label: "LinkedIn", Icon: Linkedin },
    ];

    return (
        <div
            ref={rootRef}
            className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center"
            onMouseEnter={openNow}
            onMouseLeave={scheduleClose}
        >
            <motion.div
                initial={false}
                animate={{ y: visible ? 0 : 28, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ pointerEvents: visible ? "auto" : "none" }}
                className="relative flex flex-col items-center"
            >
                {/* Magnify dock — unfurls upward from the launcher */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            key="dock"
                            initial={{ opacity: 0, y: 12, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.9 }}
                            transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
                            onMouseMove={(e) => mouseX.set(e.pageX)}
                            onMouseLeave={() => mouseX.set(Infinity)}
                            style={{ x: "-50%", transformOrigin: "bottom center" }}
                            className="absolute bottom-full left-1/2 mb-3 flex h-16 items-end gap-2 rounded-2xl border border-border bg-background/60 px-3 pb-3 shadow-2xl backdrop-blur-2xl sm:gap-3 sm:px-3.5"
                        >
                            {nav.map((item, i) => (
                                <DockIcon
                                    key={item.href}
                                    mouseX={mouseX}
                                    href={item.href}
                                    label={item.label}
                                    index={i}
                                >
                                    <item.Icon className="h-full w-full" />
                                </DockIcon>
                            ))}

                            <div className="mx-0.5 h-9 w-px self-center bg-border" />

                            {social.map((item, i) => (
                                <DockIcon
                                    key={item.href}
                                    mouseX={mouseX}
                                    href={item.href}
                                    target="_blank"
                                    label={item.label}
                                    index={nav.length + 1 + i}
                                >
                                    <item.Icon className="h-full w-full" />
                                </DockIcon>
                            ))}

                            <DockIcon
                                mouseX={mouseX}
                                href={`mailto:${siteConfig.email}`}
                                copy={siteConfig.email}
                                label="Email"
                                index={nav.length + 1 + social.length}
                            >
                                <Mail className="h-full w-full" />
                            </DockIcon>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Launcher button */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    aria-expanded={open}
                    className={`group grid h-14 w-14 place-items-center rounded-full border bg-background/70 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/10 ${
                        open
                            ? "border-foreground/15 text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/15 hover:text-brand-2"
                    }`}
                >
                    <span className="relative grid h-5 w-5 place-items-center">
                        <motion.span
                            animate={{
                                rotate: open ? 90 : 0,
                                opacity: open ? 0 : 1,
                                scale: open ? 0.6 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <LayoutGrid className="h-5 w-5" />
                        </motion.span>
                        <motion.span
                            animate={{
                                rotate: open ? 0 : -90,
                                opacity: open ? 1 : 0,
                                scale: open ? 1 : 0.6,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <X className="h-5 w-5" />
                        </motion.span>
                    </span>
                </button>
            </motion.div>
        </div>
    );
}

function DockIcon({ mouseX, children, href, target, label, copy, index }: any) {
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03 * (index ?? 0), duration: 0.22 }}
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
