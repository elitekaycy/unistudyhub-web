import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";

function NotificationModal({ open, close }) {

  const modalRef = useRef(null);


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
            <div>hello world</div>         
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default NotificationModal;
