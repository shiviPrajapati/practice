/*
Q.1 Read data from data.json file
    Write a function to get countries from a pair of lat long.
    
    Get countries for each user and add additional field "country" to data.json inside ..address field.
*/

let fs = require('fs')
let country = require("./country.json")
function findAddress(){
    fs.readFile("./data.json", (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            data = JSON.parse(data);
            let addressData = data.map((ele)=>{
                let coordinates = ele['address']['coordinates']['lat']+' | '+ ele['address']['coordinates']['lng']
                if(country)
                ele['country'] = country[coordinates]
                return ele
            })
            fs.writeFile("./data.json",JSON.stringify(addressData), (err) =>{
                if(err){
                    console.log(err)
                }
                console.log("country inserted successfully")
            })
        }
    })
}

findAddress()