import { ShoppingCartIcon, CurrencyDollarIcon, SwitchHorizontalIcon, UserIcon } from '@heroicons/react/outline'

export const data = [
  {
    name: 'Vendas',
    type: 'onlynumbers',
    value: 245,
    increasing: true,
    increasingValue: 12.67,
    icon: ShoppingCartIcon,
    iconColor: '#1094FF',
  },
  {
    name: 'Faturamento',
    type: 'real',
    value: 12167943,
    increasing: true,
    increasingValue: 4.67,
    icon: CurrencyDollarIcon,
    iconColor: '#00D954',
  },
  {
    name: 'Vendas',
    type: 'percent',
    value: 12,
    increasing: false,
    increasingValue: 21.67,
    icon: SwitchHorizontalIcon,
    iconColor: '#FFD610',
  },
  {
    name: 'Leads',
    type: 'onlynumbers',
    value: 432,
    increasing: true,
    increasingValue: 11.34,
    icon: UserIcon,
    iconColor: '#9000D9',
  },
];
