"use client"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex-1 flex flex-col items-center justify-center shrink-0 py-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">404 Error</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            The page you were looking for could not be found.
          </p>
        </div>
      </header>
      <div className="flex items-center justify-center py-6">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go back
        </Link>
      </div>
    </div>
  )
}

