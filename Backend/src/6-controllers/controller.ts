import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/MeetingsLogic";
import MeetingsLogic from "../5-logic/MeetingsLogic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/_____
router.get("/developmentsgroup", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const developmentsgroup=await MeetingsLogic.getAllDevelopmentGroups()
        response.json(developmentsgroup)

    }
    catch (err: any) {
        next(err);
    }
});

export default router;