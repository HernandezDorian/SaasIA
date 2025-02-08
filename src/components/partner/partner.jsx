import React, { useEffect, useRef } from "react";
import AliExpress from "../../assets/img/partner/AliExpress.svg";
import Amazon from "../../assets/img/partner/Amazon.svg";
import Apple from "../../assets/img/partner/Apple.svg";
import eBay from "../../assets/img/partner/eBay.svg";
import Etsy from "../../assets/img/partner/Etsy.svg";
import Nike from "../../assets/img/partner/Nike.svg";
import SamsungElectronics from "../../assets/img/partner/SamsungElectronics.svg";
import Walmart from "../../assets/img/partner/Walmart.svg";
import "./partner.css";
const partnerData = [
  { img: AliExpress, alt: "AliExpress" },
  { img: Amazon, alt: "Amazon" },
  { img: Apple, alt: "Apple" },
  { img: eBay, alt: "eBay" },
  { img: Etsy, alt: "Etsy" },
  { img: Nike, alt: "Nike" },
  { img: SamsungElectronics, alt: "Samsung Electronics" },
  { img: Walmart, alt: "Walmart" },
];

const Partner = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, 40); // Adjust the speed of scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="partner" ref={scrollRef}>
      <div className="partner-scroll">
        {partnerData.map((partner, index) => (
          <img key={index} src={partner.img} alt={partner.alt} />
        ))}
        {partnerData.map((partner, index) => (
          <img
            key={index + partnerData.length}
            src={partner.img}
            alt={partner.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
