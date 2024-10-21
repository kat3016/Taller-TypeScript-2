import { series } from './data.js';
var seriesTable = document.getElementById('series');
var promedioTemporadas = document.getElementById('promedio-temporadas');
var seriesDetail = document.getElementById('series-detail');
mostrarSeries(series);
mostrarPromedioTemporadas(series);
function mostrarDetalleSerie(serie) {
    var tbodySerie = document.createElement('tbody');
    tbodySerie.innerHTML = "\n    <tr>\n      <td colspan=\"2\">\n        <img src=\"imagenes/".concat(serie.image, "\" height=\"300\">\n      </td>\n    </tr>\n      <td colspan=\"2\" class=\"h3 font-weight-bold\">").concat(serie.name, "</td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">").concat(serie.description, "</td>\n    </tr>\n    <tr>\n      <td colspan=\"2\">\n        <a href=\"").concat(serie.link, "\" target=\"_blank\" class=\"btn btn-primary\">More info</a>\n      </td>\n    </tr>\n  ");
    seriesDetail.innerHTML = '';
    seriesDetail.appendChild(tbodySerie);
}
function mostrarPromedioTemporadas(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var promedio = totalSeasons / series.length;
    promedioTemporadas.innerText = "Seasons average: ".concat(promedio.toFixed(1));
}
function mostrarSeries(series) {
    var seriesTbody = document.createElement('tbody');
    var _loop_1 = function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        trElement.addEventListener('click', function () { return mostrarDetalleSerie(serie); });
        seriesTbody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
