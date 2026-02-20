var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/components/SumPlayer.ts
import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

// src/player.ts
var SumPlayer = class {
  constructor(props) {
    this.id = props.id;
    this.label = props.label ?? "Sum Player";
    this.left = props.initialLeft ?? 0;
    this.right = props.initialRight ?? 0;
  }
  getState() {
    return {
      id: this.id,
      label: this.label,
      left: this.left,
      right: this.right,
      result: this.left + this.right
    };
  }
  setLeft(value) {
    this.left = this.toNumber(value);
    return this.getState();
  }
  setRight(value) {
    this.right = this.toNumber(value);
    return this.getState();
  }
  setOperands(left, right) {
    this.left = this.toNumber(left);
    this.right = this.toNumber(right);
    return this.getState();
  }
  reset() {
    this.left = 0;
    this.right = 0;
    return this.getState();
  }
  rename(label) {
    this.label = label.trim() || this.label;
    return this.getState();
  }
  toNumber(value) {
    return Number.isFinite(value) ? value : 0;
  }
};

// src/components/SumPlayer.ts
var SUM_PLAYER_TAG = `sum-player-v${"1"}`;
var SumPlayerElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.playerId = "demo";
    this.label = "Sum Player";
    this.initialLeft = 2;
    this.initialRight = 3;
    this.playerState = new SumPlayer({
      id: this.playerId,
      label: this.label,
      initialLeft: this.initialLeft,
      initialRight: this.initialRight
    }).getState();
    this.left = this.initialLeft;
    this.right = this.initialRight;
    this.player = new SumPlayer({
      id: this.playerId,
      label: this.label,
      initialLeft: this.initialLeft,
      initialRight: this.initialRight
    });
  }
  willUpdate(changed) {
    if (changed.has("playerId") || changed.has("label") || changed.has("initialLeft") || changed.has("initialRight")) {
      this.player = new SumPlayer({
        id: this.playerId,
        label: this.label,
        initialLeft: this.initialLeft,
        initialRight: this.initialRight
      });
      this.left = this.initialLeft;
      this.right = this.initialRight;
      this.syncState();
    }
  }
  syncState() {
    this.playerState = this.player.getState();
  }
  onLeftInput(event) {
    const target = event.target;
    this.left = Number(target?.value ?? 0);
  }
  onRightInput(event) {
    const target = event.target;
    this.right = Number(target?.value ?? 0);
  }
  onCalculate() {
    this.playerState = this.player.setOperands(this.left, this.right);
  }
  onReset() {
    this.left = 0;
    this.right = 0;
    this.playerState = this.player.reset();
  }
  render() {
    return html`
      <section class="sum-player">
        <header class="sum-player__header">
          <h2 class="sum-player__title">${this.playerState.label}</h2>
          <p class="sum-player__meta">ID: ${this.playerState.id}</p>
        </header>

        <div class="sum-player__inputs">
          <input
            class="sum-player__input"
            type="number"
            .value=${String(this.left)}
            aria-label="Left value"
            @input=${this.onLeftInput}
          />
          <span class="sum-player__operator">+</span>
          <input
            class="sum-player__input"
            type="number"
            .value=${String(this.right)}
            aria-label="Right value"
            @input=${this.onRightInput}
          />
        </div>

        <div class="sum-player__actions">
          <button type="button" @click=${this.onCalculate}>Result</button>
          <button type="button" @click=${this.onReset}>Reset</button>
        </div>

        <p class="sum-player__result">
          Result: <strong>${this.playerState.result}</strong>
        </p>
      </section>
    `;
  }
  static {
    this.styles = css`
    :host {
      display: block;
    }

    .sum-player {
      border: 1px solid #d0d7de;
      border-radius: 12px;
      padding: 16px;
      display: grid;
      gap: 12px;
      max-width: 360px;
      font-family:
        ui-sans-serif,
        system-ui,
        -apple-system,
        'Segoe UI',
        sans-serif;
    }

    .sum-player__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
    }

    .sum-player__title {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .sum-player__meta {
      font-size: 12px;
      color: #57606a;
      margin: 0;
    }

    .sum-player__inputs {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 8px;
      align-items: center;
    }

    .sum-player__input {
      border: 1px solid #cfd7de;
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 14px;
    }

    .sum-player__operator {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }

    .sum-player__actions {
      display: flex;
      gap: 8px;
    }

    .sum-player__actions button {
      border: 1px solid #cfd7de;
      background: #ffffff;
      border-radius: 6px;
      padding: 6px 12px;
      cursor: pointer;
    }

    .sum-player__result {
      font-size: 14px;
      margin: 0;
    }
  `;
  }
};
__decorateClass([
  property({ type: String, attribute: "player-id" })
], SumPlayerElement.prototype, "playerId", 2);
__decorateClass([
  property({ type: String })
], SumPlayerElement.prototype, "label", 2);
__decorateClass([
  property({ type: Number, attribute: "initial-left" })
], SumPlayerElement.prototype, "initialLeft", 2);
__decorateClass([
  property({ type: Number, attribute: "initial-right" })
], SumPlayerElement.prototype, "initialRight", 2);
__decorateClass([
  state()
], SumPlayerElement.prototype, "playerState", 2);
__decorateClass([
  state()
], SumPlayerElement.prototype, "left", 2);
__decorateClass([
  state()
], SumPlayerElement.prototype, "right", 2);
var defineSumPlayer = () => {
  if (!customElements.get(SUM_PLAYER_TAG)) {
    customElements.define(SUM_PLAYER_TAG, SumPlayerElement);
  }
};

// src/index.ts
defineSumPlayer();
export {
  SUM_PLAYER_TAG,
  SumPlayerElement,
  defineSumPlayer
};
//# sourceMappingURL=index.js.map