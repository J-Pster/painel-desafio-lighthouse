import { FilterIcon } from '@heroicons/react/outline';

const Filter = () => {
  return (
  <div className="flex mob:flex-row justify-between flex-col items-center p-5">
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
  )
}

export default Filter;