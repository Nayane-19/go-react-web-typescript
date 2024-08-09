type GetRoomMessagesRequest = {
  roomId: string;
};

type GetRoomMessagesSchema = {
  id: string;
  roomId?: string;
  message: string;
  reaction_count: number;
  answered: boolean;
};

export type GetRoomMessagesResponse = {
  messages: GetRoomMessagesSchema[];
};

export const getRoomMessages = async ({
  roomId,
}: GetRoomMessagesRequest): Promise<GetRoomMessagesResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create room");
  }

  const data: GetRoomMessagesSchema[] = await response.json();

  return {
    messages: data.map((item) => {
      return {
        ...item,
      };
    }),
  };
};
