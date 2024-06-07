import { Button } from "../button";
import { Typography } from "../typography";
import { IoCalendarNumber } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineStop } from "react-icons/ai";

interface CommitmentProps {
  eventName: string;
  date: string;
  time: string;
  unconfirmedPeople: number;
  confirmedPeople: number;
  navigateTo: (value?: any) => any;
}

export function Commitment({
  confirmedPeople,
  unconfirmedPeople,
  eventName,
  date,
  time,
  navigateTo,
}: CommitmentProps) {
  return (
    <div className="w-full flex flex-col rounded-xl shadow-md md:max-w-[350px] p-4 bg-[#181818] cursor-pointer">
      <div className="w-full flex flex-col items-center">
        <Typography
          variant="h1"
          text={eventName}
          size="lg"
          styles="text-white"
        />
        <main className="w-full flex flex-col items-start my-3">
          <Typography
            variant="span"
            text={date}
            size="sm"
            styles="text-gray-400"
          />
          <Typography
            variant="strong"
            text={`${time}hrs`}
            size="xs"
            styles="text-gray-400"
          />
        </main>
      </div>
      <section className="w-full flex items-center justify-center h-full mt-6 mb-6">
        <IoCalendarNumber className="text-[4rem] text-gray-400" />
      </section>
      <section className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full flex items-center gap-2 text-sm text-gray-400">
            <FaPeopleGroup />
            <Typography
              variant="p"
              text={`${confirmedPeople} Confirmados`}
              size="xs"
            />
          </div>
          <div className="w-full flex items-center gap-2 text-sm text-gray-400">
            <AiOutlineStop />
            <Typography
              variant="p"
              text={`${unconfirmedPeople} Desistentes`}
              size="xs"
            />
          </div>
        </div>
        <Button
          onClick={navigateTo}
          label={"Acessar"}
          size="sm"
          styles=" bg-gradient-to-r from-[#4f46e5] to-[#c026d3] p-2 rounded-md max-w-[100px]"
        />
      </section>
    </div>
  );
}
