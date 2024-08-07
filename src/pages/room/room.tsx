import { useParams } from "react-router-dom"

export const Room = () => {
  const { roomId } = useParams()
  return (
    <div>
      {roomId}
    </div>
  )
}