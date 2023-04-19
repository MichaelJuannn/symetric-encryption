import { createDecipheriv } from 'crypto';
import { useState } from 'react';
import Navbar from '@/components/navbar';

export default function Decrypt() {
	const iv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	const [input, setInput] = useState('');
	const [key, setKey] = useState<string>();
	const [result, setResult] = useState('');
	console.log(result);

	function decrypt() {
		//@ts-ignore
		const decipher = createDecipheriv('aes256', key, iv);
		try {
			const decrypted =
				decipher.update(input, 'hex', 'utf8') + decipher.final('utf8');
			setResult(decrypted);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Navbar />
			<h1 className='text-8xl'>DECRYPT</h1>
			<input
				type='text'
				className='m-2 bg-yellow-400'
				onChange={(e) => setInput(e.currentTarget.value)}
			/>
			<input
				type='text'
				className='m-2'
				onChange={(e) => setKey(e.currentTarget.value)}
			/>
			<button className='p-2 rounded bg-blue-400' onClick={decrypt}>
				decrypt
			</button>
		</>
	);
}
