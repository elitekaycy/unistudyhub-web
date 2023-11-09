import { useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";
import { BaseFetch } from "../../utils/helper";
import { BASE_URL } from "../../utils/constant";
import { getToken } from '../../utils/helper'
import { useAuthContext } from '../../Context/AuthContext'

function NewPostModal({ open, close }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [resourceFile, setResourceFile] = useState(null);
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuthContext()


  const postResource = async(e) => {
    e.preventDefault();
    if (!resourceFile) return toast.error("no resource file to upload");
    if (description === "")
      return toast.error("give a valid description of file");
    if (categories === "") return toast.error("select a category");

    setLoading(true)
    const token = getToken()
    try {
      let formdata = new FormData()
      formdata.append("file", resourceFile)
      console.log('file', formdata, resourceFile)

      const megaUploadResource = await BaseFetch(`${BASE_URL}/upload_resource`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formdata,
        
      })

      if(!megaUploadResource) throw Error("could not upload file")

      const requestData = {
        user_id: user.id,
        url: megaUploadResource,
        upload_date: new Date().toISOString(),
        image_url: "",
        course_id: null,
        description: description,
        category_id: null
      };
    //   {
    //     "user_id": 3,
    //     "url": "https://mega.co.nz/#!AK9DwLbZ!2PNNhIvqFUxqXSLBHS8GlmuOQakDySptG62ZT8COXF4",
    //     "upload_date": "2023-11-09T21:04:08.777Z",
    //     "image_url": "",
    //     "course_id": null,
    //     "description": "hewldos",
    //     "category_id": null
    // }

      
      console.log("resource metadata ", requestData)

      const uploadResourceMetadata = await fetch(`${BASE_URL}/resources`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData)
      })

      if(!uploadResourceMetadata.ok) throw Error('unable to upload resource')
      toast.success("succesfully uploaded resource")
      
    }
    catch(err) {
      toast.error(String(err))
    }
    finally {
      setLoading(false)
    }
  }

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

    function handleFileSelect(event) {
      const file = event.target.files[0];
       setResourceFile(file)
    }
    return (
      <>
        <button
          className="flex self-start bg-purple-600 border-0 hover:bg-purple-500 font-semibold p-2 px-4 rounded-md text-white flex-row space-x-2"
          onClick={() => hiddenFileInput.current.click()}
        >
          <span className="material-symbols-outlined">cloud_upload</span>
          <span>choose file</span>
        </button>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          ref={hiddenFileInput}
          className="hidden"
        />
      </>
    );
  };

  const CancelShareResource = (e) => {
    e.preventDefault();
    if (!resourceFile || description === "" || selectedCategory == "") close();
    else {
      setResourceFile(null);
      setDescription("");
      setSelectedCategory("");
    }
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
              Share Resource
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

            {resourceFile && (
              <div className="w-full flex flex-row items-center justify-between p-2 rounded-md bg-green-100">
                <span className="font-semibold text-xs">
                  {resourceFile?.name}
                </span>
                <span
                  onClick={() => setResourceFile(null)}
                  className="material-symbols-outlined cursor-pointer hover:text-green-400"
                >
                  cancel
                </span>
              </div>
            )}

            <CreateResourceFile />

            <div className="w-full mt-10 flex-col items-center space-y-2 justify-center">
              <button
                onClick={(e) => postResource(e)}
                className="w-full p-2 flex flex-row items-center gap-2 justify-center rounded-md text-white bg-purple-700 hover:bg-purple-600"
              >
                <span className="material-symbols-outlined">upload</span>
                <span className="font-semibold">{loading ? "uploading..." : 'share'}</span>
              </button>

              <button
                onClick={(e) => CancelShareResource(e)}
                className="w-full p-2 flex flex-row items-center gap-2 text-purple-700 justify-center rounded-md border border-purple-700 hover:border-black hover:text-black"
              >
                <span className="material-symbols-outlined">cancel</span>
                <span className="font-semibold">Cancel</span>
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default NewPostModal;
