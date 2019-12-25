type document;
[@bs.send] external getElementById: (document, string) => Dom.element = "getElementById";
[@bs.val] [@bs.scope "document"] external addEventListener: (string, 'a => unit) => unit = "";
[@bs.val] external doc : document = "document";

let inputVal= getElementById(doc, "input");

