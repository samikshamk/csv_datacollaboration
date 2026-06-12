import { Router } from "express";
import { getRecords, searchRecords, getConflicts } from "../controllers/recordController";

const router = Router();

router.get("/", getRecords);
router.get("/search", searchRecords);
router.get("/conflicts", getConflicts);

export default router;