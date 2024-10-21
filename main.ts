import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;
let promedioTemporadas: HTMLElement = document.getElementById('promedio-temporadas')!;
let seriesDetail: HTMLElement = document.getElementById('series-detail')!;

mostrarSeries(series);
mostrarPromedioTemporadas(series);

function mostrarDetalleSerie(serie: any): void {
  let tbodySerie = document.createElement('tbody');
  
  tbodySerie.innerHTML = `
    <tr>
      <td colspan="2">
        <img src="imagenes/${serie.image}" height="300">
      </td>
    </tr>
      <td colspan="2" class="h3 font-weight-bold">${serie.name}</td>
    </tr>
    <tr>
      <td colspan="2">${serie.description}</td>
    </tr>
    <tr>
      <td colspan="2">
        <a href="${serie.link}" target="_blank" class="btn btn-primary">More info</a>
      </td>
    </tr>
  `;

  seriesDetail.innerHTML = '';
  seriesDetail.appendChild(tbodySerie);
}

function mostrarPromedioTemporadas(series: any[]): void {
  let totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  let promedio = totalSeasons / series.length;
  promedioTemporadas.innerText = `Seasons average: ${promedio.toFixed(1)}`;
}

function mostrarSeries(series: any[]): void {
  let seriesTbody: HTMLElement = document.createElement('tbody');
  for (let serie of series) {
    let trElement: HTMLElement = document.createElement('tr');
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    trElement.addEventListener('click', () => mostrarDetalleSerie(serie));
    seriesTbody.appendChild(trElement);
  }
  seriesTable.appendChild(seriesTbody);
}






