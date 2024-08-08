import { ArrowRight } from "lucide-react";
import amaLogo from "../../assets/ama-logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";

export const CreateRoom = () => {
  const navigate = useNavigate();

  const handleCreateRoom = (data: FormData) => {
    const theme = data.get('theme')?.toString();

    console.log(theme);
    

    navigate('/room/123');
  };
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10" />
        <p className="leading-relaxed text-zinc-300 text-center">
          Crie uma sala pública de AMA (Ask Me Anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>

        <form
          action={handleCreateRoom}
          className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 focus-within:ring-1"
        >
          <input
            type="text"
            name="theme"
            placeholder="Nome da sala"
            className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
            autoComplete="off"
          />
          <Button.Root type="submit">
            Criar sala
            <Button.Icon Icon={ArrowRight} />
          </Button.Root>
        </form>
      </div>
    </main>
  );
};
