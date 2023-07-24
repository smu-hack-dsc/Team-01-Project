import React from "react";
import CommunitiesPost from "components/CommunitiesPost";
// import { useLocation } from "react-router-dom";

function Community() {
  return (
    <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
      <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl pb-5">
        Community
      </div>
      <CommunitiesPost />
    </div>
  );
}

export default Community;
