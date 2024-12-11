import React, { useRef, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
// background image
import Video from '../../assets/video/head.mp4'
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
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            
            
              <img
                alt="logo"
                src={logo}
                className="h-20 p-1 w-auto"
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
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
           
                <img
                  alt="logo"
                  src={logo}
                  className="h-8 w-auto"
                />
           
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 mx-1.5 rounded-md p-2.5 text-gray-700"
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
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-1xl sm:-top-80"
        >
          <div>
              <video className="w-full" controls autoPlay loop>
      <source src={Video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
 
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            GET YOUR DESIRED COMPUTER ON RESONABLE PRICE{' '} <span></span>
            <Link className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Buy Yours <span aria-hidden="true">&rarr;</span>
             </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Leon is happy to Serve you Your Favourate Computers ,
            Choose The Best PC and Also If You want to Buy Your repairment Kits.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            
                Get started
                </Link>
                <Link className="text-sm/6 font-semibold text-gray-900">
             
                Learn more <span aria-hidden="true">→</span>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
