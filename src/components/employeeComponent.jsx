import Axios from "axios";
import { useEffect, useState } from "react";

export default function EmployeeComponent(props) {
    
    var [employee, setEmployee] = useState({});
    
    useEffect(() => {
        var empId = props.match.params.employeeId;
        Axios.get("http://localhost:3000/employees/" + empId).then((reponse) => {
            setEmployee(reponse.data);
        })
    }, []);
    
    function deleteEmployee(empId) {
        Axios.delete("http://localhost:3000/employees/" + empId).then((reponse) => {
            alert("Employee Deleted....")
            props.history.push("/");
        })
    }
    
    return (
        <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
            <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Employee Id: {employee.id}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" className="card-link" value="Delete" onClick={() => deleteEmployee(employee.id)}  />
            </div>
        </div>
    )
}