import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    // plugins,
    ChartData,
    ChartOptions,
    ArcElement
  } from "chart.js";
  import { Bar, Doughnut } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  );
  
  const months = ["January", "February", "March", "April", "May", "June", "July"];


  interface BarChartProps {
    horizontal?:boolean;
    data_1:number[];
    data_2:number[];
    title_1: string;
    title_2: string;
    bgcolor_1: string;
    bgcolor_2: string;
    labels?: string[];
  }

  export function BarChart({horizontal = false, data_1=[], data_2=[], title_1, title_2, bgcolor_1, bgcolor_2, labels = months}: BarChartProps) {

    const option:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    };

    const data:ChartData<"bar", number[], string> = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgcolor_1,
                barThickness: "flex",
                categoryPercentage: 0.45
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgcolor_2,
                barThickness: "flex",
                categoryPercentage: 0.45
            },
        ]
    }

    return <Bar options={option} data={data}/>
  };

  interface DoughnutChartProps {
    labels: string[];
    data:number[];
    bgcolor: string[];
    cutout?: number|string;
    legends?: boolean;
    offset?:number[];
  }

  export function DoughnutChart({labels, data, bgcolor, cutout, legends=true, offset}: DoughnutChartProps) {

    const doughnutoption:ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: "bottom",
                labels: {
                    padding: 40,
                },
            },
        },
        cutout,
    };

    const doughnutdata: ChartData<"doughnut", number[], string> = {
        labels,
        datasets:[
            {
                data,
                backgroundColor: bgcolor,
                borderWidth:0,
                offset,
            }
        ]
    }

    return <Doughnut data={doughnutdata} options={doughnutoption}/>
  }