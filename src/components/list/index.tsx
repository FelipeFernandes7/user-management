import { GrStatusGoodSmall } from "react-icons/gr";
import { Typography } from "../typography";
import { TbClockHour7 } from "react-icons/tb";
import { MdErrorOutline } from "react-icons/md";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ListProps {
  payed: boolean;
  name: string;
  presence: boolean;
  givenUp: boolean;
  payed_at: Date;
}

export function List({ payed, payed_at, name, presence, givenUp }: ListProps) {
  return (
    <div className="w-full flex justify-between items-center bg-[#202020] rounded-2xl p-4 shadow-md">
      <aside className="w-full flex flex-col">
        <Typography
          variant={"h1"}
          text={name}
          styles="text-zinc-200 text-sm font-bold"
        />
        {payed && (
          <span className="flex w-fit px-2 rounded-xl items-center mt-2 p-1 border text-emerald-400 border-emerald-400 border-dashed text-xs">
            Pagamento Efetivado
          </span>
        )}
        {!payed && !givenUp && (
          <span className="flex gap-2 w-fit px-2 rounded-xl items-center mt-2 p-1 border text-gray-200 border-gray-200 border-dashed text-xs">
            Pedente <TbClockHour7 className="text-sm" />
          </span>
        )}
        {!payed && givenUp && (
          <span className="flex gap-2 w-fit px-2 rounded-xl items-center mt-2 p-1 border text-red-500 border-red-500 border-dashed text-xs">
            Desistente <MdErrorOutline className="text-sm" />
          </span>
        )}
      </aside>

      <div className="flex flex-col items-end gap-1">
        <div className="w-full flex flex-col gap-1">
          {!payed && !givenUp && (
            <GrStatusGoodSmall className={"text-zinc-400"} />
          )}
          {presence && <GrStatusGoodSmall className={"text-emerald-400"} />}
          {givenUp && <GrStatusGoodSmall className={"text-red-500"} />}
        </div>
      </div>
    </div>
  );
}
