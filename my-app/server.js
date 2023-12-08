// server.js

import express from "express";
import userrouter from "./src/pages/api/users.js"; // Beachte den Pfad
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
//app.use(express.json());

app.use("/users", userrouter);

app.get("/", (req, res) => {
  res.send("Willkommen Startseite!!!!!!!");
});

app.get("/ping", (req, res) => {
  res.json({ message: "ping" }).status(200);
});

app.post("/api/createUser", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Verwende Prisma zum Einfügen in die Datenbank
    const result = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json({ message: "User erstellt!", user: result });
  } catch (error) {
    console.error("Fehler beim Erstellen des Benutzers:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
