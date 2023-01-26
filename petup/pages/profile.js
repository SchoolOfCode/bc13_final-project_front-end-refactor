import Form from '../component/form/index.js'
import Header from '../component/header/header.js'
import Footer from '../component/footer/footer.js'
import { useSession, signIn, signOut } from "next-auth/react"

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
  const { data: session, status } = useSession()
  const userEmail = session?.user.email;
  const userImage = session?.user.image;
  return (
    <div>
      <Header></Header>
      <div className='profile-page-main-div'>
      <h1>Set your profile information</h1>
      <h6>Here you can also set your sitting services</h6>
      <Form email={userEmail} image={userImage} ></Form>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default profile;
