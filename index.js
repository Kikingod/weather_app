fetch('data2.json')
    .then(response => response.json())
    .then(value => {const data = data_order(value);create(data)})
    
    
    

function data_order(string){
    const data = string
    console.log(data)
    var li_datum = []
    var li_minimum = []
    var li_maximum = []
    for (var i = 0; i < 6; i++) {
        for(var x = 0; x <3; x++){
            if(x === 0){
                li_datum.push(data[i][x])}
            if(x === 1){
                li_minimum.push(data[i][x])}
            if(x===2){li_maximum.push(data[i][x])}
        }
    }
    return [li_datum,li_maximum,li_minimum]
}


function create(data){
    for(var x =0;x<=2;x++){
        for(var i=0;i<6;i++){
            if(x===0){
                let datum = document.getElementsByClassName("div_datum")[i];
                let create_ele = document.createElement('h5');
                create_ele.textContent = data[x][i];
                datum.appendChild(create_ele);
            }
            if(x===1){
                let datum = document.getElementsByClassName("div_maximum")[i];
                let create_ele = document.createElement('h5');
                create_ele.textContent = data[x][i];
                datum.appendChild(create_ele);
            }
            if(x===2){
                let datum = document.getElementsByClassName("div_minimum")[i];
                let create_ele = document.createElement('h5');
                create_ele.textContent = data[x][i];
                datum.appendChild(create_ele);
            }
        }
    }

}