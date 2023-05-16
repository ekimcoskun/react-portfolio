function AboutMe() {
  const handlePDFButton = () => {
    fetch("CV_EkimCoskun.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_EkimCoskun.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="page-container">
      <div className="aboutme-container">
        <p className="text-title">About Me</p>
        <div className="aboutme-block">
          <div className="text-container">
            <p className="text">
              Hello, I'm Ekim Coskun, a professional full-stack developer at PATH Product & Software
              House with 3 years of web development experience. I graduated from Eskisehir Osmangazi
              University in December 2022
            </p>
            <p className="text">
              In addition to my technical expertise, I take pride in incorporating my creativity and
              problem-solving skills into my projects. I continuously stay updated with new
              technologies, integrating current trends and best practices to optimize user
              experiences.
            </p>
          </div>

          <div className="aboutme-details">
            <p>
              <b>Name:</b> Ekim Coskun
            </p>
            <p>
              <b>Email:</b> ekim.coskun19@gmail.com
            </p>
            <p>
              <b>Age:</b> 24
            </p>
            <button className="button-85" onClick={handlePDFButton}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
