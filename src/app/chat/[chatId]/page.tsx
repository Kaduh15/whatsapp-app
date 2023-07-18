import { BsEmojiSmileFill } from 'react-icons/bs'
import { GoPaperclip } from 'react-icons/go'
import { IoCamera, IoPaperPlane } from 'react-icons/io5'

type ChatIdProps = {
  params: { chatId: string }
}

export default async function ChatId({ params }: ChatIdProps) {
  return (
    <div className="flex flex-1 flex-col justify-between bg-stone-300 p-3">
      <div className="flex-1">chat: {params.chatId}</div>
      <div className="flex items-center justify-center gap-5 rounded-full bg-white p-4">
        <BsEmojiSmileFill className="h-5 w-5" />
        <input
          type="text"
          className="flex-1 border-b-2 border-white outline-none transition-all focus:border-neutral-400"
        />
        <GoPaperclip className="h-5 w-5" />
        <IoCamera className="h-5 w-5" />
        <IoPaperPlane className="h-5 w-5" />
      </div>
    </div>
  )
}
