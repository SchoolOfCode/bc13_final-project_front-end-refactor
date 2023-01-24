//Next.js uses the App component to initialize pages
//the default export of _app.js is a top-level React component 
//that wraps all the pages in your application. 
// you can use this component to:
        // keep state when nagivating between pages 
        //  loads global CSS/styles for the app. 



import '../styles/globals.css'
import '../component/header/header.css'
import '../component/button/button.css'
import '../styles/index.css'
import '../component/footer/footer.css'
import '../component/displayResults/displayResults.css'
import '../component/radioButtons/radio.css'
import '../styles/search.css'
import '../component/map/map.css'
import '../styles/sitter.page.css'
import '../styles/contact.css'


import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}


// Previous code 
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
