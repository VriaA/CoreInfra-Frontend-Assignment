import { analyticsCards } from "../../constants/analyticsData";
import AnalyticsCard from "./AnalyticsCard";
import { weeklyIncomeData } from "../../constants/WeeklyIncomeData";
import CardStatusDistribution from "./CardStatusDistribution";
import { cardStatusData } from "../../constants/cardStatusData";
import WeeklyIncome from "./WeeklyIncome";
import MonthlyIssuance from "./MonthlyIssuance";
import { monthlyData } from "../../constants/MonthlyIssuanceData";
import RecentCardRequests from "../../components/RecentCardRequests";

export default function Analytics() {
  return (
    <section className="mt-[11px] w-full">
      <h2 className="font-satoshi mb-[10px] flex items-center gap-2 text-lg leading-[27.4px] font-bold text-black">
        Analytics
        <span
          className="block w-full border-b-[0.38px] border-[#D0D5DD]"
          aria-hidden={true}></span>
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsCards.map((card, index) => (
          <AnalyticsCard
            key={index}
            {...card}
          />
        ))}
      </div>
      <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-4px)]">
          <MonthlyIssuance data={monthlyData} />
          <WeeklyIncome data={weeklyIncomeData} />
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-[calc(50%-4px)]">
          <RecentCardRequests />
          <CardStatusDistribution
            data={cardStatusData}
            totalCards={2450}
          />
        </div>
      </div>
    </section>
  );
}
