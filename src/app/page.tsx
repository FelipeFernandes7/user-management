"use client";

import { Commitment } from "@/components/commitment";
import { Typography } from "@/components/typography";
import { AppointmentProps, User, eventData } from "@/data/event";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function navigateTo(id: string) {
    router.push(`/appointment/${id}`);
  }

  function filterGivenUpUsers(events: AppointmentProps[]): User[] {
    return events.flatMap((event) =>
      event.users.filter((user) => user.givenUp),
    );
  }

  function filterPayedUsers(events: AppointmentProps[]): User[] {
    return events.flatMap((event) => event.users.filter((user) => user.payed));
  }

  const usersWhoGivenUp = filterGivenUpUsers(eventData);
  const usersWhoPayed = filterPayedUsers(eventData);

  return (
    <div className="w-full flex flex-col items-center">
      <main className="w-full flex items-center justify-center">
        <Typography
          variant={"h1"}
          text={"Gerenciador de Eventos"}
          styles="font-bold text-xl my-10"
        />
      </main>
      <div className="w-full flex flex-wrap justify-center px-2 gap-4 ">
        {eventData.map((res) => (
          <Commitment
            key={res.id}
            eventName={res.name}
            date={format(new Date(res.date), "PPP", {
              locale: ptBR,
            })}
            time={format(new Date(res.time), "p", {
              locale: ptBR,
            })}
            unconfirmedPeople={usersWhoPayed.length}
            confirmedPeople={usersWhoGivenUp.length}
            navigateTo={() => navigateTo(res.id)}
          />
        ))}
      </div>
    </div>
  );
}
