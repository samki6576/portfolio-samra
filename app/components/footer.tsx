export default function Footer() {
  return (
    <footer className="border-t bg-neutral-700 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/samra-safdar-16833b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
