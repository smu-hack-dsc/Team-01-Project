import React from "react";
import CommunitiesPost from "components/CommunitiesPost";
import SearchBar from "components/SearchBar";
// import { useLocation } from "react-router-dom";

function Community() {
  return (
    <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
      <div className="flex flex-row sm:w-4/5 lg:w-2/3">
        <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl pb-5">
          Community
        </div>
        <div className="ml-10 grow">
          <SearchBar />
        </div>
      </div>
      <CommunitiesPost />
    </div>
  );
}

export default Community;
