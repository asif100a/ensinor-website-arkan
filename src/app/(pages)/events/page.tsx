import SidebarCommon from "@/components/custom-ui/sidebar/SidebarCommon";
import TopBarCommon from "@/components/custom-ui/topBars/TopBarCommon";
import BannerPrimary from "@/components/Layout/Banners/BannerPrimary";
import React from "react";
import "@/custom_style/style.css";
import { eventsData } from "../../../../public/data/eventsData";
import EventCard from "@/components/custom-ui/cards/EventCard";
import { EventTypes } from "@/types";

export default function Events() {
  const newEventData = [...eventsData.slice(1), ...eventsData.slice(1)];

  return (
    <div>
      <BannerPrimary title="Events" link={{ name: "Events", url: "/events" }} />

      <main className="custom-container flex items-start gap-6">
        <SidebarCommon />

        <div className="w-full space-y-12">
          <TopBarCommon />

          {/* Event Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newEventData.map((event: EventTypes, index: number) => (
              <div key={index}>
                <EventCard
                  _id={index + ""}
                  thumbnail={event.thumbnail}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
