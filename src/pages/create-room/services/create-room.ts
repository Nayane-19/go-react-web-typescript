type CreateRoomRequest = {
  theme: string;
};

type CreateRoomResponse = {
  roomId: string;
};

export const createRooom = async ({
  theme,
}: CreateRoomRequest): Promise<CreateRoomResponse> => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme }),
  });

  if (!response.ok) {
    throw new Error("Failed to create room");
  }

  const data: { id: string } = await response.json();

  return { roomId: data.id };
};
