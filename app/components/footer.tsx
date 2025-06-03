export default function Footer() {
  return (
    <footer className="border-t bg-neutral-700 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
          <div className="flex gap-6">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
