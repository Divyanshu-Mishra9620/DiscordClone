import { Hono } from "hono";
import {
  getAllUsers,
  getUser,
  editUser,
  deleteUser,
  joinServer,
  leaveServer,
} from "../controllers/userController.ts";

export const userRouter = new Hono();

userRouter.get("/all-user-detail", getAllUsers);
userRouter.get("/user-detail/:id", getUser);
userRouter.put("/user-detail/:id", editUser);
userRouter.delete("/user-detail/:id", deleteUser);
userRouter.put("/join-server/:id", joinServer);
userRouter.put("/leave-server/:id", leaveServer);
