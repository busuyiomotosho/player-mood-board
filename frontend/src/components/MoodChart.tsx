'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { MoodResponse } from '@/types/mood';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MoodChartProps {
  data: MoodResponse;
}

const MoodChart: React.FC<MoodChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Happy 😃', 'Neutral 😐', 'Sad 😞'],
    datasets: [{
      data: [data.happy, data.neutral, data.sad],
      backgroundColor: [
        'rgba(76, 175, 80, 0.7)',
        'rgba(255, 193, 7, 0.7)',
        'rgba(244, 67, 54, 0.7)',
      ],
      borderColor: [
        'rgba(76, 175, 80, 1)',
        'rgba(255, 193, 7, 1)',
        'rgba(244, 67, 54, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    animation: {
      animateScale: true,
      duration: 1000,
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default MoodChart;