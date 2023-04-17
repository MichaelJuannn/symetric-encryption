import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { useEffect, useState } from 'react';
export default function Home() {
	const iv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	const [message, setMessage] = useState('');
	const [key, setKey] = useState<Buffer>();
	const [cipher, setCipher] = useState('');
	useEffect(() => setKey(randomBytes(32)), []);
	console.log(key);

	function encrypt() {
		//@ts-ignore
		const cipher = createCipheriv('aes256', key, iv);
		const encrypted =
			cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
		setCipher(encrypted);
	}

	return (
		<>
			<div className=''>
				<div>
					<p className='text-8xl text-center mb-5'>Symetric Encryption</p>
				</div>
				<div className='flex justify-center gap-3 '>
					<div>
						<div className='text-2xl'>Plain Text</div>
						<textarea
							className='resize-none rounded m-2 ml-0 bg-slate-900'
							cols={30}
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.currentTarget.value)}
						></textarea>
					</div>
					<div>
						<div className='text-2xl'>Cipher Text</div>
						<div className=' bg-slate-900 m-2 ml-0 p-5 rounded'>
							<p className='max-w-md'>{cipher}</p>
						</div>
					</div>
				</div>
				<div>
					<div className='m-2'>Key</div>
					<div className='p-2 m-3 bg-slate-800'>{key}</div>
					<button
						className='p-2 m-3 bg-violet-600 shadow shadow-violet-600  text-white rounded'
						onClick={() => setKey(randomBytes(32))}
					>
						Generate new Key
					</button>
					<button
						className='bg-violet-600 text-white py-2 px-4 m-3 shadow shadow-violet-600 rounded'
						onClick={encrypt}
					>
						ENCRYPT
					</button>
				</div>
			</div>
		</>
	);
}
