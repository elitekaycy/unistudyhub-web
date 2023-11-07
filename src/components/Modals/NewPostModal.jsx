import { useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function NewPostModal({ open, close }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [resourceFile, setResourceFile] = useState(null);

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
  const modalRef = useRef(null);

  const CreateResourceFile = () => {
    const hiddenFileInput = useRef(null);

    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
      const fileUploaded = event.target.files[0];
      setResourceFile(fileUploaded);
    };
    return (
      <>
        <button
          className="flex self-start bg-purple-600 border-0 hover:bg-purple-500 font-semibold p-2 px-4 rounded-md text-white flex-row space-x-2"
          onClick={handleClick}
        >
          <span className="material-symbols-outlined">cloud_upload</span>
          <span>choose file</span>
        </button>
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          className="hidden"
        />
      </>
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
          <Dialog.Panel className="mx-auto max-w-md w-full flex flex-col gap-4 items-center bg-white p-8 rounded-md">
            <Dialog.Title ref={modalRef} className="font-bold text-xl">
              New Post
            </Dialog.Title>

            <div className="flex flex-row items-center gap-2 bg-gray-100 w-full px-2 rounded-md">
              <span className="material-symbols-outlined p-2">category</span>
              <select
                required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="focus:outline-none w-full flex-1 h-full p-2 bg-gray-100 font-semibold"
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories &&
                  categories.map((c) => (
                    <option key={c?.id} value={c?.id}>
                      {c?.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="w-full">
              <textarea
                className="w-full bg-gray-100 focus:outline-none p-4 rounded-md"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <CreateResourceFile />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default NewPostModal;
