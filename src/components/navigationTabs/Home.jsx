import Typewriter from "typewriter-effect";
import background from "../../assets/background.jpg";
function Home() {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-texts">
        <div className="typewriter">
          <p>Welcome !</p>
          <Typewriter
            options={{
              strings: ["I am Ekim Coskun.", "I am a Full Stack Developer."],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
