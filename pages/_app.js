import Head from 'next/head';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link
					href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
