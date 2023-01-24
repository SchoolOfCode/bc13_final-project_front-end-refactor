import Form from '../component/form/index.js'
import Header from '../component/header/header.js'
import Footer from '../component/footer/footer.js'

// import { checkUserExists, getUserData } from '../lib/search';
// import { useSession } from 'next-auth/react';

// export async function getServerSideProps() {
//   const { data: session} = useSession()
//   const userEmail = session?.user.email;
//   const userImage = session?.user.image;
//   const userExists = checkUserExists(userEmail)
//   const userData = getUserData(userEmail)

//     return {
//       props: {
//         userData,
//         userExists,
//         userEmail,
//         userImage
//       }
//     }
// }

function profile() {
  return (
    <div>
      <Header></Header>
      <h1>Set your profile information</h1>
      <h5>Here you can also set your sitting services</h5>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default profile;