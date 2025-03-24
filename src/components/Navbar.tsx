import { Menu, X } from "lucide-react";
import { useState } from "react";
// import Link from "next/link";

export const Navbar = () => {
	// sets the state of the burger menu
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// toggles the state of burger menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	return (
		<nav className='bg-blue-600 text-white p-4 flex justify-between'>
			{/* logo */}
			<h1 className='text-xl font-bold'>Logo</h1>

			{/* Desktop Menu */}
			<ul className='hidden md:flex space-x-4'>
				<li>
					<a
						href='#'
						className='hover:underline hover:text-gray-300'
					>
						Home
					</a>
				</li>
				<li>
					<a
						href='/about'
						className='hover:underline hover:text-gray-300'
					>
						About
					</a>
				</li>
				<li>
					<a
						href='contact'
						className='hover:underline hover:text-gray-300'
					>
						Contact
					</a>
				</li>
			</ul>
			{/* Mobile Menu Button */}
			<div className='md:hidden'>
				<button
					onClick={toggleMenu}
					className='text-white hover:text-gray-300 focus:outline-none'
				>
					{isMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<ul className='md:hidden absolute left-0 right-0 bg-white shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3'>
					<li>
						<a
							onClick={closeMenu}
							href='#'
							className='text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md'
						>
							Home
						</a>
					</li>
					<li>
						<a
							onClick={closeMenu}
							href='/about'
							className='text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md'
						>
							About
						</a>
					</li>
					<li>
						<a
							onClick={closeMenu}
							href='/contact'
							className='text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md'
						>
							Contact
						</a>
					</li>
				</ul>
			)}
		</nav>
	);
};
