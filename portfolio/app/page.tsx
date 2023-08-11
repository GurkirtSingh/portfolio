import Navbar from "./navbar/page";
import "./page.module.css"
import ProfilePicture from "./profile_picture/page";
import SocialLinks from "./social_links/page";
export default function Home(){
  return (
  <>
    <Navbar/>
    <div style={{
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <ProfilePicture/>
        <h3>An Experienced Full Stack Developer </h3>
      </div>
      <SocialLinks/>
    </div>
    
  </>);
}