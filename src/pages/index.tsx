import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { useEffect, useState } from 'react';

// const message = 'i like turtles';
// const key = randomBytes(32);
// const iv = randomBytes(16);

// const cipher = createCipheriv('aes256', key, iv);
// const encryptedMessage =
// 	cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
// console.log(encryptedMessage);

// const decipher = createDecipheriv('aes256', key, iv);
// const decryptedMessage =
// 	decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');
// console.log(decryptedMessage);
export default function Home() {
	const iv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	const [message, setMessage] = useState('');
	const [key, setKey] = useState<Buffer>();
	const [cipher, setCipher] = useState('');
	useEffect(() => setKey(randomBytes(32)), []);

	function encrypt() {
		//@ts-ignore
		const cipher = createCipheriv('aes256', key, iv);
		const encrypted =
			cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
		setCipher(encrypted);
	}

	return (
		<>
			<div>
				<p className='text-8xl'>Encrypt</p>
			</div>
			<div className='flex justify-center '>
				<div>
					<div>Plain Text</div>
					<textarea
						className='resize-none'
						cols={30}
						rows={10}
						value={message}
						onChange={(e) => setMessage(e.currentTarget.value)}
					></textarea>
				</div>
				<div>
					<div>Cipher Text</div>
					<div className=' whitespace-pre-line max-w-lg bg-red-500'>
						<p className='whitespace-pre-line'>{cipher}</p>
					</div>
				</div>
			</div>
			<div>
				<div>Key</div>
				<div>{key}</div>
				<button
					className='p-2 m-3 bg-red-600 rounded'
					onClick={() => setKey(randomBytes(32))}
				>
					Generate new Key
				</button>
				<button onClick={encrypt}>ENCRYPT</button>
			</div>
			<div>
				<div className='text-8xl'>Decrypt</div>
			</div>
		</>
	);
}
