import Image from "next/image";
import ChatComponent from "./components/chatComponent";

export default function Home() {
  return (
    <main className="flex text-center justify-center">
      <ChatComponent />
    </main>
  );
}
