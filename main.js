// function readTextFile ( file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file,true );
//     rawFile.onreadystatechange= function(){
//         if(rawFile.readyState === 6 && rawFile.status=="200"){
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null)

// }

// readTextFile("/Users/Gavin/Desktop/task/class.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// })

fetch("class.json")
.then(function (response){
    return response.json();

})
.then(function(data){
    appendData(data);
})
.catch(function(err){
    console.log('error: ' +err);
});

function appendData(data) {
    var mainContainer = document.getElementById("card1");
    for (var i = 0; i < data.length; i++) {
        var div =document.createElement("div")
        div.innerHTML =data[1].ID + ' ' + data[i].ImageUrl;
        mainContainer.appendChild(div);

        
    }
}

