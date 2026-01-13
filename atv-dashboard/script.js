let atvs=[];

function addATV(){
  const name=atvName.value;
  const rev=+atvRevenue.value||0;
  const cost=+atvCost.value||0;
  const profit=rev-cost;
  atvs.push({name,profit});
  renderATV();
}

function renderATV(){
  atvTable.innerHTML='';
  atvs.sort((a,b)=>b.profit-a.profit);
  let totalProfit=0,totalRev=0,totalCost=0;
  atvs.forEach(a=>{
    totalProfit+=a.profit;
    totalRev+=a.profit>0?a.profit:0;
    totalCost+=a.profit<0?Math.abs(a.profit):0;
    atvTable.innerHTML+=`<tr><td>${a.name}</td><td>${a.profit}</td></tr>`;
  });
  netProfit.innerText=totalProfit;
}

function calcInvestment(){
  const init=+invInitial.value;
  const mCost=+invMonthlyCost.value;
  const mRev=+invRevenue.value;
  const mProfit=mRev-mCost;
  payback.innerText=mProfit>0?(init/mProfit).toFixed(1):'-';
  yearProfit.innerText=mProfit*12-init;
}

function exportPDF(){
  window.print();
}
