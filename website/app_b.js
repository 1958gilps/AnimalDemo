
// Chained promises to get and post data

document.getElementById('generate').addEventListener('click', performAction); // line 4

function performAction(e){
// Select the actual value of an HTML input to include POST
const fav = document.getElementById('fav').value;

// Faking an API call
getAnimal('http://127.0.0.1/3000/fakeAnimalData')
// New Syntax
.then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal: data.animal, fact: data.fact, fav:fav})

    // We can do this because of Async !
    updateUI()
})

}

/* POST EXAMPLE */ // line 25 in the example
const postData = async ( url = '', data = {}) =>{
    // console.log(data);
    const response = await fetch(url, {
      method: 'POST', // *GETR, POST, PUT, DELETE, etc..
      credentials: 'same-origin', // include , *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),   // body data type must match 'Content-Type'
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
        } catch(error) {
          console.log('error', error);
          // appropriately handle the error
        }
    }

    const getAnimal = async (baseURL, animal, key) =>{
        const res = await fetch(url)
        try {
            const data = await res.json();
            console.log(data);
            return data;
        } catch(error) {
            console.log('error', error);
            // appropriately handle the error - line 57
        }
    }

/* UPDATE UI DEMO */ // line 62
const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json();
    console.log(allData);
  document.getElementById('animalName').innerHTML = allData[0].animal;
  document.getElementById('animalFact').innerHTML = allData[0].facts;
  document.getElementById('animalFav').innerHTML = allData[0].fav;
  
}catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}