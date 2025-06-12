import React from "react";

export default function Map() {
  return (
    <section className="custom-container">
      <div className="w-full h-[600px] overflow-hidden rounded-lg lg:col-span-2">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}
