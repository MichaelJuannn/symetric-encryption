import Link from 'next/link';

export default function Navbar() {
	return (
		<header className='flex flex-wrap sm:justify-start rounded-b sm:flex-nowrap z-50 w-full bg-slate-900 text-sm py-4'>
			<nav
				className='max-w-[85rem] w-full mx-auto px-4 sm:flex items-center justify-between'
				aria-label='Global'
			>
				<Link className='flex-none text-2xl font-bold' href='/about'>
					ZULUL SECRET
				</Link>
				<div className='flex flex-row items-center gap-8 mt-5 sm:justify-end sm:mt-0 sm:pl-5'>
					<Link
						className='font-medium text-xl text-gray-200 hover:text-white'
						href='/'
					>
						Encrypt
					</Link>
					<Link
						className='font-medium text-xl text-gray-200 hover:text-white'
						href='/decrypt'
					>
						Decrypt
					</Link>
				</div>
			</nav>
		</header>
	);
}
