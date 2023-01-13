//all files inside pages/api are API routes
//all scripts inside pages/api will not be rendered on client side. 

//this in an example code for fetching data from API 
//data can be fetched from local db, or from API, or direct query to database
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

//sample code:
//we can create functions inside the pages/api directory with the following format: 

// export default function handler(req, res) {
//     // ...
//   }

//note: 
    //req = HTTP incoming message
    //res = HTTP server response

//Notes on API Route:
  //Do not fetch an API Route from getStaticProps or getStaticPaths. 
  //Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
