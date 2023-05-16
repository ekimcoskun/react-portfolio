function Resume() {
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
      <div className="resume-container">
        <p className="text-title">Resume</p>

        <div className="resume">
          <div className="resume-education">
            <p className="second-title">Education</p>
            <div className="single-resume">
              <p className="long">2016-2022</p>
              <div>
                <p className="field">Electrical and Electronics Engineering</p>
                <p className="company">Eskisehir Osmangazi University</p>
              </div>
            </div>
            <button style={{ marginTop: "15%" }} className="button-85" onClick={handlePDFButton}>
              Download CV
            </button>
          </div>
          <div className="resume-experience">
            <p className="second-title">Experience</p>
            <div className="single-resume">
              <p className="long">JUNE - 2022 / AUG - 2022</p>
              <div>
                <p className="field">Software Developer Intern</p>
                <p className="company">NETAS</p>
              </div>
            </div>
            <div className="single-resume">
              <p className="long">OCT - 2022 / DEC - 2022</p>
              <div>
                <p className="field">Software Developer Intern</p>
                <p className="company">PATH Product & Software House</p>
              </div>
            </div>
            <div className="single-resume">
              <p className="long">DEC - 2022 / PRESENT</p>
              <div>
                <p className="field">Full Stack Developer</p>
                <p className="company">PATH Product & Software House</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
