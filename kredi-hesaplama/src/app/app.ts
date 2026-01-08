import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `

  <h1>KREDİ HESAPLAMA</h1>
  <div>
    <label>Kredi Tutarı</label>
    <input [(ngModel)]="krediTutari">
  </div>
  <div>
    <label>Taksit Sayısı</label>
    <select [(ngModel)]="taksitSayisi">
      @for (data of taksitler ; track data) {
        <option>{{ data }}</option>
      }
    </select>
  </div>
  <div>
    <button (click)="hesapla()">Kredi Hesapla</button>
  </div>
  <hr>
  <h1>{{result}}</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>Taksit</th>
        <th>Taksit Tutarı</th>
        <th>Kalan Geri Ödeme</th>
      </tr>
    </thead>
    <tbody>
      @for (data of odemePlani ; track data) {
        <tr>
          <td>{{ $index + 1 }}</td>
          <td>{{ data.taksitTutari}}</td>
          <td>{{ data.kalanGeriOdeme}}</td>
        </tr>
      }
    </tbody>
  </table>




  `
})
export class App {
  krediTutari : number=0;
  taksitSayisi : number=3;
  taksitler:number[]=[3,6,12,24];

  result : string="";

  odemePlani:{taksitTutari:number, kalanGeriOdeme:number}[]=[];

  hesapla(){
    const taksitTutari :number = (this.krediTutari / this.taksitSayisi)*1.29;
    let toplamGeriOdeme :number= taksitTutari * this.taksitSayisi;
    this.result = `Taksit Tutarı: ${taksitTutari} - Taksit Sayısı: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`;

    this.odemePlani=[];
    for(let i=0; i < this.taksitSayisi; i++){
      toplamGeriOdeme-=taksitTutari;
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme - (taksitTutari * i)
      }

      this.odemePlani.push(data);
    }
  }

}
