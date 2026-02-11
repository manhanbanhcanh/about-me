import Tooltip from "../tooltip/Tooltip";
import { CalendarHeart } from "lucide-react";

export default function Information() {
  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-md lg:max-w-none">
      <div className="space-y-4">
        <div>
          <img
            src="/pfp.png"
            alt="Profile"
            draggable={false}
            className="
              rounded-full
              w-32 h-32
              sm:w-40 sm:h-40
              lg:w-48 lg:h-48
              object-cover
              shadow-xl
              transition
              duration-300
              hover:sepia-10
            "
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-ctp-text">
          Duc Manh{" "}
          <span className="inline-flex items-center text-ctp-green-100">
            <Tooltip text="Available for works">
              <CalendarHeart size={24} strokeWidth={2.5} className="ml-2" />
            </Tooltip>
          </span>
        </h1>

        <div
          className="
            inline-block
            bg-ctp-mantle
            text-ctp-rosewater
            rounded-md
            px-3 py-1
            text-sm
            opacity-80
            hover:opacity-100
            transition
          "
        >
          🎓 Sophomore, Hanoi University
        </div>

        <ul className="text-ctp-text text-base sm:text-lg space-y-1">
          <li>I lost my glasses.</li>
          <li>{"<(＿　＿)> minimalism freak"}</li>
        </ul>
      </div>
    </div>
  );
}
