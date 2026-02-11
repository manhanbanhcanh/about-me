import Tooltip from "../tooltip/Tooltip";
import { CalendarHeart } from "lucide-react";

export default function Information() {
  return (
    <div
      id="container"
      className="flex flex-col gap-4 min-w-100 justify-between min-h-full"
    >
      <div id="top">
        <div id="profile-picture" className="">
          <img
            src="../../../pfp.png"
            className="rounded-full w-50 h-50 shadow-xl shadow-(color:ctp-mantle)
            transition duration-400 ease-in-out hover:sepia-10"
            draggable="false"
          />
        </div>
        <div id="name" className="">
          <h1 className="text-4xl font-bold mx-4 my-4 text-ctp-text">
            Duc Manh{" "}
            <span className="text-ctp-green-100 hover:cursor-wait">
              <Tooltip text="Available for works">
                <CalendarHeart size={29} strokeWidth={3} />
              </Tooltip>
            </span>
          </h1>
        </div>
        <div
          id="subtext"
          className="ml-4 my-3 bg-ctp-mantle text-ctp-rosewater rounded-md max-w-67 opacity-80 
        hover:opacity-100 hover:cursor-default transition ease-in-out duration-400"
        >
          <p className="mx-2 my-1">🎓 Sophomore, Hanoi University</p>
        </div>
        <ul className="list-none mx-4 my-1 text-ctp-text rounded-md px-2 pd-1 text-lg">
          <li>I lost my glasses.</li>
          <li>{"<(＿　＿)> minimalism freak"}</li>
        </ul>
      </div>
      <div id="bottom">
        <div
          id="subtext"
          className="justify-end text-ctp-surface2 text-sm ml-4"
        >
          <p>© 2026 banhcanh.</p>
          <p>
            built with
            <span
              className="text-ctp-rosewater-50
            hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
            >
              <a href="https://react.dev/" target="_blank">
                {" "}
                React
              </a>
            </span>
            ,
            <span
              className="text-ctp-rosewater-50
            hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
            >
              <a href="https://catppuccin.com/" target="_blank">
                {" "}
                Catppuccin
              </a>
            </span>
            ,
            <span
              className="text-ctp-rosewater-50
            hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
            >
              <a href="https://tailwindcss.com/" target="_blank">
                {" "}
                Tailwind CSS v4
              </a>
            </span>
            , and
            <span
              className="text-ctp-rosewater-50
            hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
            >
              <a href="https://lucide.dev/" target="_blank">
                {" "}
                Lucide
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
