async function getPrizes() {
    fetch('https://api.nobelprize.org/v1/prize.json')    
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
                let temp = "";
                const fullName = data.laureates[j].firstname + " " + data.laureates[j].surname;
                temp += "<tr>";
                temp += "<td>" + fullName + "</td>";
                temp += "<td>" + data.category + "</td>";
                temp += "<td>" + data.year + "</td>";
                document.getElementById("data").innerHTML += temp;
                j++;   
            }
        }
        
    } )
    .catch( (error) => {
        console.log(error);
    } );
}
getPrizes();

