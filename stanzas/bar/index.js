export default async function bar(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {
      greeting: `Hello, ${params["say-to"]}!`,
    },
  });
}

export function handleEvent(stanza, params, event) {
  console.log("bar: received", event);
}
