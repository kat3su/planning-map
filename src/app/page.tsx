"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Map from "./map";
import SearchBox from "./search-box";
import { useFetch } from "usehooks-ts";
import { subYears } from "date-fns";
import PlanMarkers from "./plan-markers";
import { Application, Plan } from "./type";
import ApplicationDetail from "./application-detail";
import planningService from "@/services/planning-service";

export default function Home() {
  const [applications, setApplications] = useState<Application[]>();
  const [selectedApplication, setSelectedApplication] = useState<Application>();
  const [map, setMap] = useState<google.maps.Map>();
  const showApplicationDetail = (application: Application) => {
    setSelectedApplication(application);
  };

  // Update map to the selected location
  const updateMap = async (location: { lat: number; lng: number }) => {
    setApplications(
      await planningService.searchPlans(location.lat, location.lng, 1000)
    );
    map?.setCenter(location);
    map?.setZoom(14);
  };
  return (
    <div className="relative w-screen h-screen">
      <Map onLoad={setMap}>
        <PlanMarkers
          applications={applications}
          onSelect={showApplicationDetail}
        />
        <ApplicationDetail application={selectedApplication} />
        <SearchBox onSearch={updateMap}></SearchBox>
      </Map>
    </div>
  );
}
