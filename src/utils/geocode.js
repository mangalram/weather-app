const request=require('request')

const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWFuZ2FscmFtIiwiYSI6ImNraWVrMnN1eTEyaXUycm81cHlibXd0OTgifQ.CxDHjlzLuGz1l8reXpS-ow'
  
    request({url:url,json:true},(error,response)=>{
         if (error){
           callback('Unalbe to connect to location services')        
         }else if (response.body.features.length===0)
         {
           callback('The location is perhaps not correct')}
          else
            {
              callback(undefined,
                {latitude:response.body.features[0].center[0],
                 longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name}
                )
            }
          })
  }
  
  module.exports=geocode