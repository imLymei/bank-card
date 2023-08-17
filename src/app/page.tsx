import DimensionalCard from '@/components/DimensionalCard';

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
		</main>
	);
}
