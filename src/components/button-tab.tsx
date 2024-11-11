import React from 'react';

interface ButtonTabType {
  label: string;
  value: string;
  currentTab: string;
  setCurrentTab: any;
}

export const ButtonTab = ({
  label,
  value,
  currentTab,
  setCurrentTab,
}: ButtonTabType) => {
  return (
    <button
      className={`text-left lg:text-lg text-sm pb-4 border-b-2 font-semibold hover:text-[#212847] ${
        currentTab === value
          ? 'border-black'
          : 'border-[#9f9073] text-[#9f9073]'
      }`}
      onClick={() => setCurrentTab(value)}
    >
      {label}
    </button>
  );
};
