"use client";
import Navbar from './navbar/page';
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to Our Next.js Application
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is the home page of our Next.js application. Use the navigation bar above to visit the About and Contact pages.
        </p>
      </main>
    </div>
  );
}