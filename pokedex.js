const my_form = document.querySelector('form')
console.log(my_form)

my_form.addEventListener('submit', (event) => {
    event.preventDefault()
    pokename = event.target[0].value
    console.log(pokename)
    pokemonData(pokename)
})


const pokemonData = async (pokemon) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        const data = await response.json()
        console.log(data)
        addPoke(data)
    }    catch(error) {
            console.error(`there was an error: ${error}`)
        }
    }

    const poke_card = document.querySelector('#poke_card')
    console.log(poke_card)
    const addPoke = (data) => {
        console.log(data.sprites.front_default)
        poke_card.innerHTML = `
            <img src="${data.sprites.front_default}">
            <div>
                <h1>Pokemon</h1>
            </div>
            <div>
                <img id="pokeimg">
            </div>
            <div>
                <ul>
                    <li>"${data.name}"</li>
                    <li>"${data.abilities[0].ability.name}"</li>
                </ul>
            </div>`
    }
