//Tabs with react-router 
import { Link } from "react-router-dom";
export default function Tabs() {
    return (
        <div style={{ marginBottom: "10px" }}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link " to="form">FORM</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="user">USER</Link>
                </li>
            </ul>
        </div>
    );
}