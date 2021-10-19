import express from "express";
import Img from "../models/imageModel.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  const data = await Img.find();

  res.json(data);
});


router.post("/add", async (req, res) => {
  const { url } = req.body;

  if (url) {
    const img = new Img({
      url,
    });

    const newImg = await img.save();

    res.json(newImg);
  } else {
    res.status(404).json({ message: "pls provide url" });
  }


});


export const imgRouter = router;