import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { useAuthContext } from "../Context/AuthContext";
import {
  BaseFetch,
  getToken,
  useInitials,
} from "../utils/helper";
import { BASE_URL } from "../utils/constant";
import toast from "react-hot-toast";
import fileIcon from "../assets/fileIcon.png";
import FileDownload from "react-file-download";

function Account() {
  const { user } = useAuthContext();
  const [myResources, setMyResources] = useState([]);
  const [search, setSearch] = useState("");

  const downloadFile = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
  
      // Create a link element
      const link = document.createElement('a');
  
      // Create a Blob URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
  
      // Set the link's href to the Blob URL
      link.href = blobUrl;
  
      // Set the download attribute with the desired file name
      link.download = fileName || 'file.pdf';
  
      // Append the link to the document body
      document.body.appendChild(link);
  
      // Programmatically click the link to trigger the download
      link.click();
  
      // Remove the link element
      document.body.removeChild(link);
  
      // Revoke the Blob URL to free up resources
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  

  const download = async(url) => {
   let res = await fetch(`${BASE_URL}/download_resource?url=${url}`, {
      method: 'POST',
      Authorization: `Bearer ${token}`
    })

    if(!res.ok) toast.error("could not download")
    else toast.success("download started")
  }

  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const filterFunction = (r) => {
    return r?.title.includes(search) || r?.description.includes(search);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/resources`, {
      headers,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("get my resources ", result);
        setMyResources(result.filter(r => r?.user_id === user.id));
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const filteredData = myResources.filter(item =>
     item.title && item.title.toLowerCase().includes(search.toLowerCase())
  );

  const Resource = (r) => {
    return (
      <div className="max-w-[300px] flex flex-col gap-4 w-full">
        <div className="max-w-xs h-52 flex flex-row items-center justify-center bg-purple-100 w-full rounded-md p-4">
          <div>
            <img src={fileIcon} alt="fileIcon" className="w-24 h-24" />
          </div>
        </div>
        <div className="px-3 justify-between flex flex-row items-center">
          <div className="text-xs font-semibold text-gray-600">{r?.resource?.title}</div>
          <button 
          onClick={() => window.open(r?.resource?.url)}
          className="bg-black cursor-pointer hover:shadow-lg rounded-full p-2 w-24 text-xs text-white font-semibold text-center">
          download
        </button>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="w-full p-8 bg-white flex flex-row items-center justify-between rounded-xl shadow-sm space-y-8">
        <div className="w-full flex flex-row items-center justify-start gap-3">
          <div className="h-14 w-14 flex flex-row items-center justify-center rounded-full p-2 border-0 bg-purple-100">
            <div className="text-2xl font-semibold text-purple-500 font-header">
              {useInitials(user?.username)}
            </div>
          </div>

          <div className="flex flex-col font-header">
            <div className="font-bold text-md">{user?.username}</div>
            <div className="text-gray-500 text-xs">{user?.email}</div>
          </div>
        </div>
        <div className="bg-black shadow-lg rounded-full px-16 py-5 w-24 text-sm text-white font-bold text-center flex justify-center items-center space-x-1 font-header">
          <div>{myResources.length}</div>
          <div>Resources</div>
        </div>
      </div>
      <div>
        <div className="w-full  p-4 rounded-lg shadow-sm bg-white mt-8 font-body">
          <div className="flex flex-row items-center space-x-8 justify-between">
            <div className="font-bold text-sm">My Resources</div>
            <div className="flex-1 w-full">
              <input
                type="text"
                name="search my resource"
                placeholder="search my resources"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-3 pl-8 focus:outline-none text-xs w-full bg-gray-100 rounded-full"
              />
            </div>
          </div>
          {!myResources.length && (
            <div className="mt-20 flex flex-col items-center justify-center mb-20">
              <div className="max-w-sm w-full border-2 border-purple-700 bg-purple-100 rounded-lg text-center font-semibold p-6">
                You do not have any resources!!
              </div>
            </div>
          )}

          <div className="mt-14 flex flex-row flex-wrap gap-4 w-full">
            {myResources.length &&
              filteredData.map((r) => <Resource key={r?.id} resource={r} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Account;
