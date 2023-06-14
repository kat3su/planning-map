"use client";

import { InfoWindow } from "@react-google-maps/api";
import { Application } from "./type";

interface Prop {
  application?: Application;
}
export default function ApplicationDetail({ application }: Prop) {
  return (
    <>
      {application && (
        <InfoWindow position={{ lat: application.lat, lng: application.lng }}>
          <div>
            <h1>{application.address}</h1>
            <h3>{application.date_received.toString()}</h3>
            <p>{application.description}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
