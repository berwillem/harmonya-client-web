import { useEffect, useRef, useState } from "react";
import "./ServicesCard.css"
interface ServicesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];

}

export default function ServicesCard({
  imageSrc,
  title,
  description,
  tags,
}: ServicesCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

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

  return (
    <div className="card">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="card-image" />

      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
}
