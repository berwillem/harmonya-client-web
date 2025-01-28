import React, { useRef } from "react";
import "./servicesTitle.css"; // Import the CSS file
import { MdFaceRetouchingNatural, MdOutlineEventSeat } from "react-icons/md";
import { GiHairStrands } from "react-icons/gi";
import { PiBaby, PiHairDryerBold } from "react-icons/pi";
import { HiMiniScissors } from "react-icons/hi2";

interface Service {
  icon: JSX.Element;
  label: string;
}

const services: Service[] = [
  { icon: <MdFaceRetouchingNatural />, label: "Coiffure Hommes" },
  { icon: <GiHairStrands />, label: "Coiffure Femmes" },
  { icon: <PiBaby />, label: "Coupe enfant" },
  { icon: <PiHairDryerBold />, label: "Brushing wavy" },
  { icon: <HiMiniScissors />, label: "Soin kératine" },
  { icon: <PiHairDryerBold />, label: "Lissage au tanin" },
  { icon: <MdOutlineEventSeat />, label: "Lissage brésilien" },
  { icon: <MdOutlineEventSeat />, label: "Lissage brésilien" },
  { icon: <MdOutlineEventSeat />, label: "Lissage brésilien" },
  { icon: <MdOutlineEventSeat />, label: "Lissage brésilien" },
  { icon: <MdOutlineEventSeat />, label: "Lissage brésilien" },
];

export default function ScrollableServiceList(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.scrollBehavior = "auto"; // Disable smooth scrolling while dragging
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging.current) return;
    const container = containerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const distance = x - startX.current;
    container.scrollLeft = scrollLeft.current - distance;
  };

  const handleMouseUpOrLeave = (): void => {
    isDragging.current = false;
    const container = containerRef.current;
    if (container) {
      container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    }
  };

  return (
    <div
      className="scrollable-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div className="scrollable-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h1 className="service-label">{service.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
