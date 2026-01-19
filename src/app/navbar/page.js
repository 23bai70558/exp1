// create a navbar including two pages about and contact

"use client";
export default function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-8 bg-zinc-100 p-4 dark:bg-zinc-900">           
            <a
                href="/about"
                className="text-lg font-medium text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
            >
                About
            </a>
            <a
                href="/contact"
                className="text-lg font-medium text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
            >
                Contact
            </a>
        </nav>
    );
}