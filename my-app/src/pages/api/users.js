// api/users.js
import { Router } from "express";
import { getUser } from "./getUser.js";

const userrouter = Router();

userrouter.get("/", getUser);

export default userrouter;
