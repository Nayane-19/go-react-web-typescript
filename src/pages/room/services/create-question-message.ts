type CreateQuestionMessageRequest = {
  roomId: string;
  message: string;
};

type CreateQuestionMessageResponse = {
  messageId: string;
};

export const createQuestionMessage = async ({
  roomId,
  message,
}: CreateQuestionMessageRequest): Promise<CreateQuestionMessageResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create room");
  }

  const data: { id: string } = await response.json();

  return { messageId: data.id };
};
