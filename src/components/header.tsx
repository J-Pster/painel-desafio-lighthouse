/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ChatIcon, FilterIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'

const Header = ({callback, open}: {callback: Function, open: boolean}) => {

  return (
        <div className="bg-white">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* Mobile menu button*/}
                <button type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md 
                text-gray-400 hover:text-white hover:bg-oceanblue focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-white"
                onClick={() => callback(!open)}
                >
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='mr-2'>
                <button
                  type="button"
                  className="white p-1 mr-2 rounded-full text-gray-400 hover:text-oceanblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-oceanblue focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <span className="relative inline-block">
                    <ChatIcon className="w-6 h-6 inline" aria-hidden="true" />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-notifigreen rounded-full">99</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="white p-1 rounded-full text-gray-400 hover:text-oceanblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-oceanblue focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <span className="relative inline-block">
                    <BellIcon className="h-6 w-6 inline" aria-hidden="true" />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-notifigreen rounded-full">8</span>
                  </span>
                </button>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-oceanblue flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-oceanblue focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://lh3.googleusercontent.com/ogw/ADea4I4__i0MTKJU7K71BD8QlKOw43aeu8HdrVZF8dD3lbs=s32-c-mo"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      )
}

Header.propTypes = {
  callback: PropTypes.func,
  open: PropTypes.bool,
}

export default Header;