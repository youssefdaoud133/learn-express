
const async = require("hbs/lib/async")
const request = require("postman-request")
const g = console.log
 


// create general fun

function getatwal(address) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieW91c3NlZmRhb3VkMDEyIiwiYSI6ImNsNjgwNjBkOTAzNWQzZHBleWNzbnN0ZmwifQ.1mzwPoKS8orcCz-TASIHnQ&limit=1`
    let getdata = new Promise( (resolve,reject) =>{
        request({url:url, json:true},(e,{body}) =>{
            if(e){g("check your internet")
            }else if(body.features.length === 0){ g("check your address")
            }else{
                const tol =body.features[0].center[0]
                const ard =body.features[0].center[1]
                
                const datatol = {
                    tol,
                    ard
                }
                resolve(datatol)
            }
        })
    } )

    return getdata
}

//
// ss
   function databack (data) {
    let url = `http://api.weatherstack.com/current?access_key=0af40b4c478a4eee5eff273eb6d3ff2f&query=${data.ard},${data.tol}`
    let final = new Promise((resolve, reject) => {
        request({url, json:true},(e,res) =>{
            resolve(res.body)
        })
    })
   return final
}
//


const addressdata = module.exports = {
    getatwal:getatwal,
    databack:databack
   
}