import express from 'express';
import { addPackage, getPackages } from '../controller/package.controller.js';

const router = express.Router();

router.get("/top-selling", getPackages);
router.post("/add", addPackage);

const packageRouter = router;
export default packageRouter;