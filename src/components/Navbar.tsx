import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-accent-primary/10 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all">
              <CodeBracketIcon className="size-6 text-accent-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">RADIATUL AISYAH ABDULLAH</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="px-5 py-2 rounded-full bg-accent-primary text-bg-primary text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-accent-primary/20">
            Hire Me
          </a>
        </div>
      </nav>
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-secondary p-6 sm:max-w-sm border-l border-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <CodeBracketIcon className="size-6 text-accent-primary" />
              <span className="text-xl font-bold text-white">PASRAISYR</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-accent-primary"
              >
                Hire Me
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
