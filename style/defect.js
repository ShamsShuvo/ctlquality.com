
JavaScript code (js/defect.js):

// Defect Data Entry Form
const form = document.querySelector('form');
const table = document.querySelector('table');
const totalDefectPct = document.querySelector('.total-defect-pct');

form.addEventListener('submit', (e) => {
e.preventDefault();

// Get form data
const date = form.date.value;
const unit = form.unit.value;
const line = form.line.value;
const buyer = form.buyer.value;
const po = form.po.value;
const color = form.color.value;
const style = form.style.value;
const item = form.item.value;
const inlineCheckQty = Number(form.inline_check_qty.value);
const inlineDefectQty = Number(form.inline_defect_qty.value);
const endTableCheckQty = Number(form.end_table_check_qty.value);
const endTableDefectQty = Number(form.end_table_defect_qty.value);
const endTableRejectQty = Number(form.end_table_reject_qty.value);
const cuttingRejectQty = Number(form.cutting_reject_qty.value);
const fabricRejectQty = Number(form.fabric_reject_qty.value);
const sewingRejectQty = Number(form.sewing_reject_qty.value);

// Calculate total check qty
const totalCheckQty = inlineCheckQty + endTableCheckQty;

// Calculate total defect qty
const totalDefectQty = inlineDefectQty + endTableDefectQty;

// Calculate total reject qty
const totalRejectQty = endTableRejectQty + cuttingRejectQty + fabricRejectQty + sewingRejectQty;

// Calculate total defect percentage
const totalDefectPctVal = ((totalDefectQty / totalCheckQty) *