import LinkCards from "./LinkCardsSimple";

export default function Page404() {
	//
	const routeConfig = [
		{ name: "Homepage", link: "/", symbol: "home" },
		{
			name: "Customers",
			link: "/customers",
			symbol: "sentiment_satisfied",
		},
		{ name: "Team", link: "/employees", symbol: "atr" },
		{ name: "Dictionary", link: "/dictionary", symbol: "dictionary" },
	];
	//
	return (
		<section className="bg-white dark:bg-gray-900 w-screen h-screen">
			<div className="pb-4 pt-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-center tracking-tight font-extrabold text-9xl text-primary-600 dark:text-primary-500 family-grotesque gradient-text">
						<span className="hard-stop-gradient-orange ">
							&#62;
						</span>
						404
						<span className="hard-stop-gradient-orange">&#60;</span>
					</h1>
					<p className="mb-4 pt-8 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl text-center">
						&nbsp;&nbsp;sorry.
					</p>
				</div>
			</div>
			{/* Boxes */}
			<LinkCards routeConfig={routeConfig} />
		</section>
	);
}
