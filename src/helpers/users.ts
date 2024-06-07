import { AppointmentProps, User, eventData } from "@/data/event";

export function filterGivenUpUsers(events: AppointmentProps[]): User[] {
  return events.flatMap((event) => event.users.filter((user) => user.givenUp));
}

export function filterPayedUsers(events: AppointmentProps[]): User[] {
  return events.flatMap((event) => event.users.filter((user) => user.payed));
}

export const usersWhoGivenUp = filterGivenUpUsers(eventData);
export const usersWhoPayed = filterPayedUsers(eventData);
