import React , { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";


import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = DragAndDrop(Calendar);

class MyCalendar extends Component {
    constructor() {
        super();
        const now = new Date();
        const events = [
            {
                id: 0,
                title: "the first",
                allDay: true,
                start: new Date(2020, 9, 5),
                end: new Date(2020, 9, 5)
            },
            {
                id: 1,
                title: "the second",
                allDay: true,
                start: new Date(2020, 8, 12),
                end: new Date(2020, 8, 12)
            },
            {
                id: 2,
                title: "the third",
                allDay: true,
                start: new Date(2020, 7, 5),
                end: new Date(2020, 7, 5)
            }
        ]
        
        this.state = {
            events
        };
    }
    
    
      onEventResize = (data) => {
        const { start, end } = data;
    
        this.setState((state) => {
          state.events[0].start = start;
          state.events[0].end = end;
          return { events: state.events };
        });
      };
    
      onEventDrop = (data) => {
        console.log(data);
      };
    
      render() {
        return (
          <div className="hero-image">
          <div className="container pt-3 pb-3">  
          <div className="col-lg-12 col-md-12 col-sm-12 bg-white pt-3 pb-3">
            <DnDCalendar
              selectable
              defaultDate={moment().toDate()}
              defaultView="month"
              events={this.state.events}
              localizer={localizer}
              onEventDrop={this.onEventDrop}
              onEventResize={this.onEventResize}
              resizable
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={this.handleSelect}
              style={{ height: "100vh" }}
            />
          </div>
          </div>
          </div>
        );
      }
    }
    

export default MyCalendar;