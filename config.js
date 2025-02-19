const config = {
    chatbotUrl: "https://udify.app/chatbot/qZdKWVurnliDFEEK",
    iframeWidth: "100%",
    iframeHeight: "700px",
    iframeMinHeight: "700px",
    pageTitle: "欢迎使用我们的聊天机器人",
    headerText: "请与我们的机器人进行对话，获取帮助与支持。",
    footerText: "© 2025 聊天机器人平台"
  };
  
  window.onload = function() {
    document.title = config.pageTitle;
    document.querySelector(".header h1").textContent = config.pageTitle;
    document.querySelector(".header p").textContent = config.headerText;
    document.querySelector(".footer p").textContent = config.footerText;
  
    const iframe = document.getElementById('chatbot-frame');
    iframe.src = config.chatbotUrl;
    iframe.style.width = config.iframeWidth;
    iframe.style.height = config.iframeHeight;
    iframe.style.minHeight = config.iframeMinHeight;
  };
  