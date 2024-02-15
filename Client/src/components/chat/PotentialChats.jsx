import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const PotentialChats = () => {
  const { potentialChats } = useContext(ChatContext);
  console.log("PotentialChats : ", potentialChats);
  return <>Start Chats</>;
};

export default PotentialChats;
