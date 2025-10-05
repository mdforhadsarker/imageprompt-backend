import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getImageCards = async (req: Request, res: Response) => {
  const cards = await prisma.imageCard.findMany();
  res.json(cards);
};

export const createImageCard = async (req: Request, res: Response) => {
  const { image, prompt, category } = req.body;
  const newCard = await prisma.imageCard.create({
    data: { image, prompt, category },
  });
  res.json(newCard);
};

export const updateImageCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { image, prompt, category } = req.body;
  const updated = await prisma.imageCard.update({
    where: { id: Number(id) },
    data: { image, prompt, category },
  });
  res.json(updated);
};

export const deleteImageCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await prisma.imageCard.delete({
    where: { id: Number(id) },
  });
  res.json(deleted);
};
