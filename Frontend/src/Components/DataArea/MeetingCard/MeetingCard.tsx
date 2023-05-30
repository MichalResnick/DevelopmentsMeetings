import MeetingModel from "../../../Models/Meeting-model";
import "./MeetingCard.css";

interface MeetingCardProps {
	meeting:MeetingModel
}

function MeetingCard(props: MeetingCardProps): JSX.Element {
    return (
        <div className="MeetingCard">
         <div className="card-content">
             <h3 className="card-title">Group:{props.meeting.developmentsGroupName}</h3>
             <p className="card-description">Beginning Time:{props.meeting.beginningTime}</p>
             <p className="card-description">End Time:{props.meeting.endTime}</p>
             <p className="card-description">Description: {props.meeting.description}</p>
             <p className="card-description">MeetingRoom: {props.meeting.meetingRoom}</p>
             <a href="#" className="card-link">View Details</a>
           </div>
			
        </div>
    );
}

export default MeetingCard;
