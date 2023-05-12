import ChatPage from "@/components/ChatPage";
import { randomUUID } from "crypto";

const chats = [
  {
    id: randomUUID(),
    picture: "https://randomuser.me/api/portraits/med/men/75.jpg",
    name: {
      first: "John",
      last: "Doe",
    },
    count: 0,
  },
  {
    id: randomUUID(),
    picture: "https://randomuser.me/api/portraits/med/men/76.jpg",
    name: {
      first: "Peter",
      last: "Parker",
    },
    count: 4,
  },
  {
    id: randomUUID(),
    picture: `https://randomuser.me/api/portraits/med/women/65.jpg`,
    name: {
      first: "Mary",
      last: "Jane",
    },
    count: 3,
    time: "10:00",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full px-3 pt-6 gap-7 ">
      {chats &&
        chats.map((user) => (
          <ChatPage
            key={user.id}
            img={user.picture}
            name={`${user.name.first} ${user.name.last}`}
            count={user.count}
            time={user?.time}
          />
        ))}
    </main>
  );
}
