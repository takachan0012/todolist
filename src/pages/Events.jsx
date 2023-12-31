import { React, useState, useContext } from "react";
import Slide from '@mui/material/Slide';
import User from "@/components/userProfile";
import Card from "@/components/Card";
import { DispatchContext, EventsContext } from "@/utils/contex";
import NoEventHere from "@/components/NoEvents";

function EventsHere() {
    const events = useContext(EventsContext)
    const dispatch = useContext(DispatchContext);
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    const [completed, setCompleted] = useState(true);
    let selectedEvents;
    if (completed) {
        selectedEvents = events.filter(data => data.isCompleted === true)
    } else {
        selectedEvents = events.filter(data => data.isCompleted === false)
    }
    const isThereEvents = selectedEvents.length > 0;
    let content;
    if (isThereEvents) {
        content = <ul className="flex flex-direction-column">{selectedEvents.map(todo => <Card key={todo.id} data={todo} onChange={handleOnChange} />)}</ul>
    } else {
        content = <NoEventHere />
    }
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="sticky_top">
                    <User />
                </div>
                <div className="button_actions sticky_top">
                    <div>
                        <button className={completed ? "button_actions_active" : null} onClick={() => setCompleted(true)}>Completed</button>
                        <button className={completed ? null : "button_actions_active"} onClick={() => setCompleted(false)}>Uncompleted</button>
                    </div>
                </div>
                <div className="container_todos_by_actions">
                    <div className="card_events">
                        {content}
                    </div>
                </div>
            </section>
        </Slide>
    )
}

export default EventsHere;