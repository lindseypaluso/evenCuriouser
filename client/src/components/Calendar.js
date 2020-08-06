import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AssignmentsAPI from "../utils/API-assignments";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    due: [],
  };

  convertDate = (date) => {
    return moment.utc(date).toDate();
  };

  componentDidMount() {
    AssignmentsAPI.getAssignments().then(res => {
      const events = res.data.map((date) => ({
        title: date.name,
        start: date.due_date,
        end: date.due_date,
        allDay: true,
      }));
      this.setState({
        due: events
      });
    });
  }

  render() {
    const { due } = this.state;

    return (
      <div className="hero-image">
        <div className="container pt-3 pb-3">
          <div className="col-lg-12 col-md-12 col-sm-12 bg-white pt-3 pb-3">
            <Calendar
              defaultDate={moment().toDate()}
              defaultView="month"
              events={due}
              localizer={localizer}
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyCalendar;
