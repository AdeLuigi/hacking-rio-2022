import React from "react";
import './style.css';
import ChartRadial from "./../../../components/chart"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,
    Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer
  } from "recharts";

import LayoutAdmin from "./../../../components/layout";

const saudeData = [{
    "id": "Saude",
    "data": [
        {
            "x": "Qualidade",
            "color": "#10bb10",
            "y": 100
        },
    ]
}, {
    "id": "Ocorrência",
    "data": [
        {
            "x": "+5",
            "color": "#10bb10",
            "y": 100
        },
    ]
}]
const educacaoData = [{
    "id": "Educação",
    "data": [
        {
            "x": "Qualidade",
            "color": "#bb1010",
            "y": 30
        },
        {
            "x": "Ocorrência +15",
            "color": "#10bb10",
            "y": 100
        },
    ]
}]

const data = [
    {
      name: 'Saúde',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataGraf2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataGraficRagnarok = [
    {
      subject: 'Educação',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Saúde',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Transporte',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Combate a Fome',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Cultura',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Segurança',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

const Home = (props) => {
    return (
        <LayoutAdmin>
        <div style={{width:"100%", height: "100%",  }}>
            <h1 style={{fontSize:30}}>
                Principais demandas da Maré
            </h1>
        <ResponsiveContainer style={{margin:0}} width="70%" height="70%">
       
       <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataGraficRagnarok}>
         <PolarGrid />
         <PolarAngleAxis dataKey="subject" />
         <PolarRadiusAxis />
         <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
       </RadarChart>
       
     </ResponsiveContainer>
     
        </div>
        </LayoutAdmin >
    )
}

export default Home;