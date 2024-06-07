"use client";

import { List } from "@/components/list";
import { Typography } from "@/components/typography";
import { AppointmentProps, eventData } from "@/data/event";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

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
        styles="my-5"
        size="3xl"
      />
      <Typography
        variant={"h1"}
        text={data.name}
        styles="text-3xl text-center"
      />
      <main className="w-full flex items-center flex-col">
        <div className="w-full flex items-center justify-between px-2 mt-5 mb-3">
          <h1 className="p-1 border-2 border-dashed border-gray-300 text-sm rounded-md">
            Nomes
          </h1>
          <h1 className="p-1 border-2 border-dashed border-gray-300 text-sm rounded-md">
            Pres Confirmadas
          </h1>
        </div>
        <div className="w-full flex flex-col gap-1 px-2">
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