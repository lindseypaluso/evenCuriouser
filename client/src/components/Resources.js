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
          URL: "https://www.whooosreading.org/"
        },
        {
          text: "Quizizz",
          logo: "./assets/images/quizizz.png",
          URL: "https://quizizz.com/"
        },
        {
          text: "Prodigy",
          logo: "./assets/images/prodigy.jpg",
          URL: "https://www.prodigygame.com/"
        },
        {
          text: "Lexia Core5",
          logo: "./assets/images/lexia-core5.jpg",
          URL: "http://lexiacore5.com/?"
        },
        {
          text: "Go Noodle",
          logo: "./assets/images/gonoodle.jpg",
          URL: "https://www.gonoodle.com/"
        },
        {
          text: "Upstart",
          logo: "./assets/images/upstart.png",
          URL: "https://www.waterfordupstart.org/"
        },
        {
          text: "Google Classroom",
          logo: "./assets/images/google-classroom.png",
          URL: "https://classroom.google.com"
        },
        
        {
          text: "Typing Club",
          logo: "./assets/images/typing-club.jpg",
          URL: "https://www.typingclub.com/"
        },
        {
          text: "Splash Learn",
          logo: "./assets/images/splash-learn.jpg",
          URL: "https://www.splashlearn.com/"
        },
        {
          text: "Moby Max",
          logo: "./assets/images/moby-max.jpg",
          URL: "https://www.mobymax.com/"
        },
        {
          text: "Freckle Learning",
          logo: "./assets/images/freckle.jpg",
          URL: "https://www.freckle.com/"
        },
        {
          text: "Zoom",
          logo: "./assets/images/zoom.png",
          URL: "https://zoom.us/"
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