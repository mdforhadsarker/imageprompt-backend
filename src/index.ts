import express from "express";
import cors from "cors";
import imageCardRoutes from "./routes/imageCards";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/imagecards", imageCardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
