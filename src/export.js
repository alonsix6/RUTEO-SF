/* ============================================
   Linky - Exportación (CSV y Excel)
   ES Module Version
   ============================================ */

import { utmHistory } from './constants.js';
import { toast } from './utils.js';

/* --- Exportar a CSV --- */
export function exportCSV() {
  if (!utmHistory.length) return toast('Sin datos para exportar');

  const h = ['division', 'plataforma', 'medium', 'objetivo', 'tipoCampana', 'mes', 'ano', 'placement', 'codigoPieza', 'numeroPieza', 'motivo', 'urlDestino', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'urlCompleta', 'createdAt'];

  const rows = utmHistory.map(u =>
    h.map(k => `"${(u[k] || '').replace(/"/g, '""')}"`).join(',')
  );

  const csv = [h.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'utm_history.csv';
  a.click();

  toast('CSV descargado');
}

/* --- Exportar a Excel --- */
export async function exportExcel() {
  if (!utmHistory.length) return toast('Sin datos para exportar');

  try {
    // Importar SheetJS
    const XLSX = await import('https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs');

    // Headers en español
    const headers = [
      'División',
      'Plataforma',
      'Medium',
      'Objetivo',
      'Tipo Campaña',
      'Mes',
      'Año',
      'Placement',
      'Código Pieza',
      'Número Pieza',
      'Motivo',
      'URL Destino',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'UTM Content',
      'URL Completa',
      'Fecha Creación'
    ];

    // Mapear los datos
    const data = utmHistory.map(u => [
      u.division || '',
      u.plataforma || '',
      u.medium || '',
      u.objetivo || '',
      u.tipoCampana || '',
      u.mes || '',
      u.ano || '',
      u.placement || '',
      u.codigoPieza || '',
      u.numeroPieza || '',
      u.motivo || '',
      u.urlDestino || '',
      u.utm_source || '',
      u.utm_medium || '',
      u.utm_campaign || '',
      u.utm_content || '',
      u.urlCompleta || '',
      u.createdAt ? new Date(u.createdAt).toLocaleString('es-PE') : ''
    ]);

    // Crear workbook y worksheet
    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Historial UTMs');

    // Anchos de columna optimizados
    const colWidths = [
      { wch: 12 },  // División
      { wch: 14 },  // Plataforma
      { wch: 14 },  // Medium
      { wch: 14 },  // Objetivo
      { wch: 16 },  // Tipo Campaña
      { wch: 12 },  // Mes
      { wch: 8 },   // Año
      { wch: 12 },  // Placement
      { wch: 14 },  // Código Pieza
      { wch: 14 },  // Número Pieza
      { wch: 20 },  // Motivo
      { wch: 35 },  // URL Destino
      { wch: 12 },  // UTM Source
      { wch: 14 },  // UTM Medium
      { wch: 40 },  // UTM Campaign
      { wch: 45 },  // UTM Content
      { wch: 60 },  // URL Completa
      { wch: 20 }   // Fecha Creación
    ];
    ws['!cols'] = colWidths;

    // Aplicar estilos a las celdas del header
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C });
      if (!ws[cellAddress]) continue;

      if (!ws[cellAddress].s) ws[cellAddress].s = {};
      ws[cellAddress].s = {
        fill: {
          patternType: "solid",
          fgColor: { rgb: "6366F1" }
        },
        font: {
          name: "Arial",
          sz: 11,
          bold: true,
          color: { rgb: "FFFFFF" }
        },
        alignment: {
          horizontal: "center",
          vertical: "center"
        }
      };
    }

    // Aplicar estilos zebra striping
    for (let R = range.s.r + 1; R <= range.e.r; ++R) {
      const isEven = (R - 1) % 2 === 0;
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[cellAddress]) continue;

        if (!ws[cellAddress].s) ws[cellAddress].s = {};
        ws[cellAddress].s = {
          fill: {
            patternType: "solid",
            fgColor: { rgb: isEven ? "F8FAFC" : "FFFFFF" }
          },
          font: {
            name: "Arial",
            sz: 10,
            color: { rgb: "1E293B" }
          },
          alignment: {
            vertical: "center"
          }
        };
      }
    }

    // Generar archivo
    const timestamp = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `utm_history_${timestamp}.xlsx`, {
      bookType: 'xlsx',
      cellStyles: true,
      type: 'binary'
    });

    toast('Excel descargado con formato');
  } catch (error) {
    console.error('Error exportando Excel:', error);
    toast('Error al exportar Excel. Intenta con CSV.');
  }
}
