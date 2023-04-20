import { createDecipheriv } from 'crypto';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import BaseHead from '@/components/basehead';

export default function Decrypt() {
	const iv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	const [input, setInput] = useState('');
	const [key, setKey] = useState<string>();
	const [result, setResult] = useState<string>();

	function decrypt(key: string) {
		try {
			setKey(key);
			//@ts-ignore
			const decipher = createDecipheriv('aes256', key, iv);
			const decrypted =
				decipher.update(input, 'hex', 'utf8') + decipher.final('utf8');
			setResult(decrypted);
		} catch (error) {
			return error;
		}
	}

	return (
		<>
			<BaseHead />
			<Navbar />
			<h1 className='text-5xl md:text-7xl text-center'>DECRYPT</h1>
			<div className='md:flex '>
				<div className='flex-none'>
					<div>
						<label className='mx-8 m-2 text-xl' htmlFor='cipher'>
							Insert Your Cipher Text 🕵️‍♀️
						</label>
						<input
							id='cipher'
							type='text'
							className='block w-60 p-4 mx-8 mt-2 mb-5 rounded ring ring-green-700 bg-gray-100'
							onChange={(e) => setInput(e.currentTarget.value)}
						/>
					</div>
					<div>
						<label className='mx-8 m-2 text-xl' htmlFor='key'>
							Insert Your Key 🔑
						</label>
						<input
							id='key'
							type='text'
							className='block w-60 p-4 mx-8 mt-2 rounded ring ring-green-700 bg-gray-100'
							onChange={(e) => decrypt(e.currentTarget.value)}
						/>
					</div>
				</div>
				<div className='flex-grow bg-slate-900 m-4 text-center rounded p-2'>
					<div className='text-xl font-bold'>RESULT</div>
					<p className='text-start'>
						{result ?? '👈 Your key or cipher is invalid 💀'}
					</p>
				</div>
			</div>
			<Link
				href={'https://michaeljuannn.github.io/'}
				className=' p-2 rounded m-5 md:m-10 bg-indigo-900 inline-block '
			>
				Made with 💚 by Juan
			</Link>
			<span>👈 Click it</span>
		</>
	);
}
