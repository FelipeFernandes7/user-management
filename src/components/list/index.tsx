import { GrStatusGoodSmall } from "react-icons/gr";
import { Typography } from "../typography";
import { TbClockHour7 } from "react-icons/tb";
import { MdErrorOutline } from "react-icons/md";

interface ListProps {
  payed: boolean;
  name: string;
  presence: boolean;
  givenUp: boolean;
}

export function List({ payed, name, presence, givenUp }: ListProps) {
  return (
    <main className="w-full flex relative items-center flex-col bg-neutral-900 p-4 shadow-md rounded-md">
      <div className="absolute left-0 top-0 h-full w-2 rounded-l-2xl bg-purple-500"></div>
      <div className="w-full flex items-center justify-between">
        <div className=" h-full flex flex-col gap-3 ">
          <Typography
            variant={"strong"}
            text={name}
            styles="text-zinc-200 text-sm"
          />
          {payed && (
            <Typography
              variant={"span"}
              text={"Pagamento Efetivado"}
              styles=" p-1 text-xs rounded-md border border-dashed text-emerald-400 border-emerald-400"
            />
          )}
          {!payed && !givenUp && (
            <div className="flex items-center justify-between gap-2 border border-dashed rounded-md p-1 text-gray-200 px-2">
              <Typography
                variant={"span"}
                text={"Pendente"}
                styles="text-xs rounded-md"
              />
              <TbClockHour7 />
            </div>
          )}
          {!payed && givenUp && (
            <div className="flex items-center justify-between gap-2 border border-dashed border-pink-600 rounded-md p-1 text-pink-600 px-2">
              <Typography
                variant={"span"}
                text={"Desistente"}
                styles="text-xs rounded-md"
              />
              <MdErrorOutline />
            </div>
          )}
        </div>
        <div className=" h-full flex flex-col items-center gap-2">
          <GrStatusGoodSmall
            className={`${presence ? "text-emerald-400" : "text-[#9ca3af]"}`}
          />
          {givenUp && <GrStatusGoodSmall className={"text-pink-600"} />}
        </div>
      </div>
    </main>
  );
}
