import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import volume from "../asset/volumeOn.png"
import Options from "../component/options/options"
import VideoPlayer from "../component/videoPlayer/videoPlayer";
import WeatherCard from "../component/weatherCard/weatherCard";
// const [lightMode, setLightMode ] = useState(false)



const config = {
  
  botName: "WeatherBot",
  initialMessages: [
    createChatBotMessage(`Hello! I am your weather assistant. How can I help ?`)
  ],
  customComponents: {
    // Replaces the default header

    header: () => <div style={{ backgroundColor: 'grey', padding: "5px" }}>
      WeatherBot
        <img id="image"

          // onClick={() => setLightMode(prevMode => !prevMode)}
          // src={lightMode ? { volume } : { volume }}
          src={volume}
          onClick={()=>"hello"}
        />
    </div>
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "video",
      widgetFunc: (props) => <VideoPlayer {...props} />,
    },
    {
      widgetName: "weatherCard",
      widgetFunc: (props) => <WeatherCard {...props} />,
    },
    
  ],
};

export default config;

