const fetch = require('node-fetch')

/*
--- Source ---
//https://some-random-api.ml/
https://some-random-api.ml/facts/dog
https://some-random-api.ml/facts/cat
https://some-random-api.ml/facts/panda
https://some-random-api.ml/facts/fox
https://some-random-api.ml/facts/bird
https://some-random-api.ml/facts/koala
*/ 

function main(){
    
    function selectAnimal(num){
        const listOfAnimals = ['dog', 'cat', 'panda', 'fox', 'bird', 'koala']
        return listOfAnimals[num]
    }
    
    function handleFetch(url){
        fetch(url)
        .then(function(res){
            return res.json()
        }).then(function(json){
            console.log(json.fact)
        })
    }

    const randNum = Math.floor(Math.random() * Math.floor(6))
    const animal = selectAnimal(randNum)
    const api = `https://some-random-api.ml/facts/${animal}`

    handleFetch(api)

}

main()
