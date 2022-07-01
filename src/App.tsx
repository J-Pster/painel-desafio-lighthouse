import { useState, useEffect } from 'react';
import Header from './components/header';
import LeftMenu from './components/leftmenu';
import './App.css';
import { FilterIcon } from '@heroicons/react/outline';

function App() {
  const [isLateralOpen, setIsLateralOpen] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);
    window.addEventListener("resize", resizeW);

    if (deviceSize > 768) setIsLateralOpen(true);

    return () => {
      window.removeEventListener("resize", resizeW);
    }
  }, []);

  return (
    <div className="flex flex-row flex-nowrap">
      {isLateralOpen && (
        <div className='flex grow-0 shrink-0 basis-20 min-h-screen'>
          <LeftMenu />
        </div>
      )}
      <div className="flex grow">
        <div className="flex grow flex-col flex-nowrap">
          <Header callback={setIsLateralOpen} open={isLateralOpen}/>
          <div className="flex flex-row justify-between items-center p-5">
          <p className="flex flex-row items-center px-3 py-2 rounded-md text-[20px] font-medium lg:text-3xl text-oceanblue">
            Indicadores
          </p>
          <div className="flex flex-row items-center px-3 py-2 pt-3 rounded-md">
            <p className="text-gray-600 text-[12px] lg:text-base">
              <span className="text-gray-600 font-bold text-[12px] lg:text-base">Período: </span>
              Últimos 12 meses
            </p>
            <button className="rounded-full px-4 py-2 ml-4 bg-white hover:bg-oceanblue flex flex-row items-center font-bold text-[12px] text-oceanblue hover:text-white">
              <FilterIcon className="w-3 h-3 mr-2 text-notifigreen" aria-hidden="true" />
              Filtrar
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
