import React from "react";
import Articles from "../articles";
import { Link } from "react-router-dom";
import MotorBike from "../motorbikeTuning";
const Mix = () => {
  return (
    <>
      <Articles />
      <div className="container">
        <Link to="https://youtu.be/0EnjJpHuNGE" className="link">
          Redux Toolkit Shopping Cart
        </Link>
        <Link
          to="https://youtu.be/dzPFDI5KKfc?si=VpabvJX6J6EyZjqX"
          className="link"
        >
          Learn Reducx Toolkit
        </Link>{" "}
        <Link
          to="https://www.youtube.com/watch?v=ap56ivm0dhw&ab_channel=TruthSeekers"
          className="link"
        >
          Github ssh key generate
        </Link>
        <Link to="https://www.imagetotext.io/" className="link">
          Copy text from the image
        </Link>
        <Link to="https://echallan.psca.gop.pk/" className="link">
          e-challan check{" "}
        </Link>
        <Link
          to="https://youtu.be/b4_kWaeVSmw?si=EBo3z1Wn0EE1JM_0"
          className="link"
        >
          Asif bahi
        </Link>
        <Link to="https://maps.app.goo.gl/5kyAxTERAuFsx8Nw8" className="link">
          My Home Address
        </Link>
        <Link to="https://maps.app.goo.gl/RncvZRk5i4i3ynPB9" className="link">
          Apps4U Office
        </Link>
        <Link
          to="https://1drv.ms/u/s!Ahi3Uu0Ue307g4JC4c5fhMb92Z1niw?e=kzqXZ7"
          className="link"
        >
          Asif bahi link
        </Link>
        <div>Password2000</div>
        <MotorBike />
        <h3>Message for HR</h3>
        <h3 className="msg">
          Dear Hiring Manager, I hope this email finds you well. I am writing to
          express my interest in the Front End Developer position within your
          esteemed organization. With [1 year] of hands-on experience in HTML,
          CSS, JavaScript,React Js,Material Ui,Bootstrap,Github and proficiency
          in frameworks like Next js, I am enthusiastic about the opportunity to
          contribute my technical skills and expertise to your team. Please find
          attached my resume for your review. I am available at your earliest
          convenience for a discussion about how my background and skills align
          with the requirements of the Front End Developer role at your
          organization. Thank you for considering my application. I look forward
          to the possibility of contributing to your team and further discussing
          how I can add value to your company. Warm regards, Zain Ishfaq
          0341-7872458
        </h3>
      </div>
    </>
  );
};

export default Mix;
