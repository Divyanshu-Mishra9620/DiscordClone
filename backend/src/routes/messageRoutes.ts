import { Hono } from "hono";
import {
  getMessagesByChannelId,
  createMessage,
  deleteMessage,
  updateMessage,
  toggleReaction,
} from "../controllers/messageController.ts";
export const messageRouter = new Hono();

messageRouter.get("/get-messages/:channelId", getMessagesByChannelId);
messageRouter.post("/create-message/:channelId", createMessage);
messageRouter.delete("/delete-message/:messageId", deleteMessage);
messageRouter.put("/update-message/:messageId", updateMessage);
messageRouter.put("/add-reaction/:messageId", toggleReaction);
