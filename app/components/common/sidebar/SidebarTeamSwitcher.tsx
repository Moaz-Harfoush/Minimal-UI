"use client";

import { useState, useRef, memo } from "react";
import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";
import { useCloseOnOutsideClick } from "@/app/hooks/useCloseOnOutsideClick";
import { TEAMS_DATA } from "@/app/components/common/sidebar/sidebarData";

const SidebarTeamSwitcher = () => {
  const [activeTeam, setActiveTeam] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(TEAMS_DATA[0]);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useCloseOnOutsideClick(dropDownRef, () => setActiveTeam(false));

  return (
    <div className="relative shrink-0" ref={dropDownRef}>
      <div
        onClick={() => setActiveTeam(!activeTeam)}
        className="flex items-center justify-between bg-soft-gray transition-colors rounded-xl px-4 py-6 border border-border-gray cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Image
            src={selectedTeam.logo}
            alt={`${selectedTeam.name} logo`}
            width={24}
            height={24}
            className="rounded-sm object-contain"
          />
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-dark-gray leading-none">
              {selectedTeam.name}
            </h4>
            <span
              className={`${
                selectedTeam.type === "Free"
                  ? "text-medium-gray bg-border-gray/70"
                  : "bg-bright-cyan text-bright-blue"
              } px-2 font-semibold text-[12px] py-2 rounded tracking-wider`}
            >
              {selectedTeam.type}
            </span>
          </div>
        </div>
        <ChevronsUpDown className="w-4 h-4 text-medium-gray shrink-0" />
      </div>

      <ul
        className={`absolute top-0 left-0 w-full bg-pure-white border border-border-gray rounded-xl shadow-xl z-50 p-2 flex flex-col gap-1 transition-all duration-200 origin-top-left ${
          activeTeam
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {TEAMS_DATA.map((team) => {
          const isSelected = selectedTeam.id === team.id;
          return (
            <li key={team.id}>
              <button
                onClick={() => {
                  setSelectedTeam(team);
                  setActiveTeam(false);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-soft-gray transition-colors duration-200 cursor-pointer text-left outline-none ${
                  isSelected ? "bg-soft-gray" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={team.logo}
                    alt={`${team.name} workspace logo`}
                    className="w-6 h-6 rounded object-cover"
                  />
                  <span className="text-sm font-semibold text-dark-gray">
                    {team.name}
                  </span>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                    team.type === "Free"
                      ? "text-medium-gray bg-border-gray/70"
                      : "bg-bright-cyan text-bright-blue"
                  }`}
                >
                  {team.type}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(SidebarTeamSwitcher);
