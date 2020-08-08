import React, { Component } from "react";
import ResourceButton from "./ResourceButton.js";

class Resources extends Component {

  state = {
    icons: []
  };

  componentDidMount() {
    this.setState({
      icons: [
        {
          text: "Whooo's Reading?",
          logo: "./assets/images/whooos-reading.jpg",
          URL: ""
        },
        {
          text: "Quizizz",
          logo: "./assets/images/quizizz.png",
          URL: ""
        },
        {
          text: "Prodigy",
          logo: "./assets/images/prodigy.jpg",
          URL: ""
        },
        {
          text: "Lexia Core5",
          logo: "./assets/images/lexia-core5.jpg",
          URL: ""
        },
        {
          text: "Newsela",
          logo: "./assets/images/newsela.png",
          URL: ""
        },
        {
          text: "Upstart",
          logo: "./assets/images/upstart.png",
          URL: ""
        },
        {
          text: "Google Classroom",
          logo: "./assets/images/google-classroom.png",
          URL: ""
        },
        
        {
          text: "Typing Club",
          logo: "./assets/images/typing-club.jpg",
          URL: ""
        },
        {
          text: "Splash Learn",
          logo: "./assets/images/splash-learn.jpg",
          URL: ""
        },
        {
          text: "Moby Max",
          logo: "./assets/images/moby-max.jpg",
          URL: ""
        },
        {
          text: "Freckle Learning",
          logo: "./assets/images/freckle.jpg",
          URL: ""
        },
        {
          text: "Zoom",
          logo: "./assets/images/zoom.png",
          URL: ""
        }
      ]
    })
  };

  render() {
    return (
      <div className="container resources-container">
        <div className="row py-5 justify-content-center">
          {this.state.icons.map(icon =>
            <ResourceButton
              text={icon.text}
              logo={icon.logo}
              URL={icon.URL}
              key={icon.text}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Resources;