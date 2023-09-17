import DoughnutChart from "../../charts/DoughnutChart";
//import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  const { labels, values } = useAcademystats();
  //const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const departmentToAcademy = {
    "心理所一般組": "理學院",
    "心理學系": "理學院",
    "創新領域學士學位學程": "創新學院",
    "電機工程學系": "電資學院",
    "生物機電工程學系": "生農學院",
    "數學系": "理學院",
    "經濟學系": "社會科學院",
    "經濟系": "社會科學院",
    "物理學系": "理學院",
    "科際整合法律學研究所": "法學院",
    "材料科學與工程學系": "工學院",
    "工商管理學系 科技管理組": "管理學院",
    "工商管理學系": "管理學院",
    "會計學系": "社會科學院",
    "物理治療學系": "醫學院",
    "國際企業學系": "管理學院",
    "工程科學及海洋工程學系": "工學院",
    "醫學工程學系": "工學院",
    "戲劇學系": "文學院",
    "資訊管理學系": "管理學院",
    "資訊工程學系": "電資學院",
    "資訊工程研究所": "電資學院",
    "生醫電資所": "電資學院",
    "外國語文學系 / 圖書資訊學系": "文學院",
    "外國語文學系/社會學系": "文學院",
    "歷史學系": "文學院",
  };
  if (!labels || !values) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }
  //console.log("Labels:", labels);
  //console.log("Values:", values);
  const academyCounts = {};
  // Iterate through the labels and values to aggregate counts by academy
  for (let i = 0; i < labels.length; i++) {
    const department = labels[i];
    const value = values[i];
    const academy = departmentToAcademy[department] || department; // Use the department itself if no mapping
    if (academyCounts[academy]) {
      academyCounts[academy] += value;
    } else {
      academyCounts[academy] = value;
    }
  }

  const chartData = {
    labels: Object.keys(academyCounts),
    datasets: [
      {
        label: "Distribution of colleges",
        data: Object.values(academyCounts),
        backgroundColor: Object.keys(academyCounts).map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
