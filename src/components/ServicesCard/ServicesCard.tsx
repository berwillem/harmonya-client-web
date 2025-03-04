import { useEffect, useRef, useState } from "react";
import "./ServicesCard.css";
import { useNavigate } from "react-router-dom";
import { SliderCardType } from "@/utils/types";

export default function ServicesCard({
  imageSrc,
  title,
  description,
  tags,
}: SliderCardType) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !(formRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  console.log("tags:", tags);
  return (
    <div
      className="card"
      onClick={() =>
        // navigate to service id page
        navigate("/service")
      }
    >
      <div className="image-container">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="tags-container">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
