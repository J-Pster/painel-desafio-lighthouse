import { ChartBarIcon, AcademicCapIcon, LocationMarkerIcon, ShoppingCartIcon, UserIcon, TicketIcon, CogIcon } from '@heroicons/react/outline'

const LeftMenu = () => {
  return (
    <div className="flex flex-col items-center pt-5 h-full w-full shadow-md bg-white px-1">
      <div>
        <img src="psterlogo80.png" alt="Pster Logo" width="30"></img>
      </div>
      <div className="flex flex-col items-center mt-8">
      <button type="button" className="white mt-4 p-1 rounded-full text-notifigreen hover:text-notifigreen">
        <span className="sr-only">View notifications</span>
            <ChartBarIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <LocationMarkerIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <UserIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <TicketIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="white mt-4 p-1 rounded-full text-gray-400 hover:text-oceanblue">
        <span className="sr-only">View notifications</span>
            <CogIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      </div>
    </div>
  )
}

export default LeftMenu;