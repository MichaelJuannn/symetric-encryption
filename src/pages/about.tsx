import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import BaseHead from '@/components/basehead';

export default function About() {
	return (
		<>
			<BaseHead />
			<Navbar />
			<main className='m-3'>
				<div className='block w-fit mx-auto'>
					<h1 className='text-center text-3xl font-bold mb-5'>
						Symmetric Encryption
					</h1>
					<Image
						src={'images/schema.svg'}
						alt='symetric encryption illustration'
						width={500}
						height={500}
					></Image>
				</div>
				<div className='mx-auto md:w-2/3'>
					<h2 className='text-2xl font-bold'>What is Symmetric Encryption ?</h2>
					<p className='text-justify indent-5'>
						Symmetric encryption is a cryptographic method whereby the same
						secret key is used for both data encryption and decryption. It is a
						data encryption method whereby the same key is used to encode and
						decode information. Symmetric encryption is the simplest form of
						encryption, since it requires a single key to encrypt or decrypt
						information. It's the oldest and most well-known technique for
						encryption.
					</p>
				</div>
				<div className='mx-auto md:w-2/3'>
					<h2 className='text-2xl font-bold'>What is Symmetric Encryption ?</h2>
					<p className='text-justify indent-5'>
						To use symmetric encryption in Node.js, you can use the built-in
						library called crypto. The crypto library provides functions to
						carry out cryptographic operations such as hash, HMAC, cipher,
						decipher, sign and verify functions. Here's a brief overview of how
						you can use symmetric encryption in Node.js:
					</p>
					<ol>
						<li>
							1. First, you need to create a key using a secure random number
							generator
						</li>
						<li>
							2. Then you need to create an initialization vector (IV) using a
							secure random number generator
						</li>
						<li>
							3. Next, you can use the key and IV to encrypt your data using one
							of the available ciphers, ex : aes256
						</li>
						<li>
							4. Finally, you can decrypt your data using the same key and IV
						</li>
					</ol>
				</div>
				<div className='mx-auto w-2/3 m-4'>
					<Link
						href={'https://michaeljuannn.github.io/'}
						className='p-2 rounded bg-indigo-900 inline-block '
					>
						Made with 💚 by Juan
					</Link>
					<span>👈 Click it</span>
				</div>
			</main>
		</>
	);
}
