export const html = (tag, attributes, children) => (makeHTML) => {
  return makeHTML(
    tag,
    attributes,
    children.map((it) => it(makeHTML))
  );
};

export const voidHtml = (tag, attributes) => (makeHTML) => {
  return makeHTML(tag, attributes);
};

export const h1 = html.bind(null, "h1");

export const h2 = html.bind(null, "h2");

export const h3 = html.bind(null, "h3");

export const h4 = html.bind(null, "h4");

export const h5 = html.bind(null, "h5");

export const h6 = html.bind(null, "h6");

export const span = html.bind(null, "span");

export const div = html.bind(null, "div");

export const p = html.bind(null, "p");

export const li = html.bind(null, "li");

export const ul = html.bind(null, "ul");

export const ol = html.bind(null, "ol");

export const button = html.bind(null, "button");

export const input = voidHtml.bind(null, "input");

export const text = (theText) => (makeHTML) => theText;
