import express, { Request, Response } from 'express'
// const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
   let helloMessage = 'Hello Maxim. The back-end!!!'
   res.send(helloMessage)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})