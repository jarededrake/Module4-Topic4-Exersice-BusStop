function getInfo() {
    document.getElementById("submit").addEventListener("click", function() {
        let busStop = document.getElementById("stopId").value;
        let fetchPromise = fetch(`https://judgetests.firebaseio.com/businfo/${busStop}.json`); 
        // console.log(fetchPromise);
        fetchPromise.then(response => {
            return response.json();
        }).then(bus => {
            console.log(bus)
            Object.keys(bus.buses).forEach(key => {
                document.getElementById('buses').innerHTML += `<li>Bus ${key} arrives in ${bus.buses[key]} minutes</li>`
            })
            document.getElementById("stopName").innerHTML = bus.name;
        }).catch(function(error) {
                document.getElementById('stopName').innerHTML = "Error";
        })
        document.getElementById("stopId").value = "";
    });
}

//Did this work?????
//Trying to figure out if this worked or not




