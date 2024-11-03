
async function getData(){
    const rawInfo = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const info = await rawInfo.json();

    return info
}

getData().then(res => console.log(res.results[3].name))



const data = fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(data => console.log(data.results[0].name))

// async function dataa(){
    
//     const result =  await fetch('https://pokeapi.co/api/v2/pokemon/')
//     const fullData = await result.json();

//     return fullData
    
// }








