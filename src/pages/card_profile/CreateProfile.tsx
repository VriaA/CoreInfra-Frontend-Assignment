import CardProfileIcon from "../../assets/icons/card_profile.svg?react";
import Header from "../../components/Header";
import SectionHeader from "./components/SectionHeader";
import ProfileDetailsForm from "./components/ProfileDetailsForm";
import { ProfileFormData } from "./components/ProfileDetailsForm";
import { FormEvent } from "react";
import FeesTable from "./components/FeesTable";

interface breadcrumbItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export default function CreateProfile() {
  const breadcrumbItems: breadcrumbItem[] = [
    {
      label: "Card Profile",
      path: "/card-profile",
      icon: <CardProfileIcon className="h-4 w-4" />,
    },
    {
      label: "Create Profile",
      path: "/card-profile/create",
    },
  ];

  const handleFormSubmit = (data: ProfileFormData, e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header
        hasBreadcrumb={true}
        breadcrumbItems={breadcrumbItems}
      />
      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Create Profile"
          description="Fill in profile details and add card fee."
        />
        <div className="mt-6">
          <ProfileDetailsForm onSubmit={handleFormSubmit} />
          <FeesTable />
          <button
            type="button"
            className="fee-btn-primary button-default mt-[35px] w-[293px]">
            Create Profile
          </button>
        </div>
      </main>
    </>
  );
}
