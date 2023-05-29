import Joi from "joi"

class MeetingModel{
    meetingId:number
    developmentGroupId:number
    beginningTime:string
    endTime:string
    description:string
    meetingRoom:string

    public constructor(meeting:MeetingModel){
        this.meetingId=meeting.meetingId
        this.developmentGroupId=meeting.developmentGroupId
        this.beginningTime=meeting.beginningTime
        this.endTime=meeting.endTime
        this.description=meeting.description
        this.meetingRoom=meeting.meetingRoom
    }

    public  static validationSchema=Joi.object({
        meetingId:Joi.number().required().positive().optional().integer(),
        developmentGroupId:Joi.number().required().positive().optional().integer(),
        beginningTime:Joi.date().iso().required(),
        endTime:Joi.date().iso().required(),
        description:Joi.string().required(),
        meetingRoom:Joi.string().required()

    })

    public validate():string{
      const result=MeetingModel.validationSchema.validate(this)
      return result.error?.message
    }
}


export default MeetingModel