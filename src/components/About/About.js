import "./About.css";
import AvatarImage from "../../images/About_photo.png";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <img
          src={AvatarImage}
          className="about__avatar-image"
          alt="Author's Photo"
        />
        <div className="about__text">
          <h2 className="about__text_author">About the author</h2>
          <p className="about__text_bio">
            Hello there! I'm Sheena Irvin, a software developer specializing in
            a diverse array of technologies including Javascript, AWS, SQL,
            React, Node.js, Express.js, HTML, CSS, MongoDB, and Google Cloud.
            <br></br>
            <br></br>
            My journey into the world of coding began at TripleTen bootcamp,
            where I underwent intensive training and emerged equipped with the
            skills to tackle complex development challenges. Whether it's
            crafting seamless user experiences with React or architecting
            scalable backend systems with Node.js, I bring a wealth of
            experience and expertise to the table. If you're seeking to enhance
            your digital presence or optimize your technological infrastructure,
            I'm here to offer insightful solutions and drive impactful results.
            Let's collaborate to transform your ideas into reality, one line of
            code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
