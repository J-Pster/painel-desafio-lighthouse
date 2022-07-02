import { TrendingDownIcon, TrendingUpIcon } from '@heroicons/react/outline'

const DataCard = (
  {name, type, value, increasing, increasingValue, icon, iconColor}: {name: string, type: string, value: number, increasing: boolean, increasingValue: number, icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element, iconColor: string}
  ) => {
    const Icon = icon;
    const realBRLocale = Intl.NumberFormat('pt-BR');
    const postfix = {
      'percent': '%',
    };
    const prefix = {
      'real': 'R$',
    }

    return (
      <div className="basis-0 flex flex-grow flex-shrink-0 flex-col flex-nowrap rounded-xl bg-white mob:p-10 p-5 m-2">
        <div className="flex flex-row flex-nowrap items-center">
          <Icon className="w-5 h-5" color={iconColor} />
          <span className="ml-2 font-bold text-[14px] text-oceanblue">{name}</span>
        </div>
        <p className="mt-4 self-center font-bold mob:text-[40px] text-[25px] text-oceanblue">
          {<span className="mob:text-[20px] text-[12px] text-gray-500 font-medium">{prefix[type as keyof typeof prefix] || ''}</span>}
          {type === 'real' ? realBRLocale.format(value) : value}
          {postfix[type as keyof typeof postfix]}
        </p>
        <p className="mt-4 self-center flex flex-row flex-nowrap">
          {increasing ? <TrendingUpIcon className="w-5 h-5 text-notifigreen" /> : <TrendingDownIcon className="w-5 h-5 text-bloodred" />}
          <span className="ml-2 font-bold text-[14px] text-oceanblue">{increasingValue}%</span>
        </p>
      </div>
    )
}

export default DataCard;