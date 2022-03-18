import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.post("/questions/answers", (req, res) => {});

router.get("/questions", (req, res) => {});

export default router;
