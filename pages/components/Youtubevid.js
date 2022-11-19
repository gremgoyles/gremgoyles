import React from "react";
import YouTube from "react-youtube";
  
export default class Youtubevid 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div className="min-h-50 w-full bg-black flex justify-center">
        <YouTube videoId="6wQSFf-4SHg" 
            opts={opts} onReady={this._onReady}/>
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}