import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { GetRoomMessagesResponse } from "../pages/room/services/get-room-mesages";

interface useMessagesWebSocketsParams {
  roomId: string;
}

type WebhookMessage =
  | { kind: "message_created"; value: { id: string; message: string } }
  | { kind: "message_answered"; value: { id: string } }
  | { kind: "message_reaction_increased"; value: { id: string; count: number } }
  | {
      kind: "message_reaction_decreased";
      value: { id: string; count: number };
    };

export const useMessagesWebSockets = ({
  roomId,
}: useMessagesWebSocketsParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8080/subscribe/${roomId}`);

    ws.onopen = () => {
      console.log("Websocket connected!");
    };

    ws.onmessage = (event) => {
      const data: WebhookMessage = JSON.parse(event.data);
      console.log(data);

      switch (data.kind) {
        case "message_created":
          queryClient.setQueryData<GetRoomMessagesResponse>(
            ["question-messages", roomId],
            (state) => {
              return {
                messages: [
                  ...(state?.messages ?? []),
                  {
                    id: data.value.id,
                    message: data.value.message,
                    reaction_count: 0,
                    answered: false,
                  },
                ],
              };
            }
          );

          break;
        case "message_answered":
          queryClient.setQueryData<GetRoomMessagesResponse>(
            ["question-messages", roomId],
            (state) => {
              if (!state) {
                return undefined;
              }

              return {
                messages: state.messages.map((item) => {
                  if (item.id === data.value.id) {
                    return { ...item, answered: true };
                  }

                  return item;
                }),
              };
            }
          );

          break;
        case "message_reaction_increased":
        case "message_reaction_decreased":
          queryClient.setQueryData<GetRoomMessagesResponse>(
            ["question-messages", roomId],
            (state) => {
              if (!state) {
                return undefined;
              }

              return {
                messages: state.messages.map((item) => {
                  if (item.id === data.value.id) {
                    return { ...item, reaction_count: data.value.count };
                  }

                  return item;
                }),
              };
            }
          );

          break;
      }
    };

    return () => {
      ws.close();
    };
  }, [roomId, queryClient]);
};
