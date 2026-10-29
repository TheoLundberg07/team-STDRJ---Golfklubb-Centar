async function loadComponent(id, file) {
  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Kunde inte ladda ${file}`);
    }

    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

loadComponent("header", "./components/header.html");
loadComponent("newsletter", "./components/nyhetsbrev.html");
loadComponent("footer", "./components/footer.html");

/* ====== CHOOSE MEMBERSHIPFORM ======== */

const params = new URLSearchParams(window.location.search);
const membership = params.get("type");

const select = document.querySelector("#membership");

if (membership) {
  select.value = membership;
}
