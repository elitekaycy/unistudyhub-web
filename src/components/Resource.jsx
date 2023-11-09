
import React, { useEffect, useState } from "react";
import { BaseFetch, getToken } from "../utils/helper";
import { BASE_URL } from "../utils/constant";


function Resource() {
  // const Feed = [
  //   {
  //     name: "Ekow Amissah",
  //     date: "Friday, May 28, 5:30 PM",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis excepturi quos exercitationem illum reprehenderit adipisci olorum quia ab natus, illo quasi quidem corporis. Dignissimos porro quas voluptatem velit omnis consequuntur cumque quo saepe sit! Earum, sunt atque.",
  //     likes: 340,
  //     reports: 2,
  //   },
  //   {
  //     name: "Donald Amankwah",
  //     date: "Monday, January 28, 3:30 AM",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis excepturi quos exercitationem illum reprehenderit adipisci olorum quia ab natus, illo quasi quidem corporis. ",
  //     likes: 340,
  //     reports: 2,
  //   },
  //   {
  //     name: "Elon Ayariga",
  //     date: "Tuesday, December 28, 4:00 PM",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem totam, mollitia excepturi amet facere. Corrupti natus dolor maiores labore accusantium tempora autem, quos ea, asperiores ex laborum, impedit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi ipsam incidunt fuga similique dolor iusto nihil! Voluptatibus temporibus, quis beatae odio, amet inventore, quo animi enim dolore cumque natus?",
  //     likes: 340,
  //     reports: 2,
  //   },
  // ];

  // useEffect(() => {
  //   const connection = createConnection(serverUrl, roomId);
  //   connection.connect();
  //   return () => {
  //     connection.disconnect();
  //   };
  // }, [serverUrl, roomId]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getResource = async () => {
  //   try {
  //     const token = getToken();
  //     const getUser = await BaseFetch(`${BASE_URL}/resources`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     return getUser;
  //   } catch (err) {
  //     return null;
  //   }
  // };
  const headers = {
    Authorization: "Token " + `${getToken}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  // fetch(`${BASE_URL}/resources`, {
  //   headers,
  // })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.error("error");
  //   });

  useEffect(() => {
    fetch(`${BASE_URL}/resources`, {
      headers,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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
            <div className="font-header font-bold text-lg">{feed.name}</div>
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
