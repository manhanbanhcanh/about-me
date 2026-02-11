import { Github, BookA, School } from "lucide-react";
import Information from "../components/home/Information";
import CardLink from "../components/home/CardLink";
import ThemeSwitch from "../components/home/Theme";
import Tooltip from "../components/tooltip/Tooltip";

export default function Home() {
  return (
    <div
      id="theme"
      className="latte font-quicksand font-medium transition-all duration-300"
    >
      <div className="flex flex-col justify-between bg-ctp-base min-h-screen w-screen transition duration-300">
        <header className="flex justify-between items-center px-4 sm:px-8 py-4">
          <div className="flex items-center gap-4">
            <Tooltip text="this page's repo">
              <a
                href="https://github.com/manhanbanhcanh/about-me"
                target="_blank"
                className="text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition"
              >
                <Github size={22} strokeWidth={2} />
              </a>
            </Tooltip>

            <Tooltip text="ULIS StudyHub">
              <a
                href="https://ulis.ducmanh.space/"
                target="_blank"
                className="text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition"
              >
                <BookA size={22} strokeWidth={2} />
              </a>
            </Tooltip>

            <Tooltip text="HANU StudyLinks">
              <a
                href="https://hanu.ducmanh.space/"
                target="_blank"
                className="text-ctp-rosewater-100 hover:text-ctp-rosewater-300 transition"
              >
                <School size={22} strokeWidth={2} />
              </a>
            </Tooltip>

            <p className="hidden sm:block text-xs text-ctp-surface1">
              {"<---- My works"}
            </p>
          </div>

          <ThemeSwitch />
        </header>

        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-12
            px-4
            sm:px-8
            xl:px-24
            2xl:px-40
            py-10
          "
        >
          <div className="w-full lg:w-1/3">
            <Information />
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            <p className="text-ctp-flamingo font-semibold text-lg">
              My Social（*゜ー゜*）
            </p>
            <CardLink />
          </div>
        </div>

        <footer className="flex justify-between items-center px-4 sm:px-8 py-4">
          <div className="text-ctp-surface2 text-xs sm:text-sm space-y-1">
            <p>
              © 2026 banhcanh. Built with{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-ctp-rosewater-50 hover:text-ctp-rosewater-300 transition"
              >
                React
              </a>
              ,{" "}
              <a
                href="https://catppuccin.com/"
                target="_blank"
                className="text-ctp-rosewater-50 hover:text-ctp-rosewater-300 transition"
              >
                Catppuccin
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-ctp-rosewater-50 hover:text-ctp-rosewater-300 transition"
              >
                Tailwind CSS v4
              </a>
              , and{" "}
              <a
                href="https://lucide.dev/"
                target="_blank"
                className="text-ctp-rosewater-50 hover:text-ctp-rosewater-300 transition"
              >
                Lucide
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
