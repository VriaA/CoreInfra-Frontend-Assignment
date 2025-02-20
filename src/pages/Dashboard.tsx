import DashboardHeader from "./components/DashboardHeader";
import UserWelcomeBanner from "./components/UserWelcomeBanner";
export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <main className="px-5 pt-2 pb-5">
        <UserWelcomeBanner />
      </main>
    </div>
  );
}
