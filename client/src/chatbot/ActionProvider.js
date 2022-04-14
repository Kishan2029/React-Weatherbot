// import { useSpeechSynthesis } from 'react-speech-kit';
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    quiz = () => {
      const message = this.createChatBotMessage(
        "Fantastic. Here are your option",
        {
          widget: "options",
        }
      );
  
      this.addMessageToState(message);
    };

    video = () => {
      // console.log("Inside video:")
      const message = this.createChatBotMessage(
        "Fantastic. Here is the video you suggested",
        {
          widget: "video",
        }
      );
  
      this.addMessageToState(message);
    };
    weather = () => {
      console.log("Inside weather:")
      const message = this.createChatBotMessage(
        "Here is your wether card",
        {
          widget: "weatherCard",
        }
      );
  
      this.addMessageToState(message);
    };

    botMessage = (message) => {
      console.log("Bot message:",message)
      const bot = this.createChatBotMessage(message);
      this.addMessageToState(bot);
    }; 
  
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
      // console.log(message);
    };
  }
  
  export default ActionProvider;