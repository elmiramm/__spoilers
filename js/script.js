//SPOILERS
const spoilersArray = document.querySelectorAll('[data-spoilers]');


if (spoilersArray.length > 0) {
	//Получение обычных спойлеров
	const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
		return !item.dataset.spoilers.split(",")[0];
	});

	//Инициализация обычных спойлеров
	if (spoilersRegular.length > 0) {
		initSpoilers(spoilersRegular);
	}

	// Получение спойлеров с медиа запросами
	const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
		return item.dataset.spoilers.split(",")[0];
	});

	//Инициализация спойлеров с медиа-залпросами

	console.log(spoilersMedia);
}
