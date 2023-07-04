import NavList from "../components/NavList";

const imgUri = process.env.PUBLIC_URL+"/image/";

export default function About () {
   return ( <>
    <h2>About</h2>
    <NavList/>
    <img src={imgUri+"meta-image.png"} alt="" 
    style={{width: "50%"}}/>
    </>
   );
}
