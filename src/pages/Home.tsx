import { Github, SwatchBook } from "lucide-react";
import Information from "../components/home/Information";
import CardLink from "../components/home/CardLink";

export default function Home() {
  return (
    <div id="theme" className="latte font-quicksand font-medium scrollbar-hide">
      <div
        id="background"
        className="bg-ctp-base min-h-screen w-full transition ease-in-out duration-400"
      >
        <header className="flex flex-row justify-between px-8 py-4">
          <div id="page-links" className="flex flex-row justify-evenly px-px">
            <a
              href=""
              className="no-underline text-ctp-rosewater opacity-80 hover:opacity-100 transition ease-in-out duration-400"
            >
              <Github size={24} strokeWidth={1} />
            </a>
          </div>
          <div
            id="theme-switcher"
            className="flex flex-row justify-center px-px"
          >
            <button className="text-ctp-rosewater opacity-80 hover:cursor-pointer hover:opacity-100 transition ease-in-out duration-400">
              <SwatchBook size={24} strokeWidth={1} />
            </button>
          </div>
        </header>

        <div id="body" className="flex flex-row mx-50 justify-around">
          <Information />
          <div id="links" className="flex flex-col gap-2">
            <p className="text-ctp-flamingo text-semibold">
              My Social（*゜ー゜*）
            </p>
            <CardLink />
          </div>
        </div>
      </div>
    </div>
  );
}
