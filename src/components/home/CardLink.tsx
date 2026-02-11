import { cards } from "../data/CardData";

export default function CardLink() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        2xl:grid-cols-4
        auto-rows-[minmax(180px,auto)]
        gap-4
        p-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        const colSpan = card.colSpan ?? 1;
        const rowSpan = card.rowSpan ?? 1;

        const colSpanMap = {
          1: "col-span-1",
          2: "col-span-1 sm:col-span-2",
        } as const;

        const rowSpanMap = {
          1: "row-span-1",
          2: "row-span-1 sm:row-span-2",
        } as const;

        const isSquared = rowSpan === 1 && colSpan === 1;
        const isSpotify = card.id === "spotify";

        return (
          <div
            key={card.id}
            className={`
              ${colSpanMap[colSpan]}
              ${rowSpanMap[rowSpan]}
              ${isSquared ? "aspect-square" : ""}
              
              rounded-xl
              p-4
              bg-ctp-mantle
              flex
              flex-col
              justify-between
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            `}
          >
            {/* Icon */}
            <div className="p-2 bg-ctp-crust w-fit rounded-md">
              <Icon className="text-ctp-rosewater" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-ctp-text font-medium">{card.title}</h3>
              <p className="text-ctp-subtext0 text-sm">{card.description}</p>

              <a
                href={card.link}
                target="_blank"
                className="
                  inline-block
                  mt-3
                  px-3
                  py-1
                  text-sm
                  rounded-md
                  bg-ctp-rosewater
                  text-ctp-mantle
                  hover:bg-ctp-rosewater/80
                  transition
                "
              >
                {isSpotify ? "▶ Play" : "Follow"}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
