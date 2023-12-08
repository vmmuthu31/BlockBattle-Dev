import React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setConnectionDetails } from "../../store/connectionReducer";

function Navbar() {
  const WW_URL = "https://web.argent.xyz";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const [connection, setConnection] = useState();

  const navigation = [
    { name: "How it works", href: "/" },
    { name: "Marketplace", href: "/" },
  ]

  return (
    <div className="bg-[#1F1D29] text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex space-x-4 lg:flex-1">
            <Link href="/" className="flex space-x-4">
              <img className="h-16 w-auto" src="" alt="" />
              <p className=" text-xl mt-5 md:mt-2 md:text-2xl font-bold font-serif ">
              BLOCKBATTLE
              </p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold  leading-6 text-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex md:flex-row flex-col items-center justify-center md:space-y-0 md:space-x-4 space-y-4">
              {!connection ? (
                <>
                  <button
                
                    className="herobtn px-6 py-3 text-lg font-semibold text-black "
                  >
                    Play Now!
                  </button>

                  <button
                    
                    className="herobtn px-6 py-3 text-lg font-semibold text-black"
                  >
                    Connect wallet
                  </button>
                </>
              ) : (
                <>
                  <div className="flex">
                    <button
                      
                      className="herobtn px-6 py-3 text-lg font-semibold text-black"
                    >
                      Disconnect wallet
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex space-x-4">
                <img
                  className="h-12 w-auto"
                  src=""
                  alt=""
                />
                <p className=" text-lg md:text-2xl text-gray-200 font-bold font-serif mt-2">
                  BLOCKBATTLE
                </p>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    {!connection ? (
                      <button
                       
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Connect wallet
                      </button>
                    ) : (
                      <>
                        
                        <button
                        
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Disconnect wallet
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;