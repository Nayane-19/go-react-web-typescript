import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Room } from "./pages/room/room";
import { CreateRoom } from "./pages/create-room/create-room";
import { ErrorPage } from "./pages/error-page/error-page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />,
    ErrorBoundary: () => <ErrorPage />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
    ErrorBoundary: () => <ErrorPage />,
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster invert richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
