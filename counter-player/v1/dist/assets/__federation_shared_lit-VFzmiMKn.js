import { y as y$1 } from "./reactive-element-DeMehKxK.js";
import { n, S, i, u, c, f, e, r } from "./reactive-element-DeMehKxK.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis, i$1 = (t2) => t2, s$1 = t.trustedTypes, e2 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h = "$lit$", o$2 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$1 = "?" + o$2, r2 = `<${n$1}>`, l = document, c2 = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u2 = Array.isArray, d = (t2) => u2(t2) || "function" == typeof t2?.[Symbol.iterator], f2 = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, x = (t2) => (i3, ...s2) => ({ _$litType$: t2, strings: i3, values: s2 }), b = x(1), w = x(2), T = x(3), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t2, i3) {
  if (!u2(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e2 ? e2.createHTML(i3) : i3;
}
const N = (t2, i3) => {
  const s2 = t2.length - 1, e3 = [];
  let n3, l2 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", c3 = v;
  for (let i4 = 0; i4 < s2; i4++) {
    const s3 = t2[i4];
    let a2, u3, d2 = -1, f3 = 0;
    for (; f3 < s3.length && (c3.lastIndex = f3, u3 = c3.exec(s3), null !== u3); ) f3 = c3.lastIndex, c3 === v ? "!--" === u3[1] ? c3 = _ : void 0 !== u3[1] ? c3 = m : void 0 !== u3[2] ? (y.test(u3[2]) && (n3 = RegExp("</" + u3[2], "g")), c3 = p) : void 0 !== u3[3] && (c3 = p) : c3 === p ? ">" === u3[0] ? (c3 = n3 ?? v, d2 = -1) : void 0 === u3[1] ? d2 = -2 : (d2 = c3.lastIndex - u3[2].length, a2 = u3[1], c3 = void 0 === u3[3] ? p : '"' === u3[3] ? $ : g) : c3 === $ || c3 === g ? c3 = p : c3 === _ || c3 === m ? c3 = v : (c3 = p, n3 = void 0);
    const x2 = c3 === p && t2[i4 + 1].startsWith("/>") ? " " : "";
    l2 += c3 === v ? s3 + r2 : d2 >= 0 ? (e3.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$2 + x2) : s3 + o$2 + (-2 === d2 ? i4 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), e3];
};
class S2 {
  constructor({ strings: t2, _$litType$: i3 }, e3) {
    let r3;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u3 = t2.length - 1, d2 = this.parts, [f3, v2] = N(t2, i3);
    if (this.el = S2.createElement(f3, e3), P.currentNode = this.el.content, 2 === i3 || 3 === i3) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r3 = P.nextNode()) && d2.length < u3; ) {
      if (1 === r3.nodeType) {
        if (r3.hasAttributes()) for (const t3 of r3.getAttributeNames()) if (t3.endsWith(h)) {
          const i4 = v2[a2++], s2 = r3.getAttribute(t3).split(o$2), e4 = /([.?@])?(.*)/.exec(i4);
          d2.push({ type: 1, index: l2, name: e4[2], strings: s2, ctor: "." === e4[1] ? I : "?" === e4[1] ? L : "@" === e4[1] ? z : H }), r3.removeAttribute(t3);
        } else t3.startsWith(o$2) && (d2.push({ type: 6, index: l2 }), r3.removeAttribute(t3));
        if (y.test(r3.tagName)) {
          const t3 = r3.textContent.split(o$2), i4 = t3.length - 1;
          if (i4 > 0) {
            r3.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i4; s2++) r3.append(t3[s2], c2()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r3.append(t3[i4], c2());
          }
        }
      } else if (8 === r3.nodeType) if (r3.data === n$1) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r3.data.indexOf(o$2, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$2.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i3) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i3, s2 = t2, e3) {
  if (i3 === E) return i3;
  let h2 = void 0 !== e3 ? s2._$Co?.[e3] : s2._$Cl;
  const o2 = a(i3) ? void 0 : i3._$litDirective$;
  return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e3)), void 0 !== e3 ? (s2._$Co ??= [])[e3] = h2 : s2._$Cl = h2), void 0 !== h2 && (i3 = M(t2, h2._$AS(t2, i3.values), h2, e3)), i3;
}
class R {
  constructor(t2, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i3 }, parts: s2 } = this._$AD, e3 = (t2?.creationScope ?? l).importNode(i3, true);
    P.currentNode = e3;
    let h2 = P.nextNode(), o2 = 0, n3 = 0, r3 = s2[0];
    for (; void 0 !== r3; ) {
      if (o2 === r3.index) {
        let i4;
        2 === r3.type ? i4 = new k(h2, h2.nextSibling, this, t2) : 1 === r3.type ? i4 = new r3.ctor(h2, r3.name, r3.strings, this, t2) : 6 === r3.type && (i4 = new Z(h2, this, t2)), this._$AV.push(i4), r3 = s2[++n3];
      }
      o2 !== r3?.index && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e3;
  }
  p(t2) {
    let i3 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t2[i3])), i3++;
  }
}
class k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i3, s2, e3) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s2, this.options = e3, this._$Cv = e3?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === t2?.nodeType && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = M(this, t2, i3), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const { values: i3, _$litType$: s2 } = t2, e3 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S2.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e3) this._$AH.p(i3);
    else {
      const t3 = new R(e3, this), s3 = t3.u(this.options);
      t3.p(i3), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = C.get(t2.strings);
    return void 0 === i3 && C.set(t2.strings, i3 = new S2(t2)), i3;
  }
  k(t2) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s2, e3 = 0;
    for (const h2 of t2) e3 === i3.length ? i3.push(s2 = new k(this.O(c2()), this.O(c2()), this, this.options)) : s2 = i3[e3], s2._$AI(h2), e3++;
    e3 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e3), i3.length = e3);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    for (this._$AP?.(false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i3, s2, e3, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e3, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i3 = this, s2, e3) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i3, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e4 = t2;
      let n3, r3;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r3 = M(this, e4[s2 + n3], i3, n3), r3 === E && (r3 = this._$AH[n3]), o2 ||= !a(r3) || r3 !== this._$AH[n3], r3 === A ? t2 = A : t2 !== A && (t2 += (r3 ?? "") + h2[n3 + 1]), this._$AH[n3] = r3;
    }
    o2 && !e3 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i3, s2, e3, h2) {
    super(t2, i3, s2, e3, h2), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    if ((t2 = M(this, t2, i3, 0) ?? A) === E) return;
    const s2 = this._$AH, e3 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e3);
    e3 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i3, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const j = { M: h, P: o$2, A: n$1, C: 1, L: N, R, D: d, V: M, I: k, H, N: L, U: z, B: I, F: Z }, B = t.litHtmlPolyfillSupport;
B?.(S2, k), (t.litHtmlVersions ??= []).push("3.3.2");
const D = (t2, i3, s2) => {
  const e3 = s2?.renderBefore ?? i3;
  let h2 = e3._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e3._$litPart$ = h2 = new k(i3.insertBefore(c2(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
class i2 extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
}
i2._$litElement$ = true, i2["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i2 });
const o$1 = s.litElementPolyfillSupport;
o$1?.({ LitElement: i2 });
const n2 = { _$AK: (t2, e3, r3) => {
  t2._$AK(e3, r3);
}, _$AL: (t2) => t2._$AL };
(s.litElementVersions ??= []).push("4.2.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = false;
export {
  n as CSSResult,
  i2 as LitElement,
  y$1 as ReactiveElement,
  n2 as _$LE,
  j as _$LH,
  S as adoptStyles,
  i as css,
  u as defaultConverter,
  c as getCompatibleStyle,
  b as html,
  o as isServer,
  T as mathml,
  E as noChange,
  f as notEqual,
  A as nothing,
  D as render,
  e as supportsAdoptingStyleSheets,
  w as svg,
  r as unsafeCSS
};
//# sourceMappingURL=__federation_shared_lit-VFzmiMKn.js.map
