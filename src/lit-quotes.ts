import { LitElement, html, css} from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from 'lit/directives/repeat.js';
import '@shoelace-style/shoelace/dist/components/card/card'
import '@shoelace-style/shoelace/dist/components/textarea/textarea'
import '@shoelace-style/shoelace/dist/components/input/input'

export interface Quote {
    id:string;
    author:string;
    content:string;
}

@customElement('lit-quotes')

export class LitQuotes extends LitElement {
@property({type:Array}) quotes:Quote[] = [
    {
        id:'1',
        author:'Paulo Coelho',
        content:'Be brave. Take risks. Nothing can substitute experience.'

    }, 
    {
        id:'2',
        author:'Jim Rohn',
        content:'Discipline is the bridge between goals and accomplishment.'
    },
    {
        id:'3',
        author:'John W.Garnder',
        content:'Life is the art of drawing without an eraser.'
    }, 
    {
        id:'4',
        author:'Plato',
        content:'Human behavior flows from three main sources: desire, emotion, and knowledge.',
    }
];
    render(){
        return html`
        <sl-card>
            <div>
                <h1>Quotes</h1>
                
                <sl-textarea placeholder='Post a quote...'></sl-textarea>
                <sl-input placeholder='input author here...'></sl-input>
            </div>

            <div class='container'>
          
            ${repeat(this.quotes, (quote) => quote.id, (quote) => html`
                    <div class='quotes-wrapper'>
                        <strong>${quote.author}</strong>
                        <div class='content-style'>${quote.content}</div>
                    </div>
                ` 
            )}
            </div>
          
        </sl-card>
        `
    }

    static styles = css`
    :host {
      display: block;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      font-family: sans-serif;
      overflow:hidden;
      /* margin:5rem; */
    }

    sl-card {
        margin:5rem;
      width: 44%;
      height:fit-content;
      border:1px solid var(--card-bg);
      border-radius:var(--gen-border-radius);
      padding:1rem;
      background-color:var(--card-bg);
      color:var(--primary-color);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

      /* margin-block-start: 16px; */
    }
    sl-textarea{
        width:99.7%;
        border:1px solid var(--textarea-bg);
        background-color:var(--textarea-bg);
        border-radius:var(--gen-border-radius);
        margin:0.5rem 0;
        padding:0.8rem;
        color:var(--primary-color);
    }

    sl-input{
        margin-top:1rem;
        margin-bottom:3rem;
        border-bottom:1px solid var(--primary-color);
        width:fit-content;
        padding:0.3rem;
        color:var(--primary-color);
        
        
    }

   
.container{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:1rem;
    justify-content:flex-start;
    margin-bottom:1rem;
}
    .quotes-wrapper{
        width:25%;
        height:120px;
        /* margin-top:0.5rem; */
        /* margin-bottom:1rem; */
        padding:1rem;
        background-color:var(--quote-card);
        border-radius:var(--gen-border-radius);
    }

    .content-style{
        margin-top:0.5rem;
    }


  `;
}

declare global{
    interface HTMLTagNameMap {
        'lit-quotes':LitQuotes;
    }
}