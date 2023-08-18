import DimensionalCard from '@/components/DimensionalCard';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='h-screen flex flex-col gap-6 justify-center items-center'>
			<h1 className='text-4xl font-bold'>HIGH BANK</h1>
			<div className='scale-50'>
				<DimensionalCard />
			</div>
			<div className='flex flex-col font-semibold text-center'>
				<p className='text-2xl'>Seamless Payments, Limitless Possibilities</p>
				<p className='text-3xl'>
					<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
						Your
					</span>{' '}
					Future,{' '}
					<span className='bg-gradient-to-br from-purple-500 to-orange-500 bg-clip-text text-transparent'>
						Your
					</span>{' '}
					Way!
				</p>
			</div>
			<div className='flex gap-4'>
				<button className='p-4 bg-gradient-to-br from-purple-500 via-blue-500 to-orange-500 rounded-xl bg-[length:150px_100px] hover:bg-left-bottom transition-all duration-300 font-semibold text-white'>
					Get Started
				</button>
				<button className='p-4 border border-black hover:bg-neutral-100 rounded-xl transition-all duration-300 font-semibold'>
					Documentation
				</button>
			</div>
			<div className='flex gap-8 absolute bottom-2 right-2'>
				<Link
					href={'https://github.com/imLymei'}
					className='underline underline-offset-4 decoration-solid decoration-neutral-300 hover:decoration-neutral-400 text-neutral-300 hover:text-neutral-400 transition-all duration-300'>
					@imLymei
				</Link>
				<Link
					href={'https://github.com/Sakyie'}
					className='underline underline-offset-4 decoration-solid decoration-neutral-300 hover:decoration-neutral-400 text-neutral-300 hover:text-neutral-400 transition-all duration-300'>
					@Sakyie
				</Link>
			</div>
		</main>
	);
}
