async function getPrizes() {
    fetch('http://api.nobelprize.org/v1/prize.json')    
    .then( (apidata) => {
        return apidata.json();
    } )
    .then( (actualdata) => {
        for(let i=0; i<=657; i++)
        {
            let data = actualdata.prizes[i];
            let laureatesLen = data.laureates.length;
            let j = 0;
            while(j<laureatesLen)
            {
                const fullName = data.laureates[j].firstname + " " + data.laureates[j].surname;
                document.getElementById('prizeList').innerHTML += "Prize Category: " + data.category + "<br/>" + "Year: " + data.year + "<br/>" + "Id: " +  data.laureates[j].id + "<br/>" + "Full Name: " + fullName + "<br/>" + "<br/>";
                j++;   
            }
        }
        
    } )
    .catch( (error) => {
        console.log(error);
    } );
}
getPrizes();

