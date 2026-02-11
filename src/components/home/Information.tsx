export default function Information() {
  return (
    <div
      id="container"
      className="flex flex-col gap-4 min-w-100 justify-between min-h-150"
    >
      <div id="top">
        <div id="profile-picture" className="">
          <img
            src="../../../pfp.png"
            className="rounded-full w-50 h-50 shadow-xl shadow-(color:ctp-mantle)"
          />
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
        <div id="subtext" className="justify-end text-ctp-subtext text-sm ml-4">
          <p>© by banhcanh</p>
        </div>
      </div>
    </div>
  );
}
