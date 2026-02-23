import { f, u } from "../reactive-element-DeMehKxK.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f }, r$3 = (t2 = o$1, e2, r2) => {
  const { kind: n2, metadata: i } = r2;
  let s = globalThis.litPropertyMetadata.get(i);
  if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n2 && ((t2 = Object.create(t2)).wrapped = true), s.set(r2.name, t2), "accessor" === n2) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n3 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n3, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n2) {
    const { name: o2 } = r2;
    return function(r3) {
      const n3 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n3, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n$1(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$3(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r$2(r2) {
  return n$1({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t2) {
  return (n2, o2) => {
    const c = "function" == typeof n2 ? n2 : n2[o2];
    Object.assign(c, t2);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = (e2, t2, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c), c);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$1(e2, r2) {
  return (n2, s, i) => {
    const o2 = (t2) => t2.renderRoot?.querySelector(e2) ?? null;
    if (r2) {
      const { get: e3, set: r3 } = "object" == typeof s ? n2 : i ?? (() => {
        const t2 = Symbol();
        return { get() {
          return this[t2];
        }, set(e4) {
          this[t2] = e4;
        } };
      })();
      return e$2(n2, s, { get() {
        let t2 = e3.call(this);
        return void 0 === t2 && (t2 = o2(this), (null !== t2 || this.hasUpdated) && r3.call(this, t2)), t2;
      } });
    }
    return e$2(n2, s, { get() {
      return o2(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e;
function r$1(r2) {
  return (n2, o2) => e$2(n2, o2, { get() {
    return (this.renderRoot ?? (e ??= document.createDocumentFragment())).querySelectorAll(r2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return (n2, e2) => e$2(n2, e2, { async get() {
    return await this.updateComplete, this.renderRoot?.querySelector(r2) ?? null;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o2) {
  return (e2, n2) => {
    const { slot: r2, selector: s } = o2 ?? {}, c = "slot" + (r2 ? `[name=${r2}]` : ":not([name])");
    return e$2(e2, n2, { get() {
      const t2 = this.renderRoot?.querySelector(c), e3 = t2?.assignedElements(o2) ?? [];
      return void 0 === s ? e3 : e3.filter((t3) => t3.matches(s));
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n2) {
  return (o2, r2) => {
    const { slot: e2 } = n2 ?? {}, s = "slot" + (e2 ? `[name=${e2}]` : ":not([name])");
    return e$2(o2, r2, { get() {
      const t2 = this.renderRoot?.querySelector(s);
      return t2?.assignedNodes(n2) ?? [];
    } });
  };
}
export {
  t$1 as customElement,
  t as eventOptions,
  n$1 as property,
  e$1 as query,
  r$1 as queryAll,
  o as queryAssignedElements,
  n as queryAssignedNodes,
  r as queryAsync,
  r$3 as standardProperty,
  r$2 as state
};
//# sourceMappingURL=decorators.js-Cu0Ucm_C.js.map
