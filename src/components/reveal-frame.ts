import { html, css, LitElement, customElement, property } from 'lit-element';
import { cssDimension } from '../util';

@customElement('reveal-frame')
export default class RevealFrame extends LitElement {
  revealed: boolean = false;

  @property({ type: String })
  width: string = '100%';

  @property({ type: String })
  height: string = '100';

  @property({ type: String })
  src: string = '';

  @property({ type: String })
  allow: string = '';

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        position: relative;
        background-color: var(--reveal-frame-background, rgba(225,225,225,0.3));
      }
      .placeholder {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: var(--reveal-placeholder-background, rgba(0,0,32,0.8));
        color: var(--reveal-placeholder-color, rgba(239,239,255,0.8));
        overflow: hidden;
      }
      .placeholder-inner {
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
  }

  reveal() {
    this.revealed = true;
    this.requestUpdate();
  }

  render() {
    const cssWidth = cssDimension(this.width),
          cssHeight = cssDimension(this.height),
          containerStyle = `width:${cssWidth};height:${cssHeight};`;

    if (this.revealed) {
      return html`
        <div class="container" style="${containerStyle}">
          <iframe
            width="${this.width}"
            height="${this.height}"
            src="${this.src}"
            frameborder="0"
            allow="${this.allow}"
          ></iframe>
        </div>
      `;
    } else {
      return html`
        <div class="container" style="${containerStyle}">
          <div class="placeholder" @click="${() => this.reveal()}">
            <div class="placeholder-inner">
              <slot></slot>
            </div>
          </div>
        </div>
      `;
    }
  }
}
