import React, { useEffect, useRef } from "react";
import "./dashboard.scss";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { TRequest } from "../../types/types";
import { Button, CircularProgress } from "@mui/material";
import { AppDispatch } from "../../containers/store/store";
import { useDispatch } from "react-redux";
import { downloadExcel } from "../../containers/store/dashboard.slice";

type Props = {
  requests: TRequest[];
  loading: boolean;
  error: string | null;
};

const Dashboard: React.FC<Props> = ({ requests, loading, error }) => {
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const lineChartRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (requests.length > 0) {
      const pieChartConfig: ChartConfiguration<"pie"> = {
        type: "pie",
        data: {
          labels: ["Paid", "Not Paid"],
          datasets: [
            {
              label: "Payment Status",
              data: [
                requests.filter((request) => request.paid).length,
                requests.filter((request) => !request.paid).length,
              ],
              backgroundColor: ["#109CF1", "red"],
              borderColor: ["#36a2eb", "#ff6384"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  if (tooltipItem.raw) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                  }
                  return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
                },
              },
            },
          },
        },
      };

      const lastRequests = requests.slice(Math.max(requests.length - 10, 0)); // Take the last 10 requests
      const lineChartConfig: ChartConfiguration<"line"> = {
        type: "line",
        data: {
          labels: lastRequests.map((request) => request.id.toString()),
          datasets: [
            {
              label: "Service",
              data: lastRequests.map((request) => request.service),
              fill: false,
              borderColor: "#109CF1",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  if (tooltipItem.raw) {
                    return `Service: ${tooltipItem.raw}`;
                  }
                  return `Service: ${tooltipItem.formattedValue}`;
                },
              },
            },
          },
        },
      };

      if (pieChartRef && pieChartRef.current) {
        new Chart(pieChartRef.current, pieChartConfig);
      }

      if (lineChartRef && lineChartRef.current) {
        new Chart(lineChartRef.current, lineChartConfig);
      }
    }
  }, [requests]);

  const handleDownloadExcel = () => {
    dispatch(downloadExcel());
  };

  return (
    <div className="dashboard">
      {loading ? (
        <CircularProgress className="loading" />
      ) : (
        <div className="chart-container">
          <canvas
            ref={pieChartRef}
            id="pieChart"
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          ></canvas>
          <canvas
            ref={lineChartRef}
            id="lineChart"
            style={{
              maxWidth: "650px",
              maxHeight: "400px",
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          ></canvas>
        </div>
      )}
      <div className="buttons">
        <Button
          onClick={handleDownloadExcel}
          className="download-excel"
          variant="contained"
        >
          Скачать Excel
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
