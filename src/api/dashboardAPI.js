import sessionCalendar from "@/fakeData/sessionCalendar.json";

/**
 *
 *   Fetches data from backend API.
 *   For the purpose of the demo the data is fetched from a JSON file and date objects are added.
 *
 * @module api/dashboardAPI
 * @returns {JSON} - the users sessions for the day.
 */
export const fetchSessions = () => {
  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };
  let hourIncrease = 1;

  for (var x in sessionCalendar) {
    if (
      Object.prototype.hasOwnProperty.call(sessionCalendar[x], "session_DT")
    ) {

      sessionCalendar[x].session_DT = new Date().addHours(hourIncrease++);
    }
  }

  return sessionCalendar;
};
