import './Card.css';

export const Card = () => {
	const users = [
		{
			id: 1,
			name: "Звоните ДиКаприо!",
			img: "https://upload.wikimedia.org/wikipedia/ru/0/0c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%C2%AB%D0%97%D0%B2%D0%BE%D0%BD%D0%B8%D1%82%D0%B5_%D0%94%D0%B8%D0%9A%D0%B0%D0%BF%D1%80%D0%B8%D0%BE%21%C2%BB.jpg",
		},
		{
			id: 2,
			name: "Закон каменных джунглей",
			img: "https://upload.wikimedia.org/wikipedia/ru/a/a5/%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB_%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85_%D0%B4%D0%B6%D1%83%D0%BD%D0%B3%D0%BB%D0%B5%D0%B9.jpg",
		},
		{
			id: 3,
			name: "Гоголь. Киносериал",
			img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/f7773b08-c781-4578-9746-6061d38ddc1a/600x900",
		},
		{
			id: 4,
			name: "Пока цветет папоротник",
			img: "https://www.kino-teatr.ru/movie/posters/big/3/95023.jpg",
		},
		{
			id: 1,
			name: "Чёрная Любовь",
			img: "https://www.kino-teatr.ru/movie/poster/139383/124387.jpg",
		},
	];
	return (
		<div className='photo_content'>
			{users.map((el) => {
				return (
					<div className='photodiv'>
						<img src={el.img} alt={el.name} />
						<p>{el.name}</p>
					</div>
				);
			})}
		</div>
	);
};
