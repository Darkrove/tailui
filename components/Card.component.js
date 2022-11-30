import React from "react";

function Card() {
	const data = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1669497525508-58805a6f4ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			name: "image.jpg",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1647813325515-1ff629f9197c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			name: "image.jpg",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
			name: "image.jpg",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1669518971786-7470f61f8782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80",
			name: "image.jpg",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1432&q=80",
			name: "image.jpg",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			name: "image.jpg",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1669687917290-5d7bcf244165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
			name: "image.jpg",
		},
		{
			id: 8,
			src: "https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			name: "image.jpg",
		},
		{
			id: 9,
			src: "https://images.unsplash.com/photo-1669704358963-81a133709b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			name: "image.jpg",
		},
		{
			id: 10,
			src: "https://plus.unsplash.com/premium_photo-1669658981544-f78c2af1141d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
			name: "image.jpg",
		},
		,
		{
			id: 11,
			src: "https://images.unsplash.com/photo-1669533034786-10f006f02b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			name: "image.jpg",
		},
		{
			id: 12,
			src: "https://images.unsplash.com/photo-1669518124550-a85a227b3685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
			name: "image.jpg",
		},
		{
			id: 13,
			src: "https://images.unsplash.com/photo-1669494070805-ad75d6f88c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
			name: "image.jpg",
		},
		{
			id: 14,
			src: "https://plus.unsplash.com/premium_photo-1663047201632-4045f1e2d8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			name: "image.jpg",
		},
		{
			id: 15,
			src: "https://images.unsplash.com/photo-1669459868647-4c2f1c564052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			name: "image.jpg",
		},
		{
			id: 16,
			src: "https://images.unsplash.com/photo-1669463590201-cc4b0227daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			name: "image.jpg",
		},
		{
			id: 17,
			src: "https://images.unsplash.com/photo-1668563686232-3ad799066f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
			name: "image.jpg",
		},
		{
			id: 18,
			src: "https://images.unsplash.com/photo-1669105783858-3cefea7640b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
			name: "image.jpg",
		},
		{
			id: 19,
			src: "https://images.unsplash.com/photo-1668800477238-0c701ec52be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			name: "image.jpg",
		},
		{
			id: 20,
			src: "https://images.unsplash.com/photo-1669303062211-02ebace8f885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			name: "image.jpg",
		},
	];
	const renderCard = () => {
		let images = data.map((img) => {
			return (
				<div
					key={img.id}
					class="group p-2 sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
				>
					<div class="relative overflow-hidden rounded-xl">
						<img
							src={img.src}
							alt="art cover"
							loading="lazy"
							width="1000"
							height="667"
							class="h-32 w-full object-cover object-top transition duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="mt-3 relative">
						<h5 class="text-md font-semibold text-gray-800 dark:text-white">
							{img.name}
						</h5>
						{/* <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
							Voluptates harum aliquam totam, doloribus eum impedit atque!
							Temporibus...
						</p>
						<a class="inline-block" href="#">
							<span class="text-primary">Read more</span>
						</a> */}
					</div>
				</div>
			);
		});
		return images.map((img) => img);
	};
	return (
		<div>
			<div>
				<div class="xl:container m-auto p-6 text-gray-600 md:px-6 xl:px-6">
					<div class="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
						{renderCard()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;