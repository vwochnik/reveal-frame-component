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
      .spoiler {
        background-color: rgba(0,0,32,0.7);
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
    if (this.revealed) {
      return html`
        <iframe
          width="${this.width}"
          height="${this.height}"
          src="${this.src}"
          frameborder="0"
          allow="${this.allow}"
        ></iframe>
      `;
    } else {
      const cssWidth = cssDimension(this.width),
            cssHeight = cssDimension(this.height),
      spoilerStyle = `width:${cssWidth};height:${cssHeight};`;
      return html`
        <div class="spoiler" style="${spoilerStyle}" @click="${() => this.reveal()}">
          <slot></slot>
        </div>
      `;
    }
  }
}
