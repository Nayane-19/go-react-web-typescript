type CreateMessageReactionRequest = {
  roomId: string;
  messageId: string;
};

export const createMessageReaction = async ({
  roomId,
  messageId,
}: CreateMessageReactionRequest) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create room");
  }
};
