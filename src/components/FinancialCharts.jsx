import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { revenueVsCost, profitMargin } from '../data/financials';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Tooltip);

const tooltipStyle = {
  backgroundColor: '#2d2a26',
  titleFont: { family: 'DM Sans', size: 11 },
  bodyFont: { family: 'DM Sans', size: 11 },
  padding: 12,
  cornerRadius: 4,
};

export function RevenueChart() {
  const data = {
    labels: revenueVsCost.labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueVsCost.revenue,
        backgroundColor: '#4a6741',
        borderRadius: 4,
        barPercentage: 0.7,
      },
      {
        label: 'Cost',
        data: revenueVsCost.cost,
        backgroundColor: '#e8e0d4',
        borderRadius: 4,
        barPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: $${ctx.raw.toLocaleString()}`,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'DM Sans', size: 10 }, color: '#9a9590' },
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'DM Sans', size: 10 },
          color: '#9a9590',
          callback: (v) => `$${v / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="fin-chart">
      <p className="fin-chart__label">Revenue vs Cost (5-Year)</p>
      <div className="fin-chart__container">
        <Bar data={data} options={options} />
      </div>
      <div className="fin-chart__legend">
        <span><i style={{ background: '#4a6741' }} /> Revenue</span>
        <span><i style={{ background: '#e8e0d4' }} /> Cost</span>
      </div>
    </div>
  );
}

export function MarginChart() {
  const data = {
    labels: profitMargin.labels,
    datasets: [
      {
        label: 'Profit Margin',
        data: profitMargin.data,
        borderColor: '#4a6741',
        backgroundColor: 'rgba(74, 103, 65, 0.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#4a6741',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: (ctx) => `Margin: ${ctx.raw}%`,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'DM Sans', size: 10 }, color: '#9a9590' },
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { family: 'DM Sans', size: 10 },
          color: '#9a9590',
          callback: (v) => `${v}%`,
        },
      },
    },
  };

  return (
    <div className="fin-chart">
      <p className="fin-chart__label">Profit Margin Trend</p>
      <div className="fin-chart__container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
