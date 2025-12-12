import { useEffect, useState } from "react";
import "./ServiceList.css";

export default function DisplayService() {
  const [serviceInfo, setService] = useState([]);

  useEffect(() => {
    const getService = async () => {
      const response = await fetch("https://reactsitebackend.onrender.com/api/services");
      const data = await response.json();
      setService(data);
    //   console.log(data)
    };
    getService();
  }, []);

  const allServices = [];

  for (let i = 0; i < serviceInfo.length; i++) {
    const singleService = serviceInfo[i];
    allServices.push(
      <div className="service">
        <div className="serviceName">
          <h3>{singleService.serviceName}</h3>
        </div>
        <div>
          <h3 className="servicePrice"> {singleService.servicePrice}</h3>
        </div>
      </div>
    );
  }

  return (
    <section className="serviceBorder">
      {allServices.length > 0 ? (
        <div className="serviceRow">{allServices}</div>
        ) : (  <p>Loading services...</p> )}
    </section>
  );
}
