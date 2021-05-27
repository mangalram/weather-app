const path=require('path')
const express=require('express')
const app=express()
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//Define Paths for express config
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

console.log(publicPath)

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicPath))




app.get('',(req,res)=>{
    res.render('index',{Title:'Weather App',Name:"Mangal"})
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
     return res.send('No address given')
    }
     
    geocode(req.query.address,(error,latlong={})=>{
        if (error){
            return res.send(error)
        }
     forecast(latlong.longitude,latlong.latitude,(error,forecastdata)=>{
        if (error){
            return res.send(error)
        }       
        res.send({forcast:forecastdata,latlong,address:req.query.address})
     })          

    })

    //res.send({location:req.query.address,forecast:"Here is the forecast data"})
})

app.get('/about',(req,res)=>{
    res.render('about',{Title:'About Me',Author:'Mangal'

    })
})
app.get('/help',(req,res)=>{
    res.render('help',{Title:'The Heslp Page',Author:'Mangalram'

    })
})


app.get('/help/*',(req,res)=>{
    res.send('404 help page not found ')
})

app.get('*',(req,res)=>{
    res.render('404',{Title:'404',Author:'Mangalram',Ntitle:'404 general page not found'})
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})