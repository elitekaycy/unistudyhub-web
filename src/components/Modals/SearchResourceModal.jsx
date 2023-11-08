import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";
import empty from "../../assets/empty.png";

function SearchResourceModal({ open, close }) {
  const modalRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [resources, setResources] = useState(["resource1", "resource2"]);
  const [date, setDate] = useState("");
  const dateRef = useRef(null);

  const [categories, setCategories] = useState([
    {
      name: "computer science",
      id: "computer_science",
    },
    {
      name: "computer engineer",
      id: "computer_engineer",
    },
  ]);

  const DatePicker = () => {
    return (
      <div className="w-40 bg-gray-100">
        <input
          className="w-full h-full p-2 bg-transparent"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          ref={dateRef}
        />
      </div>
    );
  };

  const ResourceComponent = () => {
    return (
        <div className="bg-gray-100 w-full flex flex-row justify-between items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-200">
             <div className="w-12 h-12 p-4 flex flex-row items-center justify-center rounded-full bg-purple-100">
            <div className="font-bold text-lg text-purple-600">
              Da
            </div>
          </div>
            <div className="font-semibold flex-1">book name</div>
            <div className="font-bold text-gray-400 text-xs">22-1-001</div>
        </div>
    )
  }

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
              <div className="font-semibold">search for resources</div>
              <span
                onClick={() => close()}
                className="material-symbols-outlined hover:text-purple-700 cursor-pointer"
              >
                cancel
              </span>
            </div>

            <div className="w-full h-auto bg-gray-100 rounded-full">
              <input
                ref={modalRef}
                className="w-full h-full p-3 focus:outline-none bg-transparent"
                type="text"
                placeholder="Search resource in organization"
                name="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            <div className="flex flex-col justify-start items-start w-full space-y-2">
              <span className="text-gray-400 font-semibold"> filter by </span>
              <div className="flex gap-2">
                <div className="flex flex-row items-center gap-2 bg-purple-600 text-white w-full px-2 rounded-md">
                  <span className="material-symbols-outlined p-2">
                    category
                  </span>
                  <select
                    required
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="focus:outline-none w-full flex-1 h-full p-2 bg-purple-600 font-semibold"
                  >
                    <option value="" disabled>
                      Select Field
                    </option>
                    {categories &&
                      categories.map((c) => (
                        <option key={c?.id} value={c?.id}>
                          {c?.name}
                        </option>
                      ))}
                  </select>
                </div>

                <DatePicker />
              </div>

              {!resources.length && (
                <div className="self-center pt-10 pb-10">
                  <img src={empty} className="w-24 h-24" />
                  <p className="text-center">Empty resources</p>
                </div>
              )}

               <div className="pt-8 w-full space-y-2">
              {resources.length && resources.map(r => <ResourceComponent key={r} />)}
                
               </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default SearchResourceModal;
