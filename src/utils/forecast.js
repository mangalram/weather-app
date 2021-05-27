const request=require('request')


const forecast=(lat,long,callback)=>{
const url='http://api.weatherstack.com/current?access_key=5b1e25faaad817a6c8d83c3f6b1db0ae&query='+lat+','+long
request({url:url,json:true},(error,response)=>{
  if(error){
     console.log('api services down')
  }
  else if(response.body.error){
    console.log('Location not good ')
  }
  else{
  //const data=response.body
  callback(undefined,'It is currently '+response.body.current.temperature+'.There is a '+
  response.body.current.precip+ ' % chance of rain')
  //console.log(data.current)
  }
})}


module.exports=forecast