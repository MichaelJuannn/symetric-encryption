import { createCipheriv, randomBytes } from 'crypto';
import { useEffect, useState } from 'react';
export default function Home() {
	const iv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	const [message, setMessage] = useState('');
	const [key, setKey] = useState<string>();
	const [cipher, setCipher] = useState<string>();
	const [showCopy, setShowCopy] = useState<boolean>();
	useEffect(() => setKey(randomBytes(16).toString('hex')), []);
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
					<p className='text-6xl md:text-8xl text-center mb-5'>
						Symetric Encryption
					</p>
				</div>
				<div className='md:flex justify-center gap-3 '>
					<div>
						<div className='text-2xl m-1'>Plain Text</div>
						<textarea
							className='resize-none p-1 rounded m-2 md:ml-0 bg-slate-900'
							cols={30}
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.currentTarget.value)}
						></textarea>
					</div>
					<div>
						<div className='text-2xl m-1'>Cipher Text</div>
						<div className=' bg-slate-900 m-3 md:ml-0 p-5 rounded'>
							<p className='max-w-md'>{cipher}</p>
						</div>
					</div>
				</div>
				<div>
					<div className='m-2'>Key</div>
					<div className='p-2 m-3 rounded bg-slate-900'>{key}</div>
					<button
						className='py-2 px-4 m-3 rounded border border-gray-200 font-semibold hover:text-white hover:bg-green-700 hover:border-green-700 focus:outline-none active:ring-2 active:ring-green-700 active:ring-offset-2 transition-all text-sm'
						onClick={() => setKey(randomBytes(16).toString('hex'))}
					>
						GENERATE NEW KEY
					</button>
					<button
						className='py-2 px-4 m-3 rounded border border-gray-200 font-semibold hover:text-white hover:bg-green-700 hover:border-green-700 focus:outline-none active:ring-2 active:ring-green-700 active:ring-offset-2 transition-all text-sm'
						onClick={encrypt}
					>
						ENCRYPT
					</button>
					<button
						className='py-2 px-4 m-3 rounded border border-gray-200 font-semibold hover:text-white hover:bg-green-700 hover:border-green-700 focus:outline-none active:ring-2 active:ring-green-700 active:ring-offset-2 transition-all text-sm'
						onClick={() => {
							navigator.clipboard.writeText(key ?? ' I Love U <3');
							setShowCopy(true);
						}}
					>
						COPY KEY TO CLIPBOARD 🔑
					</button>
					<button
						className='py-2 px-4 m-3 rounded border border-gray-200 font-semibold hover:text-white hover:bg-green-700 hover:border-green-700 focus:outline-none active:ring-2 active:ring-green-700 active:ring-offset-2 transition-all text-sm'
						onClick={() => {
							navigator.clipboard.writeText(cipher ?? 'I Love U <3');
							setShowCopy(true);
						}}
					>
						COPY CIPHER TO CLIPBOARD 📋
					</button>
					<div className='flex'>{showCopy && <Copy />}</div>
				</div>
			</div>
		</>
	);
}

function Copy() {
	return (
		<div className='inline-block mx-auto rounded text-xl text-center mt-2 animate-bounce p-2 text-white bg-green-800'>
			COPIED 📋
		</div>
	);
}
