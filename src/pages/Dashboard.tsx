import DashboardHeader from "./components/DashboardHeader";
import UserWelcomeBanner from "./components/UserWelcomeBanner";
import QuickAccess from "./components/QuickAccess";

export default function Dashboard() {
  return (
    <div className="min-h-svh bg-[#F8FBFF]">
      <DashboardHeader />
      <main className="px-5 pt-2 pb-5">
        <UserWelcomeBanner />
        <QuickAccess />
      </main>
    </div>
  );
}
