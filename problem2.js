// Q2. Delete record from data json having age less than 18.


let fs = require('fs')
function checkAge(){
    fs.readFile("./data.json", (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            data = JSON.parse(data)
            let adult = data.filter((ele) => ele['age']>= 18)
            // console.log(adult)
            fs.writeFile("./data.json",JSON.stringify(adult), (err) =>{
                if(err){
                    console.log(err)
                }
                console.log("data updated successfully")
            })
        }
    })
}

checkAge()