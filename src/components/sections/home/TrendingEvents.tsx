import TrendingEventCard from "@/components/custom-ui/cards/TrendingEventCard";
import React from "react";
import { trendingEventsData } from "../../../../public/data/trendingEventsData";

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
          {trendingEventsData.map((event, index) => (
            <div key={index}>
              <TrendingEventCard
                thumbnail={event.thumbnail}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                href="#"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
