import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/MeetingsLogic";
import MeetingsLogic from "../5-logic/MeetingsLogic";
import MeetingModel from "../4-models/meeting-model";

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

router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
    const meeting=new MeetingModel(request.body)
    const addedMeeting=await MeetingsLogic.addMeeting(meeting)
    response.status(201).json(addedMeeting)
    
    }
    catch (err: any) {
        next(err);
    }
});

router.put("/meetings/:meetingId", async (request: Request, response: Response, next: NextFunction) => {
    try {
    request.body.meetingId=+request.params.meetingId
    const meeting=new MeetingModel(request.body)
    const updatedMeeting=await MeetingsLogic.updateMeeting(meeting)
    response.status(201).json(updatedMeeting)
    
    }
    catch (err: any) {
        next(err);
    }
});
router.delete("/meetings/:meetingId", async (request: Request, response: Response, next: NextFunction) => {
    try {
    const meetingId=+request.params.meetingId
    await MeetingsLogic.deleteMeeting(meetingId)
    response.sendStatus(204)
    
    }
    catch (err: any) {
        next(err);
    }
});
export default router;