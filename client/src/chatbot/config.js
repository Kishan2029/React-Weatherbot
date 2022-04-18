import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import volume from "../asset/volumeOn.png"
import muteVolume from "../asset/muteVolume.png"
import Options from "../component/options/options"
import VideoPlayer from "../component/videoPlayer/videoPlayer";
import WeatherCard from "../component/weatherCard/weatherCard";
// const [lightMode, setLightMode ] = useState(false)

// const config = () => {
//   return
//   {
//       initialMessages: [
//         createChatBotMessage("Hello! I am your weather assistant. How can I help ?")
//       ],
   
//         customComponents: {
//       // Replaces the default header

//       header: () => <div style={{ backgroundColor: 'grey', padding: "5px" }}>
//         WeatherBot
//         <img id="image"
//           // onClick={() => setLightMode(prevMode => !prevMode)}
//           // src={lightMode ? { volume } : { muteVolume }}
//           src={volume}
//           onClick={() => "hello"}
//         />
//       </div>
//     },

//     widgets: [
//       {
//         widgetName: "options",
//         widgetFunc: (props) => <Options {...props} />,
//       },
//       {
//         widgetName: "video",
//         widgetFunc: (props) => <VideoPlayer {...props} />,
//       },
//       {
//         widgetName: "weatherCard",
//         widgetFunc: (props) => <WeatherCard {...props} />,
//         props: {
//           city: "Bombay",
//           temp: 35,
//           date: new Date().toDateString(),
//           weather_desc: "Cloudy",
//           weather_imgurl: "client/src/asset/cloud.jpeg"
//         }
//       }

//     ]
    
//   }


// }



const config =  {
  
    initialMessages: [
      createChatBotMessage("Hello! I am your weather assistant. How can I help ?"),
    ],
   
     customComponents: {
      // Replaces the default header

      header: () => <div style={{ backgroundColor: 'grey', padding: "5px" }}>
        WeatherBot
        <img id="image"
          // onClick={() => setLightMode(prevMode => !prevMode)}
          // src={lightMode ? { volume } : { muteVolume }}
          src={volume}
          onClick={() => "hello"}
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
        props: {
          city: "Bombay",
          temp: 35,
          date: new Date().toDateString(),
          weather_desc: "Cloudy",
          weather_imgurl: "client/src/asset/cloud.jpeg"
        }
      }

    ]
  
};
export default config;

