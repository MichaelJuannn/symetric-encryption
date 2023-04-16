import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';
import { useEffect, useState } from 'react';

const message = 'i like turtles';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);
const encryptedMessage =
	cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(encryptedMessage);

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage =
	decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');
console.log(decryptedMessage);
export default function Home() {
	const [message, setMessage] = useState('');
	const [key, setKey] = useState<Buffer>();
	useEffect(() => setKey(randomBytes(32)), []);

	return (
		<>
			<div>
				<h1 className='text-8xl'>TEXT</h1>
			</div>
			<div className='flex justify-center '>
				<div>
					<div>ENCODED</div>
					<textarea
						className='resize-none'
						cols={30}
						rows={10}
						value={message}
						onChange={(e) => setMessage(e.currentTarget.value)}
					></textarea>
				</div>
				<div>
					<div>DECODED</div>
					<div>{decryptedMessage}</div>
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
			</div>
		</>
	);
}
