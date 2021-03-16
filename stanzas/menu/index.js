export default async function menu(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      greeting: `Hello, ${params["say-to"]}!`,
    },
  });

  stanza.menu.item("Download SVG", () => {
    alert("Download SVG selected");
  });

  stanza.menu.item("Download PNG", () => {
    alert("Download PNG selected");
  });

  stanza.menu.divider();

  stanza.menu.item("Download CSV", () => {
    alert("Download CSV selected");
  });
}
