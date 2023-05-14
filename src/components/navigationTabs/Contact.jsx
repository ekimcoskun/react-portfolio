import {
  AiFillPhone,
  AiOutlineMail,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillCaretRight,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="page-container">
      <div className="contact-container">
        <p className="text-title">Contact</p>
        <div className="contact-info">
          <div className="single-info">
            <AiFillCaretRight />
            <p className="single-text">Izmir/Tire - TURKEY</p>
          </div>
          <div className="single-info">
            <AiFillCaretRight />
            <p className="single-text">Istanbul/Kartal - TURKEY</p>
          </div>
          <div className="single-info">
            <AiFillPhone color="white" size={"30px"} />
            <p className="single-text"> +90 551 220 7005</p>
          </div>
          <div className="single-info">
            <AiOutlineMail color="white" size={"30px"} />
            <p className="single-text"> ekim.coskun19@gmail.com</p>
          </div>
        </div>
        <p className="contact-title">Follow Me</p>
        <div className="navigation-footer">
          <AiFillGithub
            color="white"
            size={"30px"}
            onClick={() => window.open("https://github.com/ekimcoskun", "_blank")}
            className="icon"
          />
          <AiFillFacebook
            color="white"
            size={"30px"}
            onClick={() => window.open("https://www.facebook.com/trailer07", "_blank")}
            className="icon"
          />
          <AiOutlineInstagram
            color="white"
            size={"30px"}
            onClick={() => window.open("https://www.instagram.com/ekimcoskun", "_blank")}
          />
          <AiFillLinkedin
            color="white"
            size={"30px"}
            onClick={() => window.open("https://www.linkedin.com/in/ekimcoskun/", "_blank")}
            className="icon"
          />
          <AiFillTwitterCircle
            color="white"
            size={"30px"}
            onClick={() => window.open("https://twitter.com/ekim_coskun", "_blank")}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
