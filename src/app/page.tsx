import { Navbar } from "@/components/Navbar";

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			{/* Navbar */}
			<Navbar />
			{/* <nav className='bg-blue-600 text-white p-4 flex justify-between'>
				<h1 className='text-xl font-bold'>My Website</h1>
				<ul className='hidden md:flex space-x-4'>
					<li>
						<a
							href='#'
							className='hover:underline'
						>
							Home
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:underline'
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:underline'
						>
							Contact
						</a>
					</li>
				</ul>
			</nav> */}

			{/* Hero Section */}
			<header className='flex-1 bg-gray-100 flex flex-col items-center justify-center p-10 text-center'>
				<h2 className='text-4xl font-bold mb-4'>Welcome to My Website</h2>
				<p className='text-lg text-gray-600'>
					A simple responsive layout using Tailwind CSS.
				</p>
			</header>

			{/* Footer */}
			<footer className='bg-blue-600 text-white p-4 text-center'>
				<p>&copy; 2024 My Website</p>
			</footer>
		</div>
	);
}
