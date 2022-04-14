import axios from 'axios';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log("User Message", message);
    const lowercase = message.toLowerCase();
    
    // if (lowercase.includes("quiz")) {
    //   this.actionProvider.quiz();
    // }
    // if (lowercase.includes("video")) {
    //   this.actionProvider.video();
    // }
    // if (lowercase.includes("weather")) {
    //   this.actionProvider.weather();
    // }
      const data = {
        "languageCode":"en",
        "queryText":message,
        "sessionId":"121212213"
    } 
    axios.post('http://localhost:3000/dialogflow',data)
        .then(response =>{
            console.log("Frontend:",response.data);
            // console.log("response:",response)
            // console.log("data->query",data.queryText);
            // if(data.queryText=="tomorrow")
            // {
            //   const temp1=response.data.fulfillmentMessages[1].payload.fields.richContent;
            //   console.log("Inside Temp",temp1);
            //   this.actionProvider.botMessage(response.data.fulfillmentMessages[1].payload.richContent[0][0].options[0].text); 
            // }
            // else
            this.actionProvider.botMessage(response.data.fulfillmentText);
            console.log("Fulfillment message:",response.data.fulfillmentMessages);
     
        }).catch((error) => {
          console.log(error)
      });

  }
}

export default MessageParser;

