import { useState, useEffect } from 'react';
import Header from './components/header';
import Filter from './components/filter';
import DataCard from './components/datacard';
import LeftMenu from './components/leftmenu';
import * as indicators from './data/indicators';
import './App.css';

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
          <Filter />
          <div className="flex mob:flex-row flex-col flex-wrap mx-3">
            {indicators.data.map((data, index) => {
              return <DataCard key={index} {...data} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
