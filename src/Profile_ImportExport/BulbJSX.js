import React, { useState } from "react";
import './BulbJSX.css';

export default function BulbJSX() {

  const [bulbState, setBulbState] = useState("https://cahillheating.com/wp-content/uploads/2023/11/LightBulb.jpg");
  // const [imageSrc, setImageSrc] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SInOC1ATN6BTOVGGK35yWnpqU0iNETMEtA&s");
  const redLight = () => setBulbState("https://www.feit.com/cdn/shop/files/A19-TR-LED-2025-02-10_6f063678-009e-448a-90f0-b2dff8df7636_grande.jpg?v=1739179253");
  const greenLight = () => setBulbState("https://i5.walmartimages.com/asr/525a08d0-10e3-4309-b811-5740436aa1f7.79df417aeeb04f7ec019116f8e520181.jpeg");
  // const changeImage = () => setImageSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdClgldEAO07CnG6pdQiRN-A3joSU-Uc6FQ&s");
  return (
    <div className="main-div">
      <h1 style={{color:"black"}}>BULB</h1>
      <img className="bub-img" id="myImage" src={bulbState} alt="Lightbulb" />
      <div className="button-div">
        <button className="button" style={{backgroundColor: "red", borderRadius:"30px"}} onClick={redLight}>Red Light</button>
        <button className="button" style={{backgroundColor: "green", borderRadius:"30px"}}  onClick={greenLight}>Green Light</button>
      </div>
    </div>
  )
}
