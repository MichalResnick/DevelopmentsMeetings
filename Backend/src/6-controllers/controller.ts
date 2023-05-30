import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/MeetingsLogic";
import MeetingsLogic from "../5-logic/MeetingsLogic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/_____
router.get("/developments-group", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const developmentsgroup=await MeetingsLogic.getAllDevelopmentGroups()
        response.json(developmentsgroup)

    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meetings-by-developments-group/:developmentsGroupId", async (request: Request, response: Response, next: NextFunction) => {
    try {
       const developmentsGroupId=+request.params.developmentsGroupId
       console.log("id"+developmentsGroupId)
       const meetings=await MeetingsLogic.getAllMeetingsByDevelopmentGroup(developmentsGroupId)
       response.json(meetings)

    }
    catch (err: any) {
        next(err);
    }
});
export default router;