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

        <div className="profile-page">

        
         <div className = "back-button" >
         <button className = "back" onClick={() => router.back()}>Return to results</button>
         <h1 style={{ color: "black" }}>{sitterData.fullname}</h1>
            </div>
          
          <div className="sitter-first-main-div">
            <div className="name-bio-div">
              <div className="sitter-name-div">
              <div className="name-div">
              <p>First name</p>
              <h2 className="h1">{sitterData.nickname}</h2>
              </div>
                <div className="name-div">
                <p>Surname</p>
                <h2 className="h1">{sitterData.fullname}</h2>
                </div>
                
              </div>
              <div className="sitter-bio-div">
              <p>Bio</p>
                <p style={{ fontSize: "x-large", border: '1px solid black', width: '100%',height: '80%', textAlign:'center'}}>
                  {sitterData.tagline}
                </p>
              </div>
            </div>
            <div className="sitter-pic-div">
              <img
                priority
                src={sitterData.profile_image}
                className="profile-img"
                height={250}
                width={250}
                style={{ borderRadius: "50%" }}
                alt="profile picture"
              />
            </div>
          </div>
          <div className="sitter-second-main-div">
            <div className="sitter-address-div">
              <div className="sitter-address-box">
                <p>Region</p>
                <h2 className="h2">{sitterData.address_region}</h2>
              </div>
              <div className="sitter-address-box">
                <p>City</p>
                <h2 className="h2">{sitterData.address_city}</h2>
              </div>
              <div className="sitter-address-box">
                <p>Postcode</p>
                <h2 className="h2">{sitterData.address_postcode}</h2>
              </div>
            </div>
            <div className="sitter-service-div">
              <div className="sitter-service-box">
                {/* <div className="data-title-box"> */}
                <p>Pet hosted</p>
                {sitterData.pet_dog ? (
                  <div className="data-box">
                    <Image
                      src="/icons8-dog-sit-90.png"
                      width={100}
                      height={100}
                    ></Image>
                    <p>dog</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.pet_cat ? (
                  <div className="data-box">
                    {" "}
                    <Image
                      src="/icons8-pet-commands-stay-100.png"
                      width={100}
                      height={100}
                    ></Image>{" "}
                    <p>cat</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.pet_other ? (
                  <div className="data-box">
                    <Image
                      src="/icons8-easter-rabbit-96.png"
                      width={100}
                      height={100}
                    ></Image>
                    <p>other</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="sitter-service-box">
                <p>Service</p>
                {sitterData.pet_hosting ? (
                  <div className="data-box">
                    <Image
                      src="/icons8-luggage-96.png"
                      width={100}
                      height={100}
                    ></Image>
                    <p>pet hosting</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.house_sitting ? (
                  <div className="data-box">
                    <Image
                      src="/icons8-country-house-100.png"
                      width={100}
                      height={100}
                    ></Image>
                    <p>house sitting</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.dog_walking ? (
                  <div className="data-box">
                    <Image
                      src="/icons8-dog-walking-100.png"
                      width={100}
                      height={100}
                    ></Image>
                    <p>dog walking</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="sitter-service-box">
                <p>Rate</p>
                {sitterData.pet_hosting ? (
                  <div className="data-box">
                    <p>£ {sitterData.pet_hosting_rate}</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.house_sitting ? (
                  <div className="data-box">
                    <p>£ {sitterData.house_sitting_rate}</p>
                  </div>
                ) : (
                  <></>
                )}
                {sitterData.dog_walking ? (
                  <div className="data-box">
                    <p>£ {sitterData.dog_walking_rate}</p>
                  </div>
                ) : (
                  <></>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
          </div>
        {/* 
        {" "}
        <h1>{sitterData.nickname}</h1>
        <div className="sitter-bio-address">
        <h1>Address</h1>
            <p>,</p>
            <p>
              {sitterData.address_city}
              <p></p>
              {sitterData.address_postcode}
            </p>
        </div>
        <h2>{sitterData.fullname}</h2>
        <div className="sitter-address">
          <div className="name-picture-div">
         
            <img
            priority
            src={sitterData.profile_image}
            className="profile-img"
            height={144}
            width={144}
            alt="profile picture"
          />
          </div>
      
        </div>
        {/* <img

        {/* back button */}
        {/* <div className = "back-button" > */}
        {/* <button className = "sign-in" onClick={() => router.back()}>Return to results</button>
            </div>
        

        <div className="profile-page"> */}

        {/* <img

          priority
          src={sitterData.profile_image}
          className="profile-img"
          height= {144}
            width= {144}
          alt="profile picture"
        />  */}
        {/* <div className="main-info">
          {/* <h1>Name</h1>
          <h2>{sitterData.fullname}</h2> */}
        {/* <h1>Bio</h1>
          <h2>{sitterData.tagline}</h2>

          <div className="pet-div">
            <h1>Type of pets hosted</h1>
            
          </div>
          <div className="service-div">
            <h1>Type of service offered</h1>
            
          </div>
        </div>
      </div> */}
        <Footer />
      </>
    );
}

//Dynamic URL: The generated pages paths will depend on the external data
//export getStaticPaths function to return a list of all values for id

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllSitterID();
  console.log(paths);
  return {
    paths,
    fallback: blocking, //this function called before initial render when using fallback: blocking
    // fallback: true // the function runs in the background when using fallback: true
  };
}

///export getStaticProps to fetch required data to render this dynamic page
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const sData = await getSitterbyID(params.id);

  return {
    props: {
      sData,
    },
  };
}
