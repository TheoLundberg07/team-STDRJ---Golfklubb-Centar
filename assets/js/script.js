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

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");