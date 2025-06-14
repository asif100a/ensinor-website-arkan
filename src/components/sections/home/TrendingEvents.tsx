import EventCard from "@/components/custom-ui/cards/EventCard";
import React from "react";
import { eventsData } from "../../../../public/data/eventsData";
import { EventTypes } from "@/types";

export default function TrendingEvents() {
  return (
    <section className="w-full h-fit relative overflow-hidden">
      <div className="custom-container space-y-12">
        <div className="w-full max-w-[605px] mx-auto space-y-2 text-center">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-bold text-black-primary leading-tight w-full z-10">
            Trending Events
          </h1>
          <p className="text-black-secondary text-lg">
            Stay in the loop with the most talked-about events happening right
            now. Don’t miss your chance to join the conversation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventsData.map((event: EventTypes, index: number) => (
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
    </section>
  );
}
