//Pages that begin with [ and end with ] are dynamic routes in Next.js.
//Dynamic URL: The be generated pages paths will depend on the external data
//export getStaticPaths function to return a list of all values for id (kene fetch data from db) 
///export getStaticProps to fetch required data to render this dynamic page

//import Layout from '../../components/layout';
import { getAllSitterID, getSitterbyID } from '../../lib/search.js';
import Head from 'next/head';
import Image from 'next/image';
//import Date from '../../components/date';
//import utilStyles from '../../styles/utils.module.css';

//this page will render post page with the same Layout 
//for each dynamic post page. 

export default function Post({ sData }) {
    const sitterData = sData[0];
    return (
      <>
        <Head>
        <title>{sitterData.nickname}</title>
        </Head>
        
             <h1 >{sitterData.fullname}</h1>

             <div className="display-card">
        {/*to refactor later to use Image component from Next.js instead of img tag */}

        <img
          priority
          src={sitterData.profile_image}
          className="profile-img"
          // height= {144}
          // width= {144}
          alt="profile picture"
        />
        <div className="main-taglines">
          <h1>{sitterData.nickname}</h1>
          <h2>"{sitterData.tagline}"</h2>
          <h3>
            {sitterData.address_region},{sitterData.address_city}
          </h3>
          <div className="email-and-icon-div">
            
            <Image src="/icons8-secured-letter-50.png" width="25" height="25" alt= "email-icon"/>
              <p>{sitterData.email}</p>
          </div>
        </div>
        <div className="rate">
    
        </div>
      </div>
    </>
        
            
    
    );
  }

//We’ll export an async function called getStaticPaths from this page. 
//In this function, we need to return a list of possible values for id.

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = await getAllSitterID();
    console.log(paths)
  return {
    paths,
    fallback: false,
  };
  }

//Finally, we need to implement getStaticProps again 
//- this time, to fetch necessary data for the blog post with a given id. 
//getStaticProps is given params, which contains id (because the file name is [id].js).
//we know that getStaticPaths function retuns this:
 // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    //so we can access params.id in getStaticProps
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const sData = await getSitterbyID(params.id);
    
  return {
    props: {
      sData,
    },
  };
  }

  //The post page is now using the getPostData function in getStaticProps 
  //to get the post data and return it as props.