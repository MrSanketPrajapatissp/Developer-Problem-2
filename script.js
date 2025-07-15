// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const getUser = document.querySelector("#getUser");
  const parent = document.querySelector("#parent");

  function getNewUser() {
    fetch(`https://randomuser.me/api/`)
      .then((data) => data.json())
      .then((res) => {
        const { name, email, gender, picture } = res.results[0];

        const card = document.createElement("div");
        card.className = "card w-60 p-4 rounded-xl bg-zinc-800";

        card.innerHTML = `
          <div class="w-20 h-20 bg-zinc-600 rounded-2xl mb-3 overflow-hidden">
              <img src="${picture.large}" alt="User Image" class="w-full h-full object-cover" />
          </div>
          <div class="font-semibold text-2xl">${name.first}</div>
          <div class="font-semibold text-sm">${email}</div>
          <div class="font-semibold text-sm capitalize">${gender}</div>
          <p class="mt-5 text-xs font-semibold opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque sunt et!
          </p>
        `;

        parent.appendChild(card);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
      });
  }

  getUser.addEventListener("click", getNewUser);
});
