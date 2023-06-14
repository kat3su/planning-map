"use client";

import { Marker } from "@react-google-maps/api";
import { Application } from "./type";
import React from "react";

interface Prop {
  applications?: Application[];
  onSelect: (application: Application) => void;
}
export default function PlanMarkers({ applications, onSelect }: Prop) {
  return (
    <>
      {applications?.map((application) => (
        <Marker
          key={application.id}
          position={{ lat: application.lat, lng: application.lng }}
          onClick={() => onSelect(application)}
        />
      ))}
    </>
  );
}
