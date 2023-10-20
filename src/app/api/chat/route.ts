import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, streamToResponse, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(requset: Request) {
  const { messages } = await requset.json();

  // create a autocompletion
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "you are a helpfull assistance, you explain the response in simple and short concept",
      },
      ...messages,
    ],
  });

  // create a stream of data form openai
  const stream = await OpenAIStream(response);

  // send the stream of data to user , frontend part
  return new StreamingTextResponse(stream);
}
