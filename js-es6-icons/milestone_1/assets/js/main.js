/*
    Milestone 1
    Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

    Milestone 2
    Coloriamo le icone per tipo

    Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const cardsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const containerRef = document.getElementById('container');


cardsList.forEach((item) => {
	const card = `<div class="card col-2">
					<div>
						<i class="icon ${item.type} ${item.family} ${item.prefix}${item.name}"></i>
						<h3 class="item">${item.name}</h3>
					</div>
				</div>`;
	containerRef.innerHTML += card;
	//console.log(item.name);
});

const filter = document.getElementById('filter_button');
filter.addEventListener('click', function() {
	const type = document.getElementById('type_filter');
	//console.log(type.value);
	
	const filteredTypes = [];
	cardsList.forEach((item, index) => {
		if (type.value == item.type) {
			filteredTypes.push(index);
		}
		else if (type.value == 'all') {
			filteredTypes.push(index);
		}
	});

	const filteredElement = cardsList.filter((element, index) => {
		return filteredTypes.includes(index);
	})
	console.log(filteredTypes)
	console.log(filteredElement)

	containerRef.innerHTML = null;

	filteredElement.forEach((item) => {
		const card = `<div class="card col-2">
						<div>
							<i class="icon ${item.type} ${item.family} ${item.prefix}${item.name}"></i>
							<h3 class="item">${item.name}</h3>
						</div>
					</div>`;
		containerRef.innerHTML += card;
		//console.log(item.name);
	});

})
const typeSelection = cardsList.filter((element) => {
	
})

