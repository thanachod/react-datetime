import Project from "./Project";
import Task from "./Task";

 

export default function Desk() {


    return (
        <>
            <div className="desk">
                <div className="desk-nav">
                    <Project />
                </div>
                <div className="desk-task">
                    <Task />
                </div>
            </div>
        </>
    )
}