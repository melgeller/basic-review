const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesOf = []

for (i=0; i<movies.length;i++){
    for (k = 0; k < movies[i].categories.length; k++){
    if (!categoriesOf.includes(movies[i].categories[k])){
        categoriesOf.push(movies[i].categories[k])
    }

    }

}

console.log(categoriesOf)