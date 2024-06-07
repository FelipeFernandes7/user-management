export type User = {
  id: string;
  name: string;
  presence: boolean;
  payed: boolean;
  amountPaid: number;
  givenUp: boolean;
  payed_at: Date;
};

export type AppointmentProps = {
  id: string;
  name: string;
  presence: boolean;
  date: Date;
  time: Date;
  users: User[];
};

export const eventData: AppointmentProps[] = [
  {
    id: "event-1",
    name: "React & TypeScript Conference",
    presence: true,
    time: new Date("2024-06-01T08:00:00"),
    date: new Date("2024-06-01"),
    users: [
      {
        id: "user-1",
        name: "Alice Johnson",
        presence: true,
        payed: true,
        amountPaid: 150,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-2",
        name: "Bob Smith",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
      {
        id: "user-3",
        name: "Charlie Brown",
        presence: true,
        payed: true,
        amountPaid: 200,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-4",
        name: "Diana Prince",
        presence: true,
        payed: true,
        amountPaid: 180,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-5",
        name: "Edward Cullen",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
      {
        id: "user-6",
        name: "Fiona Gallagher",
        presence: true,
        payed: true,
        amountPaid: 160,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-7",
        name: "George Harrison",
        presence: true,
        payed: true,
        amountPaid: 170,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-8",
        name: "Hannah Montana",
        presence: false,
        payed: false,
        amountPaid: 120,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-9",
        name: "Ian Malcolm",
        presence: true,
        payed: true,
        amountPaid: 190,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-10",
        name: "Jack Sparrow",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
    ],
  },
  {
    id: "event-2",
    name: "React & Shopfy conference",
    presence: true,
    time: new Date("2024-06-01T08:00:00"),
    date: new Date("2024-06-01"),
    users: [
      {
        id: "user-1",
        name: "Alice Johnson",
        presence: true,
        payed: true,
        amountPaid: 150,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-2",
        name: "Bob Smith",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
      {
        id: "user-3",
        name: "Charlie Brown",
        presence: true,
        payed: true,
        amountPaid: 200,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-4",
        name: "Diana Prince",
        presence: true,
        payed: true,
        amountPaid: 180,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-5",
        name: "Edward Cullen",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
      {
        id: "user-6",
        name: "Fiona Gallagher",
        presence: true,
        payed: true,
        amountPaid: 160,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-7",
        name: "George Harrison",
        presence: true,
        payed: true,
        amountPaid: 170,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-8",
        name: "Hannah Montana",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
      {
        id: "user-9",
        name: "Ian Malcolm",
        presence: true,
        payed: true,
        amountPaid: 190,
        givenUp: false,
        payed_at: new Date(),
      },
      {
        id: "user-10",
        name: "Jack Sparrow",
        presence: false,
        payed: false,
        amountPaid: 0,
        givenUp: true,
        payed_at: new Date(),
      },
    ],
  },
];
