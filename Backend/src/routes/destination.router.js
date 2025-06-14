import express from 'express';
import { addDestination, getDestinations } from '../controller/destination.controller.js';

const router = express.Router();

router.get("/", getDestinations);
router.post("/add", addDestination);

const destinationRouter = router;
export default destinationRouter;