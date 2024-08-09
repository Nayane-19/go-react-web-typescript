type RemoveMessageReactionRequest = {
  roomId: string;
  messageId: string;
};

export const removeMessageReaction = async ({
  roomId,
  messageId,
}: RemoveMessageReactionRequest) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create room");
  }
};
