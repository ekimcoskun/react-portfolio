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
        <div style={{ display: "flex" }}>
          <div className="text-container">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi ipsa numquam
              perspiciatis rem ab odio rerum exercitationem? Vitae odio labore, molestias dolor
              optio qui sint ratione voluptatum dignissimos maiores.
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
