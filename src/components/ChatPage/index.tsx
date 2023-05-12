import Image from "next/image";
import React from "react";

export type ChatPageProps = {
  img: string;
  name: string;
  count?: number;
  time?: string;
};

const ChatPage = ({
  img = "",
  name = "",
  count = 0,
  time = "09:58",
}: ChatPageProps) => {
  return (
    <div className="flex justify-between w-full gap-2 shadow-sm">
      <Image
        src={img}
        alt="Imagem de Perfil"
        width={50}
        height={50}
        className="rounded-full w-14 h-14"
      />
      <div className="flex flex-col justify-center flex-1 w-full gap-1 truncate">
        <span className="font-semibold">{name}</span>
        <p className="truncate">
          Lorem ipsum dolor sit ametsdasddfsdfasdfsadfsdf
        </p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span>{time}</span>
        {count > 0 && (
          <span className="font-semibold text-center text-white bg-green-800 rounded-full aspect-square">
            {count}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
