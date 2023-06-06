import React, { useEffect, useState } from "react";
import image1 from "./img/image1.jpeg";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png"
import logo from "./logo.png";
import gifImage from "./gif.gif";
import image6 from "./img/image6.png";
import image7 from "./img/image7.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [text, setText] = useState("");
  const message = "SIDD AHMED";
  const typingSpeed = 400;

  useEffect(() => {
    let timer = null;
    let index = 0;

    const typeNextCharacter = () => {
      if (index < message.length) {
        setText((prevText) => prevText + message.charAt(index));
        index++;
        timer = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    timer = setTimeout(typeNextCharacter, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImageUrl =
    "https://www.siddahmed.com/wp-content/uploads/2023/01/Copy-of-20221130-37114-scaled.jpg";
  const secondImageUrl =
    "https://www.theweekendleader.com/admin/upload/17_10_2022_10_34_36_Sidd_Ahmed_Vdart.webp";

  const pageStyle = {
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden", // Update to "auto" to show the vertical scroll when necessary
    background:"linear-gradient(180deg,  #ffffff  0%,#ffffff  30%,#ffdb01 75%,#0e197d 100%)",
  };
  const textOverlayStyle = {
    position: "absolute",
    top: "73%",
    left: "100%",
    transform: "translate(-50%, -50%)",
    fontSize: "85px",
    fontWeight: "bold",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    background: "rgba(0, 0, 0, 0)",
    padding: "10px 20px",
    borderRadius: "500px",
    width:"78%",
    opacity:"0.3",};


  const lineStyle = {
    position: "absolute",
    bottom: 330,
    left: -850,
    width: "380%",
    height: "8px",
    background: "#ffffff",
    zIndex: 2,
  };
  const firstLineStyles = {
    paddingLeft: '10px', // Adjust the padding as needed
  };
  const secondLineStyles = {
    paddingLeft: '50px', // Adjust the padding as needed
  };
  const thirdLineStyles = {
    paddingLeft: '90px', // Adjust the padding as needed
  };
 
  const imageContainerStyle = {
    height: "150vh",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 0.3s ease-in-out",
  };

  const secondImageContainerStyle = {
    position: "relative",
    top: "0vh",
    height: "120vh",
    background: `linear-gradient(360deg, rgba(2,0,36,1) -10%, rgba(9,9,121,1) -10%, rgba(1,33,93,0.6) -100%), url(${secondImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 0.3s ease-in-out",
  };

  const textContainerStyle = {
    position: "absolute",
    textAlign: "center",
    color: "#fce42c",
    fontSize: "40px",
    fontWeight: "bold",
    marginTop:"-90px",
  };

  const wisdomTextStyle = {
    marginBottom: "-10px",
    textAlign: "left",
    fontSize: "20px",
    marginTop: "350px",
    marginLeft: "40px",
  };

  const ceoTextStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    marginLeft: "70px",
  };

  const ceoTextContainerStyle = {
    display: "inline-block",
    marginLeft: "250px",
    marginTop: "0px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    alignItems: "center",
    display: "flex",
    
  };

  const innerContainerStyle = {
    textAlign: "center",
    margin: "0 20px",
    alignItems: "center",
    flex: 1,
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "20px",
    objectFit: "cover",
    transition: "opacity 0.3s ease-in-out",
  };

  const sidd = {
    textAlign: "right",
    marginLeft: "600px",
    marginTop: "-400px",
  };

  const containerTextStyle = {
    marginLeft: "50px",
  };

  const yellowContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "10px",
    width: "330px",
    height: "330px",
    margin: "auto",
    marginTop: "-700px",
    borderRadius: "50px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    position: "absolute",
    marginLeft: "950px",
    backdropFilter: "blur(10px)",
    opacity: "0.8",
    color: "#fce42c",
    textAlign: "center",
    fontSize: "25px",
  };

  const gifOverlayStyle = {
    position: "absolute",
    top: "-135px",
    left: "980px",
    width: "30%",
    marginTop: "540px",
    height: "100%",
    background: `url(${gifImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    opacity: "01",
    backgroundRepeat: "no-repeat",
  };

  const editableContainer1Style = {
    position: "relative",
    width: "700px",
    height: "700px",
    
    top: "200px",
    left: "0px",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:`url(${image4})`,
    backgroundSize:"cover",
    opacity: "1.5",
    backgroundPosition:"center",
  };

  const editableContainer2Style = {
    position: "relative",
    width: "450px",
    height: "200px",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
     borderRadius:"30%",
     padding:"30px",
    top: "-650px",
    left: "500px",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    opacity:"1",
    backgroundSize:"cover",
    backgroundPosition:"center",
  };

  const customContainerStyle = {
  position: "absolute",
  width: "400px",
  height: "200px",
  backgroundColor: "yellow",
  top: "500px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  padding: "20px",
  fontSize: "18px",
  fontWeight: "bold",
};
const iconContainerStyle = {
  position: "relative",
  bottom: "-970px",
  right: "-470px",
  display: "flex",
  gap: "10px",
};

const iconStyle = {
  color: "#ffffff",
  fontSize: "24px",
};
const instagramURL = "https://instagram.com/siddahmed?igshid=MzRlODBiNWFlZA==";
  const facebookURL = "https://www.facebook.com/siddahmedinc/";
  const twitterURL = "https://twitter.com/Sidvdart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
  const linkedinURL = "https://www.linkedin.com/in/siddsa/";
  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };
  
  const videocontainerstyle = {
    position: "relative",
    width: "500px",
    height: "315px",
    marginTop: "-510px",
    marginBottom: "430px",
    left:"55%",
    border: "2px solid",
    borderColor: "#00e6ff",
    borderRadius: "5px",
    boxShadow: "0 0 10px #9D00FF, 0 0 15px #9D00FF, 0 0 30px #00e6ff, 0 0 50px #FF008C",
  };

  const bottomimageContainerStyle = {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    top: "2300px",
    width: "10%",
    display: "flex",
    left:"104px",
    justifyContent: "center",
    zIndex:"9999",
  };
  
  const bottomimageStyle = {
    maxWidth: "100%",
    maxHeight: "100vh",
  };

  const handleImageLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div style={pageStyle}>
      <div style={imageContainerStyle}></div>
      <div style={bottomimageContainerStyle}>
      <Link to="/contact">
      <img
          src={image7}
          alt="image 7"
          style={{
            ...bottomimageStyle,
           
          }}
></img>
</Link>
      </div>
      <div style={textContainerStyle}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "90px",
            height: "90px",
            marginRight: "10px",
            display: "flex",
            marginTop: "-1011px",
            marginLeft: "5px",
          }}
        />
        <div style={{ ...wisdomTextStyle }}>
          <p>A wise man once said:</p>
          <p>"Whatever you decide to do,</p>
          <p>make sure it makes you happy!"</p>
        </div>
        <div style={sidd}>
          <h1>
            {text}
            <br />
            <span style={ceoTextContainerStyle}>
              <span style={ceoTextStyle}>
                - a CEO in the world of Bosses!
              </span>
            </span>
          </h1>
        </div>
      </div>
      <div style={containerStyle}>
    <div style={innerContainerStyle}>
      <div
        style={containerTextStyle}
        onMouseEnter={() => handleImageHover(0)}
        onMouseLeave={handleImageLeave}
      >
        <img
          src={image1}
          alt="Image 1"
          style={{
            ...imageStyle,
            opacity: hoveredIndex === 0 ? 0.5 : 1,
            filter: hoveredIndex === 0 ? "blur(2px)" : "none",
          }}
        />
        <h2>Realistic</h2>
        <p>Still got the child within him</p>
      </div>
    </div>
    <div style={innerContainerStyle}>
      <div
        style={containerTextStyle}
        onMouseEnter={() => handleImageHover(1)}
        onMouseLeave={handleImageLeave}
      >
        <img
          src={image2}
          alt="Image 2"
          style={{
            ...imageStyle,
            opacity: hoveredIndex === 1 ? 0.5 : 1,
            filter: hoveredIndex === 1 ? "blur(2px)" : "none",
          }}
        />
        <h2 style={{ fontSize: "24px" }}>Empowering</h2>
        <p>Touching people's lives</p>
      </div>
    </div>
    <div style={innerContainerStyle}>
      <div
        style={containerTextStyle}
        onMouseEnter={() => handleImageHover(2)}
        onMouseLeave={handleImageLeave}
      >
        <img
          src={image3}
          alt="Image 3"
          style={{
            ...imageStyle,
            opacity: hoveredIndex === 2 ? 0.5 : 1,
            filter: hoveredIndex === 2 || hoveredIndex === null ? "blur(2px)" : "none",
          }}
        />
        <h3 style={{ fontSize: "24px", lineHeight: "20px" }}>Simplicity</h3>
        <p>Never forgets his roots</p>
      </div>
    </div>
  </div>
      <div style={secondImageContainerStyle}></div>
      <div style={yellowContainerStyle}>
        <h2>"You are the greatest investment you can work on."</h2>
        <p>-Sidd Ahmed</p>
        
      </div>
      <div style={gifOverlayStyle}></div>
      <div style={editableContainer1Style}>
        
        <p style={{ color: "#fce42c" }}></p>
      </div>
      <div style={textOverlayStyle}>
      
      <span style={firstLineStyles}>SIDD AHMED</span><br />
      <span style={secondLineStyles}>SIDD AHMED</span><br />
      <span style={thirdLineStyles}>SIDD AHMED</span><br />
      </div>
       
      <div style={editableContainer2Style}>
       
        
        <p style={{   color: "#9D00FF", textShadow: "4px 3px 4px #FFFFFF",
  fontSize:"38px",fontWeight:"bold", textAlign:"center", }}>"Touching people's lives and empowering them is what touched my life for the better."</p>
      <div>
        <div style={iconContainerStyle}>
              <a href={instagramURL} target="_blank" rel="noopener noreferrer">
               <FaInstagram style={iconStyle} /></a>
              <a href={facebookURL} target="_blank" rel="noopener noreferrer">
               <FaFacebook style={iconStyle} /></a>
              <a href={twitterURL} target="_blank" rel="noopener noreferrer">
               <FaTwitter style={iconStyle} /></a>
               <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
               <FaLinkedin style={iconStyle} /></a>
        
            </div>
            </div>
            </div>
          <div style= {videocontainerstyle}>   
           <iframe width="500" height="315"  src="https://www.youtube.com/embed/vcfW6wPh-Dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        

          </div>

      
      
      <div style={lineStyle}>
      </div>
      
        </div>
    
  );
            
};

export default Home;
