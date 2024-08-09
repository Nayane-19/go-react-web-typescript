import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import amaLogo from "../../assets/ama-logo.svg";
import { Form } from "../../components/form/form";
import { createRooom } from "./services/create-room";

export const CreateRoom = () => {
  const navigate = useNavigate();

  const handleCreateRoom = async (data: FormData) => {
    const theme = data.get("theme")?.toString();

    if (!theme) return;

    try {
      const { roomId } = await createRooom({ theme });

      navigate(`/room/${roomId}`);
    } catch (error) {
      console.error(error);
      toast.error("Falha ao criar sala, tente novamente");
    }
  };

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10" />
        <p className="leading-relaxed text-zinc-300 text-center">
          Crie uma sala pública de AMA (Ask Me Anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>
        <Form.Root action={handleCreateRoom}>
          <Form.Input name="theme" placeholder="Nome da sala" required />
          <Form.SubmitButton>Criar sala</Form.SubmitButton>
        </Form.Root>
      </div>
    </main>
  );
};
