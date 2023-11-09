import React, { useEffect, useState } from "react";
import { BaseFetch, getToken } from "../utils/helper";
import { BASE_URL } from "../utils/constant";

function Resource() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      })
      .catch((error) => {
        console.log("error");
      });
  }, [data]);

  return (
    <div className="w-full max-w-xxl sm:px-32 px-10 whitespace-normal mt-4 space-y-3 overflow-x-hidden">
      {data.map((feed, index) => (
        <div key={index} className="flex-col bg-white p-6 rounded-md">
          <div className="mb-4">
            <div className="font-header font-bold text-lg">
              {feed.upload_date}
            </div>
            <div className="font-body text-sm font-semibold text-gray-500">
              {feed.date}
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
