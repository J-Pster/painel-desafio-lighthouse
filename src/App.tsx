import { useState, useEffect } from 'react';
import Header from './components/header';
import LeftMenu from './components/leftmenu';
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
          <div className="flex-initial p-5">
          <p className="lg-font-text">
            Indicadores
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
