import Image from 'next/image'
import React from 'react'

export type ChatPageProps = {
  img: string
  name: string
  count?: number
  time?: string
}

const ChatPage = ({
  img = '',
  name = '',
  count = 0,
  time = '09:58',
}: ChatPageProps) => {
  return (
    <div className="flex w-full justify-between gap-2 shadow-sm">
      <Image
        src={img}
        alt="Imagem de Perfil"
        width={50}
        height={50}
        className="h-14 w-14 rounded-full"
      />
      <div className="flex w-full flex-1 flex-col justify-center gap-1 truncate">
        <span className="font-semibold">{name}</span>
        <p className="truncate">
          Lorem ipsum dolor sit ametsdasddfsdfasdfsadfsdf
        </p>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span>{time}</span>
        {count > 0 && (
          <span className="aspect-square rounded-full bg-green-800 text-center font-semibold text-white">
            {count}
          </span>
        )}
      </div>
    </div>
  )
}

export default ChatPage
