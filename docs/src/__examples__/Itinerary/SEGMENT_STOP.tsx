import React from "react";
import { ItinerarySegmentStop, ItinerarySegment } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <ItinerarySegment>
      <ItinerarySegmentStop
        city="Moscow"
        station="Sheremetyevo International Airport (SVO)"
        date="Fri, 19.10"
        time="14:05"
      />
    </ItinerarySegment>
  ),
  exampleKnobs: [
    {
      component: "ItinerarySegment",
      knobs: [
        { name: "label", type: "text", defaultValue: "" },
        { name: "noElevation", type: "boolean", defaultValue: false },
      ],
    },
    {
      component: "ItinerarySegmentStop",
      knobs: [
        { name: "date", type: "text", defaultValue: "Fri, 19.10" },
        { name: "time", type: "text", defaultValue: "14:05" },
        { name: "station", type: "text", defaultValue: "Sheremetyevo International Airport (SVO)" },
        { name: "city", type: "text", defaultValue: "Moscow" },
        { name: "canceled", type: "boolean", defaultValue: false },
        { name: "minWidth", type: "number", defaultValue: 60 },
        {
          name: "type",
          type: "select",
          defaultValue: "",
          options: ["warning", "critical", "info", "success"],
        },
      ],
    },
  ],
};
