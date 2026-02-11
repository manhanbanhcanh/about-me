import { Github, BookA, School } from "lucide-react";
import Information from "../components/home/Information";
import CardLink from "../components/home/CardLink";
import ThemeSwitch from "../components/home/Theme";

import Tooltip from "../components/tooltip/Tooltip";

export default function Home() {
  return (
    <div
      id="theme"
      className="latte font-quicksand font-medium transition-all ease-in-out duration-400"
    >
      <div
        id="background"
        className="bg-ctp-base min-h-screen w-full transition ease-in-out duration-400"
      >
        <header className="flex flex-row justify-between px-8 py-4">
          <div
            id="page-links"
            className="flex flex-row justify-evenly px-px gap-3 items-center"
          >
            <Tooltip text="this page's repo">
              <a
                href="https://github.com/manhanbanhcanh/about-me"
                className="no-underline text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
                target="_blank"
              >
                <Github size={24} strokeWidth={2} />
              </a>
            </Tooltip>

            <Tooltip text="ULIS StudyHub">
              <a
                href="https://ulis.ducmanh.space/"
                className="no-underline text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
                target="_blank"
              >
                <BookA size={24} strokeWidth={2} />
              </a>
            </Tooltip>

            <Tooltip text="HANU StudyLinks">
              <a
                href="https://hanu.ducmanh.space/"
                className="no-underline text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition ease-in-out duration-400"
                target="_blank"
              >
                <School size={24} strokeWidth={2} />
              </a>
            </Tooltip>

            <p className="text-xs text-ctp-surface1">{"<---- My works"}</p>
          </div>
          <div
            id="theme-switcher"
            className="flex flex-row justify-center px-px"
          >
            <ThemeSwitch />
          </div>
        </header>

        <div id="body" className="flex flex-row mx-50 justify-around gap-10">
          <Information />
          <div id="links" className="flex flex-col gap-2">
            <p className="text-ctp-flamingo text-semibold ml-6">
              My Social（*゜ー゜*）
            </p>
            <CardLink />
          </div>
        </div>
      </div>
    </div>
  );
}
