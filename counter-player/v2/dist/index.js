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

// src/components/CounterPlayer.ts
import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

// src/player.ts
var CounterPlayer = class {
  constructor(props) {
    this.id = props.id;
    this.label = props.label ?? "Player";
    this.maxCount = props.maxCount ?? 10;
    this.count = 0;
  }
  getState() {
    const limit = Math.abs(this.maxCount);
    const atMax = Math.abs(this.count) >= limit;
    return {
      id: this.id,
      label: this.label,
      count: this.count,
      maxCount: this.maxCount,
      atMax
    };
  }
  increment(step = 1) {
    this.count = this.clamp(this.count + Math.max(1, step));
    return this.getState();
  }
  decrement(step = 1) {
    this.count = this.clamp(this.count - Math.max(1, step));
    return this.getState();
  }
  reset() {
    this.count = 0;
    return this.getState();
  }
  rename(label) {
    this.label = label.trim() || this.label;
    return this.getState();
  }
  clamp(value) {
    const limit = Math.abs(this.maxCount);
    return Math.min(Math.max(-limit, value), limit);
  }
};

// src/components/CounterPlayer.ts
var COUNTER_PLAYER_TAG = "counter-player";
var CounterPlayerElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.playerId = "demo";
    this.label = "Demo Player";
    this.maxCount = 5;
    this.playerState = new CounterPlayer({
      id: this.playerId,
      label: this.label,
      maxCount: this.maxCount
    }).getState();
    this.player = new CounterPlayer({
      id: this.playerId,
      label: this.label,
      maxCount: this.maxCount
    });
  }
  willUpdate(changed) {
    if (changed.has("playerId") || changed.has("label") || changed.has("maxCount")) {
      this.player = new CounterPlayer({
        id: this.playerId,
        label: this.label,
        maxCount: this.maxCount
      });
      this.syncState();
    }
  }
  syncState() {
    this.playerState = this.player.getState();
  }
  onIncrement() {
    this.player.increment();
    this.syncState();
  }
  onDecrement() {
    this.player.decrement();
    this.syncState();
  }
  onReset() {
    this.player.reset();
    this.syncState();
  }
  render() {
    const statusText = this.playerState.atMax ? "Reached the Limit." : "Ready to play.";
    return html`
      <section class="test-player-widget">
        <header class="test-player-widget__header">
          <h2 class="test-player-widget__title">${this.playerState.label}</h2>
          <p class="test-player-widget__meta">ID: ${this.playerState.id}</p>
        </header>

        <div class="test-player-widget__stats">
          <span class="test-player-widget__count"
            >Count: ${this.playerState.count}</span
          >
          <span class="test-player-widget__limit"
            >Max: ${this.playerState.maxCount}</span
          >
        </div>

        <p
          class="test-player-widget__status"
          data-at-max=${String(this.playerState.atMax)}
        >
          ${statusText}
        </p>

        <div class="test-player-widget__actions">
          <button type="button" @click=${this.onDecrement}>-</button>
          <button type="button" @click=${this.onIncrement}>+</button>
          <button type="button" @click=${this.onReset}>Reset</button>
        </div>
      </section>
    `;
  }
  static {
    this.styles = css`
    :host {
      display: block;
    }

    .test-player-widget {
      border: 1px solid #d0d7de;
      border-radius: 12px;
      padding: 16px;
      display: grid;
      gap: 12px;
      max-width: 320px;
      font-family:
        ui-sans-serif,
        system-ui,
        -apple-system,
        'Segoe UI',
        sans-serif;
    }

    .test-player-widget__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
    }

    .test-player-widget__title {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .test-player-widget__meta {
      font-size: 12px;
      color: #57606a;
      margin: 0;
    }

    .test-player-widget__stats {
      display: flex;
      gap: 12px;
      font-size: 14px;
    }

    .test-player-widget__status {
      font-size: 14px;
      margin: 0;
    }

    .test-player-widget__status[data-at-max='true'] {
      color: #b42318;
      font-weight: 600;
    }

    .test-player-widget__actions {
      display: flex;
      gap: 8px;
    }

    .test-player-widget__actions button {
      border: 1px solid #cfd7de;
      background: #ffffff;
      border-radius: 6px;
      padding: 6px 10px;
      cursor: pointer;
    }
  `;
  }
};
__decorateClass([
  property({ type: String, attribute: "player-id" })
], CounterPlayerElement.prototype, "playerId", 2);
__decorateClass([
  property({ type: String })
], CounterPlayerElement.prototype, "label", 2);
__decorateClass([
  property({ type: Number, attribute: "max-count" })
], CounterPlayerElement.prototype, "maxCount", 2);
__decorateClass([
  state()
], CounterPlayerElement.prototype, "playerState", 2);
var defineCounterPlayer = () => {
  if (!customElements.get(COUNTER_PLAYER_TAG)) {
    customElements.define(COUNTER_PLAYER_TAG, CounterPlayerElement);
  }
};

// src/index.ts
defineCounterPlayer();
export {
  COUNTER_PLAYER_TAG,
  CounterPlayerElement,
  defineCounterPlayer
};
//# sourceMappingURL=index.js.map