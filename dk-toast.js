import {LitElement, html, css} from 'lit-element';

class DkToast extends LitElement {

    static get properties() {
        return {
            title: {
                type: String,
                reflect: true
            },
            open: {
                type: Boolean,
                reflect: true
            },
            delay: {
                type: Number,
                reflect: true
            }
        };
    }

    static get styles() {
        return css`
            .toast{
                max-width: 350px;
                overflow: hidden;
                font-size: .875rem;
                background-color: rgba(255,255,255,.85);
                background-clip: padding-box;
                border: 1px solid rgba(0,0,0,.1);
                box-shadow: 0 .25rem .75rem rgba(0,0,0,.1);
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                border-radius: .25rem;
            }
            .toast-header {
                display: -ms-flexbox;
                display: flex;
                justify-content:space-between;
                -ms-flex-align: center;
                align-items: center;
                padding: .25rem .75rem;
                color: #6c757d;
                background-color: rgba(255,255,255,.85);
                background-clip: padding-box;
                border-bottom: 1px solid rgba(0,0,0,.05);
            }
            .toast-body {
                padding:.75rem;
            }
            .close-button {
                padding: 0;
                background-color: transparent;
                border: 0;
                font-size:1.25rem;
            }
        `;
    }

    render() {
        return html`
        ${this.open ? html`
            <div class="toast">
                <div class="toast-header">
                    ${this.title}  
                    ${this._hasDelay() ? html`` : html`<button class="close-button" @click="${this.close}">&times;</button>`}
                </div>
                <div class="toast-body">
                    <slot></slot>
                </div>
            </div>` : ``
            }    
    `;
    }

    connectedCallback() {
        super.connectedCallback();
        this._setDefaults();
        this._setDelay();
    }

    updated(_changedProperties) {
        if(_changedProperties.has("open") || _changedProperties.has("delay")){
            this._setDelay();
        }
    }

    close() {
        this.open = false;
    }

    _setDefaults() {
        if (isNaN(this.delay)) {
            this.delay = 0;
        }
        if (isNaN(this.open)) {
            this.open = false;
        }
    }

    _setDelay() {
        if (this.open && this._hasDelay()) {
            setTimeout(() => {
                this.open = false;
            }, this.delay);
        }
    }

    _hasDelay() {
        return this.delay !== 0;
    }
}

customElements.define('dk-toast', DkToast);

