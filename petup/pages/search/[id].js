//Pages that are named in [] are dynamic routes in Next.js.

import { useRouter } from "next/router"
import { getAllSitterID, getSitterbyID } from '../../lib/search.js';
import Head from 'next/head';
import Image from 'next/image';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";


export default function Post({ sData }) {
    const sitterData = sData[0];
    const router = useRouter();
    
    return (
      <>
        <Head>
        <title>{sitterData.nickname}</title>
        </Head>
        <Header />
        
        {/* <h1 >{sitterData.fullname}</h1> */}

        {/* back button */}
        <div className = "back-button">
                <button onClick={() => router.back()}>Back</button>
            </div>
        

        <div className="profile-page">
        
        <img
          priority
          src={sitterData.profile_image}
          className="profile-img"
          height= {144}
            width= {144}
          alt="profile picture"
        />
        <div className="main-info">
            <h1>Name</h1>
          <h2>{sitterData.fullname}</h2>
          <h1>Bio</h1>
          <h2>{sitterData.tagline}</h2>
          <h1>Address</h1>
          <h3>
            {sitterData.address_region},{sitterData.address_city},{sitterData.address_postcode}
          </h3>
          <div className = "pet-div">
          <h1>Type of pets hosted</h1>
          {sitterData.pet_dog? <div className = "input-radio-div"><Image
                      src = "/icons8-dog-sit-90.png"
                      width = {100}
                      height = {100}
                      ></Image><p>dog</p></div> : <></>}
          {sitterData.pet_cat? <div className = "input-radio-div"> <Image
                      src = "/icons8-pet-commands-stay-100.png"
                      width = {100}
                      height = {100}
                      ></Image> <p>cat</p></div> : <></> }
          {sitterData.pet_other? <div className = "input-radio-div"><Image
                      src = "/icons8-easter-rabbit-96.png"
                      width = {100}
                      height = {100}
                      ></Image>
                       <p>other</p></div> : <></> }
            </div>
            <div className = "service-div">
          <h1>Type of service offered</h1>
          {sitterData.pet_hosting? <div className = "input-radio-div">
                    <Image
                      src = "/icons8-pet-commands-stay-100.png"
                      width = {100}
                      height = {100}
                      ></Image><p>pet hosting</p></div> : <></> }
          {sitterData.house_sitting? <div className = "input-radio-div">
                    <Image
                      src = "/icons8-pet-commands-stay-100.png"
                      width = {100}
                      height = {100}
                      ></Image><p>house sitting</p></div> : <></> }
          {sitterData.dog_walking? <div className = "input-radio-div">
                    <Image
                      src = "/icons8-pet-commands-stay-100.png"
                      width = {100}
                      height = {100}
                      ></Image><p>dog walking</p></div> : <></> }
          
          </div>

          

        
        </div>
    
      </div>
      <Footer />
    </>
        
            
    
    );
  }


  
//Dynamic URL: The generated pages paths will depend on the external data
//export getStaticPaths function to return a list of all values for id 

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = await getAllSitterID();
    console.log(paths)
  return {
    paths,
    fallback: false,
  };
  }


///export getStaticProps to fetch required data to render this dynamic page  
  export async function getStaticProps({ params }) {
    const sData = await getSitterbyID(params.id);
    
  return {
    props: {
      sData,
    },
  };
  }
