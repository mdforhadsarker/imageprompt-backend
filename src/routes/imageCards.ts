import express from "express";
import {
  getImageCards,
  createImageCard,
  updateImageCard,
  deleteImageCard,
} from "../controllers/imageCardsController";

const router = express.Router();

router.get("/", getImageCards);
router.post("/", createImageCard);
router.put("/:id", updateImageCard);
router.delete("/:id", deleteImageCard);

export default router;
