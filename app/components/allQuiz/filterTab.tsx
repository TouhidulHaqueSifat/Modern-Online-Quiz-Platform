import React from 'react'

interface FilterTabsProps {
  active: string;
  onChange: (filter: string) => void;
}
const FILTER_TABS = ["All", "Cognitive", "Technical"];

const FilterTabs = ({ active, onChange }: FilterTabsProps) => {
  return (
    <div className='flex items-center gap-2'>
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === tab
                ? "bg-[#E7E8EA] text-[#191C1E]"   // active: dark pill
                : "bg-white text-[#777587] hover:bg-gray-100" // inactive: white
            }`}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        ))}
    </div>
  )
}

export default FilterTabs