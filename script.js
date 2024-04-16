// request from the XMLHttp need to be made first


let myButton = document.getElementById('btn');
myButton.addEventListener("click", getLocation)

function getLocation(e) {
e.preventDefault();




let myLatitude = document.getElementById('lat').value;
let myLongitude = document.getElementById('lng').value;
let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.sunrise-sunset.org/json?lat=' + myLatitude + '&lng=' + myLatitude +'&date=today', true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let getResult = JSON.parse(this.responseText);

            // create a div to put everything in
            let newDiv = document.createElement('div');


            // create a paragraph tag to put the sunrise time 
            let sunRise = document.createElement('p');
            sunRise.innerHTML = 'Sunrise Time:' + ' ' + getResult.results.sunrise;

            // create a paragraph tag to put the sunset time 
            let sunSet = document.createElement('p');
            sunSet.innerHTML = "Sunset Time:" + ' ' + getResult.results.sunset;

            // append the paragraph tags to the created div
            newDiv.appendChild(sunRise);
            newDiv.appendChild(sunSet);

            // add the div element to the body of the document
            document.body.appendChild(newDiv);

        } else {
            console.log('Error processing Request')
        }
    }
}

}