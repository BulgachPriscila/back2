import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {});
router.get("/:id", async (req, res) => {});
router.post("/", async(req, res) =>{});
router.delete("/:id", async(req, res) => {});
router.put("/:id", async(req, res) => {});

export default router