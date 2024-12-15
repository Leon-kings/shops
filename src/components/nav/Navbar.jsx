import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
// background image
React;
// logo image
import logo from "../../assets/images/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg"
const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'FEATURES', href: '/Features' },
  { name: 'MARKET', href: '/Market' },
  { name: 'SERVICES', href: '/Services' },
  { name: 'ABOUT', href: '/Contacts' },
  { name: 'FAQ', href: '/Fquestion' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 
  
  
  
  return (
    <div className="bg-whit">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            
            
              <img
                alt="logo"
                src={logo}
                className="h-20 w-auto"
              />
           
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          
            {navigation.map((item) => (

             <Link key={item.name} to={item.href} >
             <button>
                {item.name}
              </button>
              </Link>
      
            ))}
            
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end p-10">
           <Link className="text-sm/6 font-semibold text-gray-900" to={'/login'}>
           <button>
              Log in <span aria-hidden="true">&rarr;</span>
              </button>
           </Link>
          </div>
        </nav>
        {/*  */}
        {/*  */}
        {/*  */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-400 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center w-full justify-between">
           
                <img
                  alt="logo"
                  src={logo}
                  className="h-8 w-auto"
                />
           
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className=" rounded-md  text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
              
                </div>
                <div className="py-6">
                <Link className="text-sm/6 font-semibold text-gray-900" to={'/login'}>
              Log in <span aria-hidden="true">&rarr;</span>
           </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
{/*  */}
{/*  */}
{/* main content */}
{/*  */}
{/*  */}

    </div>
  )
}
