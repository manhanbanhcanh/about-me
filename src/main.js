document.addEventListener("DOMContentLoaded", () => {
  const links = {
    github: "https://github.com/manhanbanhcanh",
    "bi-spotify":
      "https://https://open.spotify.com/user/31cjxtll26km3w7dawor3iacf3cy",
    box3: "https://github.com/manhanbanhcanh/PR2-Summer-2026",
  };

  Object.keys(links).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        window.open(links[id], "_blank");
      });
    }
  });

  const socials = document.querySelectorAll("#link-span a");
  socials.forEach((link) => {
    link.addEventListener("click", (e) => {});
  });
});
