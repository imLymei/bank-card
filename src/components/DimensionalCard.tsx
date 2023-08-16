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

	/* rotate3d(0,1,0,${xPercentage * maxDegree - maxDegree / 2}deg) rotate3d(-1,0,0,${
					yPercentage * maxDegree - maxDegree / 2
				}deg)  */

	return (
		<div
			className='w-[50vw] h-[50vh] flex flex-col justify-between p-16 border border-neutral-800 bg-gradient-to-br from-purple-500 via-blue-500 to-orange-500 shadow-lg shadow-white/20 rounded-xl transition-transform duration-75'
			style={{
				transform: `rotate3d(0,0,1,${
					xPercentage * (yPercentage >= 0.5 ? 1 : -1) * maxDegreeYarn - halfDegreeYarn
				}deg)`,
			}}>
			<p className='text-right text-4xl font-bold'>HIGH BANK</p>
			<p className='absolute left-4 top-4'>
				{xPercentage.toFixed(2)} : {yPercentage.toFixed(2)} => {xPercentage * (yPercentage >= 0.5 ? 1 : -1) * maxDegreeYarn - halfDegreeYarn}
			</p>
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
	);
}
