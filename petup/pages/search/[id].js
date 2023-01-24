//Pages that begin with [ and end with ] are dynamic routes in Next.js.
//Dynamic URL: The be generated pages paths will depend on the external data
//export getStaticPaths function to return a list of all values for id (kene fetch data from db) 
///export getStaticProps to fetch required data to render this dynamic page

//import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
//import Date from '../../components/date';
//import utilStyles from '../../styles/utils.module.css';

//this page will render post page with the same Layout 
//for each dynamic post page. 

export default function Post({ postData }) {
    return (
      <>
        <Head>
        <title>{postData.title}</title>
        </Head>
        
        <article>
             <h1 className = {utilStyles.headingXl}>{postData.id}</h1>
            <div className= {utilStyles.lightText}>
              {/* {postData.date} */}
              <Date dateString={postData.date} />
            </div>
        
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </>
    );
  }

//We’ll export an async function called getStaticPaths from this page. 
//In this function, we need to return a list of possible values for id.

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
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
    const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
  }

  //The post page is now using the getPostData function in getStaticProps 
  //to get the post data and return it as props.