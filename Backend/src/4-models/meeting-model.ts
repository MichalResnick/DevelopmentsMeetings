import Joi from "joi"

class MeetingModel{
    public meetingId:number
    public developmentsGroupId:number
    public beginningTime:string
    public endTime:string
    public description:string
    public meetingRoom:string

    public constructor(meeting:MeetingModel){
        this.meetingId=meeting.meetingId
        this.developmentsGroupId=meeting.developmentsGroupId
        this.beginningTime=meeting.beginningTime
        this.endTime=meeting.endTime
        this.description=meeting.description
        this.meetingRoom=meeting.meetingRoom
    }

    public  static validationSchema=Joi.object({
        meetingId:Joi.number().required().positive().optional().integer(),
        developmentsGroupId:Joi.number().required().positive().optional().integer(),
        beginningTime:Joi.date().required(),
        endTime:Joi.date().required(),
        description:Joi.string().required(),
        meetingRoom:Joi.string().required()

    })

    public validate():string{
      const result=MeetingModel.validationSchema.validate(this)
      return result.error?.message
    }
}


export default MeetingModel