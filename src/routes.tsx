import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import ProductCreated from 'views/admin/ProductCreated';
import ProductList from 'views/admin/ProductList';

const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	{
		name: 'NFT Marketplace',
		layout: '/admin',
		path: '/nft-marketplace',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: NFTMarketplace,
		secondary: true
	},
	{
		name: 'Data Tables',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/data-tables',
		component: DataTables
	},
	{
		name: 'Criar Produtos',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/produtos',
		component: ProductCreated
	},
	{
		name: 'Lista de Produtos',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/lista-produtos',
		component: ProductList
	},
	{
		name: 'Profile',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	{
		name: 'Login',
		layout: '/auth',
		path: '/login',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	{
		name: 'Register',
		layout: '/auth',
		path: '/register',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	{
		name: 'RTL Admin',
		layout: '/rtl',
		path: '/rtl-default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: RTL
	}
];

export default routes;
