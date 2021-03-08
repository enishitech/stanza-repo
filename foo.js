import { d as defineStanzaElement } from './stanza-element-048ee85e.js';

async function foo(stanza, params) {
  stanza.render({
    template: "stanza.html.hbs",
    parameters: {},
  });
  const input = stanza.root.querySelector("input");
  input.addEventListener("input", (ev) => {
    const value = ev.target.value;
    console.log("input", value);
    stanza.host.dispatchEvent(
      new CustomEvent("valueChanged", { detail: { value } })
    );
  });
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': foo
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "foo",
	"stanza:label": "Foo",
	"stanza:definition": "Input form to emit events",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
	"stanza:provider": "",
	"stanza:license": "MIT",
	"stanza:author": "Yoji Shidara",
	"stanza:address": "dara@shidara.net",
	"stanza:contributor": [
],
	"stanza:created": "2021-03-08",
	"stanza:updated": "2021-03-08",
	"stanza:parameter": [
],
	"stanza:about-link-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--greeting-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "text color of greeting"
	},
	{
		"stanza:key": "--greeting-align",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"left",
			"center",
			"right"
		],
		"stanza:default": "center",
		"stanza:description": "text align of greeting"
	}
],
	"stanza:incomingEvent": [
],
	"stanza:outgoingEvent": [
	{
		"stanza:key": "valueChanged",
		"stanza:description": "value changed"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"text\">";
},"useData":true}]
];

var css = "/*\n\nYou can set up a global style here that is commonly used in each stanza.\n\nExample:\n\nh1 {\n  font-size: 24px;\n}\n\n*/\nmain {\n  padding: 1rem 2rem;\n}\n\np.greeting {\n  margin: 0;\n  font-size: 24px;\n  color: var(--greeting-color);\n  text-align: var(--greeting-align);\n}";

defineStanzaElement({stanzaModule, metadata, templates, css, url: import.meta.url});
//# sourceMappingURL=foo.js.map
