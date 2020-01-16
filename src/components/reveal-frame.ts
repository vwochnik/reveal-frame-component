import { html, css, LitElement, customElement, property } from 'lit-element';

@customElement('reveal-frame')
export default class WaterBox extends LitElement {
  @property({ type: String })
  width: string = '100%';

  @property({ type: String })
  height: string = '100';

  static get styles() {
    return css`
      :host { display: block; overflow: hidden; }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`<canvas width="${this.width}" height="${this.height}"></canvas>`;
  }
}
