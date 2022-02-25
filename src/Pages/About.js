import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <Link to="/">Home</Link>
            <div className="abouts-container">
                <h4>About us page</h4>
                <p>This is a tasks management web application built using react JS.</p>
                <p>It will give a basic idea about how react js handle components and how you can use to contact the backend API and send requests to it using fetch api.</p>
                <p>It includes a demonstration for the following topics: </p>
                <ul style={{ padding: 15, }}>
                    <li>Routing</li>
                    <li>Reusable components</li>
                    <li>Backend requests using fetch</li>
                    <li>Add, Delete, Update methods</li>
                    <li>Basic state management</li>
                    <li>Dynamic css styles</li>
                </ul>
            </div>
        </>
    )
}

export default About