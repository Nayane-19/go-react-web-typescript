import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-zinc-50">
      <div className="text-center p-6 bg-zinc-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-orange-400">
          Algo de errado aconteceu
        </h1>
        <p className="mt-2">Error ao carregar informações, tente novamente.</p>
        <div className="mt-4 flex items-center justify-center">
          <Button.Root onClick={handleGoBack}>Retornar</Button.Root>
        </div>
      </div>
    </div>
  );
};
