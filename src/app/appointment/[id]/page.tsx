"use client";

import { List } from "@/components/list";
import { Typography } from "@/components/typography";
import { AppointmentProps, eventData } from "@/data/event";
import { usersWhoGivenUp, usersWhoPayed } from "@/helpers/users";
import { useEffect, useState } from "react";
import { FaUsers, FaUsersSlash } from "react-icons/fa6";

type Appointment = {
  params: AppointmentProps;
};
export default function Appointment({ params }: Appointment) {
  const [data, setData] = useState<AppointmentProps>();
  const fetchAppointment = async (id: string): Promise<AppointmentProps> => {
    const data = eventData.find((event) => event.id === id);
    if (!data) {
      throw new Error(`Evento com ID ${id} não encontrado.`);
    }
    setData(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  };
  const { id } = params;
  useEffect(() => {
    fetchAppointment(id);
  }, [id]);

  if (!data) {
    return (
      <>
        <h1>Nenhum Registro encontrado</h1>
      </>
    );
  }

  return (
    <div className="w-full items-center flex flex-col">
      <Typography
        text={"Relatório do Evento"}
        variant={"strong"}
        styles="my-5 text-gray-200"
        size="lg"
      />
      <Typography
        variant={"h1"}
        text={data.name}
        styles="text-3xl text-center text-white shadow-md"
      />
      <main className="w-full flex items-center flex-col">
        <div className="w-full flex items-center justify-between px-4 md:px-8 mt-5 mb-3">
          <h1 className="text-sm ">Nomes</h1>
          <div className="flex items-center gap-2">
            <span className="border-2 p-2 px-2 gap-2 flex items-center border-red-500 text-red-500 text-sm rounded-3xl">
              <FaUsersSlash /> {usersWhoGivenUp.length}
            </span>
            <span className="border-2 p-2 px-2 gap-2 flex items-center border-emerald-400 text-emerald-400 text-sm rounded-3xl">
              <FaUsers />
              {usersWhoPayed.length}
            </span>
          </div>
          <h1 className="text-sm ">Presença</h1>
        </div>
        <div className="w-full flex flex-col items-center gap-4 px-2 md:flex-row md:justify-center md:flex-wrap">
          {data.users.map((user) => (
            <List
              key={user.id}
              payed={user.payed}
              name={user.name}
              presence={user.presence}
              givenUp={user.givenUp}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
