import { useParams } from "react-router-dom";
import amaLogo from "../../assets/ama-logo.svg";
import { ArrowRight, ArrowUp, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/button/button";

export const Room = () => {
  const { roomId } = useParams();

  const handleShareRoom = () => {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.success("Link copiado para a área de transferência");
    }
  };

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
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
      <form className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
          autoComplete="off"
        />

        <Button.Root type="submit">
          Criar pergunta
          <Button.Icon Icon={ArrowRight} />
        </Button.Root>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <li className="ml-4 leading-relaxed text-zinc-100 list-item">
          Teste
          <Button.Root type="button" variant="minimal">
            Curtir pergunta (123)
            <Button.Icon Icon={ArrowUp} />
          </Button.Root>
        </li>
      </ol>
    </div>
  );
};
