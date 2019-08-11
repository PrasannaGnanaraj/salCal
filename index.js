import { LitElement, html } from 'lit-element';

class welcomeMessage extends LitElement {
    render() {
        return html`<div>hello</div>`;
    }
}

customElements.define('welcome-el',welcomeMessage);