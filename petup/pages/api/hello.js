// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//all files inside pages/api are API routes

//this in an example code for fetching data from API 
//data can be fetched from local db, or from API, or direct query to database
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


