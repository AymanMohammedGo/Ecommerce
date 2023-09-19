import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/images/logo1-01.png";
const Chat = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+963947263045"
      accountName="CompanyAM"
      statusMessage="يتم الرد عادة في غضون ساعة واحدة"
      chatMessage={`مرحبا! 🤝 \nكيف يمكنني مساعدتك ؟ `}
      allowClickAway="true"
      avatar={logo}
    />
  );
};

export default Chat;
