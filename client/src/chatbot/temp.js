const getConfig = () => {
  return {
     initialMessages: [createChatbotMessage("Hi")],
     state: {
          authStatus: appState,
          pageName: appState
     },
widgets: [
    {
       widget: (props) => <Options {...props} />,
       widgetName: "options",
       mapStateToProps: ["pageName"]
    }
]
  }
}