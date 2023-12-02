// server.js

import express from "express";
import usersRouter from "./src/pages/api/users.js"; // Beachte den Pfad
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 3001;

//app.use("/src/pages/api/users.js", usersRouter);

const prisma = new PrismaClient();

app.get("src/pages/api/users.js", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Willkommen auf der Startseite!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
