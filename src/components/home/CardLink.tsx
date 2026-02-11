import { cards } from "../data/CardData";

export default function CardLink() {
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 auto-rows-[250px] min-w-200 gap-4 p-5 transition ease-in-out duration-400"
      style={{
        gridAutoRows: "calc((100% - 3rem) / 1.5)",
      }}
    >
      {cards.map((card) => {
        const Icon = card.icon;

        const colSpanMap = { 1: "col-span-1", 2: "col-span-2" } as const;
        const rowSpanMap = { 1: "row-span-1", 2: "row-span-2" } as const;

        const colSpan = card.colSpan ?? 1;
        const rowSpan = card.rowSpan ?? 1;

        const isSquared = rowSpan === 1 && colSpan === 1;

        const isSpotify = card.id === "spotify";

        return (
          <div
            key={card.id}
            className={`${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]} ${isSquared ? "max-w-40" : "max-w-88"}
            rounded-xl p-4 bg-ctp-mantle flex flex-col justify-around transition ease-in-out duration-400 hover:-translate-y-1 min-w-40 max-h-40 shadow-(color:ctp-mantle)`}
          >
            <div
              id="icon"
              className="p-2 bg-ctp-crust aspect-square max-w-10 flex justify-center rounded-md transition ease-in-out duration-400"
            >
              <Icon className="text-ctp-rosewater transition ease-in-out duration-400" />
            </div>
            <div id="texts" className="transition ease-in-out duration-400">
              <h3 className="text-ctp-text">{card.title}</h3>
              <p className="text-ctp-subtext0 text-sm">{card.description}</p>
              <button className="bg-ctp-rosewater min-w-10 my-2 rounded-sm">
                <a
                  href={`${card.link}`}
                  target="_blank"
                  className="text-sm mx-2"
                >
                  {isSpotify ? "▶ Play" : "Follow"}
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
