import React, { FC } from "react";
import { useChat, Message } from "ai/react";

interface ChatComponentProps {}

const ChatComponent: FC<ChatComponentProps> = (props) => {
  const { input, handleSubmit, messages, handleInputChange } = useChat();
  console.log(input);
  console.log(messages);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold my-10 font-serif">
        Chat Application
      </h1>
      <div className="text-center w-screen py-10 shadow-slate-200 shadow-md border rounded-2xl ">
        <p className="text-center text-gray-300 font-bold"> AI RESPONSE</p>
        {messages.map((message: Message) => {
          return (
            <div key={message.id}>
              {message.role === "assistant" ? (
                <h1 className="font-semibold ">GPT-3</h1>
              ) : (
                <h1 className="font-semibold ">User : </h1>
              )}
              {message.content
                .split("/n")
                .map((textBlock: string, index: number) => {
                  if (textBlock === "") {
                    return <p key={message.id + index}>&nbsp;</p>;
                  } else {
                    return <p key={message.id + index}>{textBlock}</p>;
                  }
                })}
            </div>
          );
        })}
      </div>
      <form className="mt-10 " onSubmit={handleSubmit}>
        <textarea
          className="text-center w-screen pt-4  shadow-slate-200 shadow-md border rounded-2xl placeholder-slate-400 placeholder:font-semibold"
          placeholder="Type Your Request Here..... "
          value={input}
          onChange={handleInputChange}
        ></textarea>
        <div className="h-10"></div>
        <button className="w-auto h-10 px-20 bg-green-500 hover:shadow-gray-400  rounded-lg shadow-lg text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
