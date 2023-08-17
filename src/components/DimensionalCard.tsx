'use client';

import { useMouse } from '@lymei/hooks';

export default function DimensionalCard() {
	const mousePosition = useMouse();

	const xPercentage = mousePosition.x / window.innerWidth;
	const yPercentage = mousePosition.y / window.innerHeight;

	const maxDegree = 45;
	const halfDegree = 22.5;
	const maxDegreeYarn = 10;
	const halfDegreeYarn = 5;

	const middleScreen = window.innerHeight / 2;

	const heightSide = yPercentage * 2 - 1;

	/* rotate3d(0,1,0,${xPercentage * maxDegree - halfDegree}deg) rotate3d(-1,0,0,${
					yPercentage * maxDegree - halfDegree
				}deg) rotate3d(0,0,1,${xPercentage * maxDegreeYarn - halfDegreeYarn}deg) */

	return (
		<div className='relative flex justify-center w-[800px]'>
			<div
				className='w-full aspect-[3.37/2.125] flex flex-col justify-between p-16 bg-gradient-to-br from-purple-500 via-blue-500 to-orange-500 rounded-xl shadow-sm shadow-black transition-transform duration-75 text-white'
				style={{
					perspective: '1000px',
					transform: `rotate3d(0,1,0,${xPercentage * maxDegree - halfDegree}deg) rotate3d(-1,0,0,${
						yPercentage * maxDegree - halfDegree
					}deg) rotate3d(0,0,1,${xPercentage * maxDegreeYarn - halfDegreeYarn}deg)`,
				}}>
				<p className='text-right text-4xl font-bold'>HIGH BANK</p>
				<div className='w-16 h-16 grid grid-cols-2 p-1 gap-1 bg-yellow-300 rounded-xl'>
					<div className='border border-yellow-500 rounded-md' />
					<div className='border border-yellow-500 rounded-md' />
					<div className='border border-yellow-500 rounded-md' />
					<div className='border border-yellow-500 rounded-md' />
				</div>
				<div className='flex justify-between text-4xl font-mono tracking-widest'>
					<p>1234</p>
					<p>5678</p>
					<p>9000</p>
					<p>0000</p>
				</div>
				<div className='w-fit flex flex-col font-mono'>
					<div className='flex justify-between text-sm'>
						<p>mes</p>
						<p>ano</p>
					</div>
					<p className='text-xl'>12/26</p>
				</div>
				<p className='text-xl font-mono tracking-widest'>Lola Price</p>
			</div>
			<div
				className='absolute -bottom-1/4 w-[110%] bg-gradient-radial from-black/30 to-70% transition duration-75 -z-50'
				style={{
					height: `${2 + Math.abs(yPercentage - 0.5) * 8}%`,
					transform: `rotate3d(0,1,0,${xPercentage * maxDegree - halfDegree}deg) rotate3d(0,0,-1,${
						(xPercentage * maxDegreeYarn - halfDegreeYarn) * 0.2
					}deg)`,
				}}
			/>
		</div>
	);
}
