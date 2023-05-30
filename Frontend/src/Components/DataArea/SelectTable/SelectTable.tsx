import DevelopmentsGroup from "../../../Models/DevelopmentsGroup-model";
import "./SelectTable.css";

interface SelectTableProps {
	developmentsGroup:DevelopmentsGroup[]
}

function SelectTable(props: SelectTableProps): JSX.Element {
    return (
        <div className="SelectTable">
			    <select defaultValue="" >
                <option disabled value="">select..</option> 
                { props.developmentsGroup.map(d=>
                    <option key={d.developmentsGroupId} value={d.developmentsGroupId}>{d.developmentsGroupName}</option>
                    )}
            </select>
        </div>
    );
}

export default SelectTable;
