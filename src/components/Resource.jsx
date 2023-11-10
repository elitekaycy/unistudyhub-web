import React, { useEffect, useState } from "react";
import { BaseFetch, getToken } from "../utils/helper";
import { BASE_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

function Resource() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetch(`${BASE_URL}/resources`, {
      headers,
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        // console.log(result);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [data]);

<<<<<<< Updated upstream
  const FormatDate = (dateString) => {
    // Replace this with your date string
    const originalDate = new Date(dateString);

    // Get individual date components
    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // Months are zero-based
    const day = originalDate.getDate();
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();
    const seconds = originalDate.getSeconds();

    // Format the date components into a readable string
    return `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day} ${hours}:${minutes}:${seconds}`;
  };

=======
  // const [dates, setDates] = useState([]);

  // function formatDate(timestamp) {
  //   const dateTime = new Date(timestamp);
  //   const year = dateTime.getFullYear();
  //   const month = dateTime.getMonth() + 1; // Months are zero-indexed
  //   const day = dateTime.getDate();
  //   const hours = dateTime.getHours();
  //   const minutes = dateTime.getMinutes();
  //   const seconds = dateTime.getSeconds();

  //   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // }

  // function getDates() {
  //   // Assuming data.upload_date is an array of timestamps
  //   const newDates = data.upload_date.map((timestamp) => formatDate(timestamp));
  //   setDates(newDates);
  // }
>>>>>>> Stashed changes
  return (
    <div className="w-full max-w-xxl sm:px-32 px-10 whitespace-normal mt-4 space-y-3 overflow-x-hidden">
      {/* <Link to={"/feedDetail"}>
        
      </Link> */}
      {data?.map((feed, index) => (
        <div
          onClick={() =>
            navigate("/feeddetails", { replace: true, state: { feed: feed } })
          }
          key={index}
          className="flex-col bg-white  cursor-pointer p-6 rounded-md"
        >
          <div className="mb-4">
<<<<<<< Updated upstream
            <div className="font-header font-bold text-lg">
              {FormatDate(feed.upload_date)}
            </div>
=======
            <div className="font-header font-bold text-lg">{feed.title}</div>
>>>>>>> Stashed changes
            <div className="font-body text-sm font-semibold text-gray-500">
              {feed.upload_date}
            </div>
          </div>

          <div className="leading-6 mb-5 font-body">{feed.description}</div>

          <div className="flex space-x-14">
            <div className="flex items-center justify-start space-x-2 ">
              <span
                className={`material-symbols-outlined text-md text-bgsecondary cursor-pointer`}
              >
                thumb_up
              </span>
              <div className="font-body text-sm font-semibold">{`${feed.likes} Likes`}</div>
            </div>
            <div className="flex items-center justify-start  space-x-2">
              <span
                className={`material-symbols-outlined text-md text-bgsecondary cursor-pointer`}
              >
                thumb_down
              </span>
              <div className="font-body text-sm font-semibold">{`${feed.reports} Reports`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resource;
