import { ArrowUp } from "lucide-react";
import { useState } from "react";

import { Button } from "../../../../components/button/button";
import { useParams } from "react-router-dom";
import { createMessageReaction } from "../../services/create-message-reaction";
import { toast } from "sonner";
import { removeMessageReaction } from "../../services/remove-message-reaction";

type QuestionProps = {
  id: string;
  question: string;
  amountOfReactions: number;
  answered?: boolean;
};

export const Question = ({
  id: messageId,
  question,
  answered,
  amountOfReactions,
}: QuestionProps) => {
  const { roomId } = useParams();
  const [hasReaction, setHasReaction] = useState(false);

  if (!roomId) {
    throw new Error("Room ID not found");
  }

  const removeMessageReactionAction = async () => {
    try {
      await removeMessageReaction({ roomId, messageId });
      setHasReaction(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao remover curtida da pergunta, tente novamente");
    }
  };

  const createMessageReactionAction = async () => {
    try {
      await createMessageReaction({ roomId, messageId });
      setHasReaction(true);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao curtir pergunta, tente novamente");
    }
  };

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
    >
      {question}
      <Button.Root
        type="button"
        variant={hasReaction ? "minimal" : "opacity"}
        onClick={
          hasReaction
            ? removeMessageReactionAction
            : createMessageReactionAction
        }
      >
        Curtir pergunta ({amountOfReactions})
        <Button.Icon Icon={ArrowUp} />
      </Button.Root>
    </li>
  );
};
