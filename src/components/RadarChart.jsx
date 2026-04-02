import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { radarData } from '../data/competitors';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export default function RadarChart() {
  const data = {
    labels: radarData.labels,
    datasets: [
      {
        label: 'TOOFTD',
        data: radarData.tooftd,
        backgroundColor: 'rgba(74, 103, 65, 0.15)',
        borderColor: '#4a6741',
        borderWidth: 2,
        pointBackgroundColor: '#4a6741',
        pointBorderColor: '#fff',
        pointRadius: 4,
      },
      {
        label: 'Competitor Avg',
        data: radarData.competitorAvg,
        backgroundColor: 'rgba(232, 224, 212, 0.2)',
        borderColor: '#c8b89a',
        borderWidth: 1.5,
        borderDash: [4, 4],
        pointBackgroundColor: '#c8b89a',
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        backgroundColor: '#2d2a26',
        titleFont: { family: 'DM Sans', size: 11 },
        bodyFont: { family: 'DM Sans', size: 11 },
        padding: 12,
        cornerRadius: 4,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          display: false,
        },
        grid: {
          color: 'rgba(0,0,0,0.06)',
        },
        angleLines: {
          color: 'rgba(0,0,0,0.06)',
        },
        pointLabels: {
          font: { family: 'DM Sans', size: 11, weight: '400' },
          color: '#9a9590',
        },
      },
    },
  };

  return (
    <div className="radar-chart">
      <Radar data={data} options={options} />
      <div className="radar-chart__legend">
        <div className="radar-chart__legend-item">
          <span className="radar-chart__legend-dot" style={{ background: '#4a6741' }} />
          TOOFTD
        </div>
        <div className="radar-chart__legend-item">
          <span className="radar-chart__legend-dot" style={{ background: '#c8b89a' }} />
          Competitor Avg
        </div>
      </div>
    </div>
  );
}
