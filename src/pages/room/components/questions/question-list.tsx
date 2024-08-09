import { useSuspenseQuery } from "@tanstack/react-query";
import { OlHTMLAttributes, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { getRoomMessages } from "../../services/get-room-mesages";
import { Question } from "./question";
import { useMessagesWebSockets } from "../../../../hooks/use-messages-web-socket";

type QuestionListProps = OlHTMLAttributes<HTMLOListElement>;

export const QuestionList = ({ ...props }: QuestionListProps) => {
  const { roomId } = useParams();
  const { data, error } = useSuspenseQuery({
    queryKey: ["question-messages", roomId],
    queryFn: () => getRoomMessages({ roomId: roomId! }),
  });

  if (!roomId) {
    throw new Error("Room ID is required");
  }

  useMessagesWebSockets({ roomId });

  useEffect(() => {
    if (error) {
      toast.error("Falha ao carregar perguntas, tente novamente");
    }
  }, [error]);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080/subscribe/${roomId}`);
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
    };

    return () => {
      ws.close();
    };
  }, [roomId]);

  const sortedMessages = data.messages.sort((a, b) => {
    return b.reaction_count - a.reaction_count;
  });

  return (
    <ol className="list-decimal list-outside px-3 space-y-8" {...props}>
      {sortedMessages?.map((question) => (
        <Question
          key={question.id}
          question={question.message}
          answered={question.answered}
          amountOfReactions={question.reaction_count}
          id={question.id}
        />
      ))}
    </ol>
  );
};
