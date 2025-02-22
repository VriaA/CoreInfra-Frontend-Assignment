import Header from "../../components/Header";
import SectionHeader from "./components/SectionHeader";
import SearchAndActions from "./components/SearchAndActions";
import CardProfileIcon from "../../assets/icons/card_profile.svg?react";
import CardProfileTable from "./components/CardProfileTable";
import { cardProfileData } from "../../constants/CardProfileData";

export default function CardProfile() {
  return (
    <>
      <Header
        path="/card-profile"
        hasBreadcrumb={false}
        icon={
          <CardProfileIcon
            width={16}
            height={16}
            aria-hidden={true}
            fill="001735"
          />
        }
        name="Card profile"
      />

      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Card Profile"
          description="Create, view and edit card profiles here."
        />
        <SearchAndActions />
        <CardProfileTable data={cardProfileData} />
      </main>
    </>
  );
}
