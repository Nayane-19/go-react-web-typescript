import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Suspense } from "react";

import amaLogo from "../../assets/ama-logo.svg";
import { Button } from "../../components/button/button";
import { Form } from "../../components/form/form";
import { QuestionList } from "./components/questions/question-list";
import { createQuestionMessage } from "./services/create-question-message";

export const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const handleShareRoom = () => {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.success("Link copiado para a área de transferência");
    }
  };

  const handleCreateQuestion = async (data: FormData) => {
    const question = data.get("question")?.toString();

    if (!question || !roomId) return;

    try {
      await createQuestionMessage({ message: question, roomId });
    } catch (error) {
      console.error(error);
      toast.error("Falha ao enviar pergunta, tente novamente");
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <Button.Root variant="secondary" onClick={handleGoBack} type="button">
          <Button.Icon Icon={ArrowLeft} />
        </Button.Root>
        <img src={amaLogo} alt="AMA" className="h-5" />
        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{roomId}</span>
        </span>
        <Button.Root
          variant="secondary"
          onClick={handleShareRoom}
          type="button"
        >
          Compartilhar
          <Button.Icon Icon={Share2} />
        </Button.Root>
      </div>
      <div className="h-px w-full bg-zinc-900" />
      <Form.Root action={handleCreateQuestion}>
        <Form.Input
          name="question"
          placeholder="Qual a sua pergunta?"
          required
        />
        <Form.SubmitButton>Criar pergunta</Form.SubmitButton>
      </Form.Root>
      <Suspense fallback={<p>Carregando...</p>}>
        <QuestionList />
      </Suspense>
    </div>
  );
};
