import express, {Express}from 'express'

const app:Express =express()

const port:any =process.env.PORT || 8000

const main=()=>{
  app.listen(port, ()=>{
    console.log(`Running on http://lovalhost:${port}`)
  })
}
main()