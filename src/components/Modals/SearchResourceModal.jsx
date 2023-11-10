import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import empty from "../../assets/empty.png";
import { getToken } from "../../utils/helper";
import { BASE_URL } from "../../utils/constant";

function SearchResourceModal({ open, close }) {
  const modalRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [resources, setResources] = useState([]);
  const [searchResource, setSearchResource] = useState([]);
  const [date, setDate] = useState("");
  const dateRef = useRef(null);

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
        setResources(result);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(searchTerm);
  
    // Filter resources based on the search term in title or upload_date
    const filteredResources = resources.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.upload_date.toLowerCase().includes(searchTerm)
    );
  
    setSearchResource(filteredResources);
  };
  
  const ResourceComponent = ({ resource }) => {
    return (
      <div className="bg-gray-100 w-full flex flex-row justify-between items-center gap-2 p-4 rounded-md cursor-pointer hover:bg-gray-200 font-body">
        {/* Customize this based on your resource object structure */}
        <div className="font-semibold flex-1 text-md">{resource.title}</div>
        <div className="font-bold text-gray-400 text-xs">{resource.id}</div>
      </div>
    );
  };

  return (
    <Dialog
      open={open}
      initialFocus={modalRef}
      onClose={() => close()}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg w-full flex flex-col gap-4 items-center bg-white p-6 rounded-md">
            <div className="flex flex-row w-full items-center justify-between">
              <div className="font-semibold font-header text-lg">
                search for resources
              </div>
              <span
                onClick={() => {
                  setSearchResource([])
                  close()
                }}
                className="material-symbols-outlined hover:text-purple-700 cursor-pointer text-lg"
              >
                cancel
              </span>
            </div>

            <div className="w-full h-auto bg-gray-100 rounded-full shadow-md">
              <input
                ref={modalRef}
                className="w-full h-full px-5 py-3 focus:outline-none bg-transparent font-body font-semibold text-sm"
                type="text"
                placeholder="Search resource in organization by name, field or date"
                name="search"
                value={searchInput}
                onChange={handleSearchChange}
              />
            </div>

            {!searchResource.length && (
              <div className="self-center pt-10 pb-10">
                <img src={empty} className="w-24 h-24" alt="Empty" />
                <p className="text-center">find your resources</p>
              </div>
            )}

            <div className="w-full h-48 space-y-2">
              {searchResource.length ? (
                searchResource.map((r) => (
                  <ResourceComponent key={r.id} resource={r} />
                ))
              ) : (
                <div className="w-full h-full flex flex-row items-center justify-center">
                  <div className="font-semibold text-center text-xs">
                    search resources
                  </div>
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default SearchResourceModal;
