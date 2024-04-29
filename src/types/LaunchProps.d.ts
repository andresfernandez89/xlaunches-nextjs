import { type Launch, type Links, type Patch } from "./LaunchApi";

export interface LaunchCardTypes {
  id: Launch["id"];
  name: Launch["name"];
  flightNumber: Launch["flight_number"];
  status: Launch["success"];
  image: Patch["small"];
  date: Launch["date_utc"];
  webcast: Links["webcast"];
  wikipedia: Links["wikipedia"];
}
