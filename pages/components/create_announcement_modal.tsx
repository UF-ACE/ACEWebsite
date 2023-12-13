"use client"
import Link from "next/link";


export default function CreateAnnouncementModal() {
    return (
        <>
            <div
            className="fixed z-10 inset-0 overflow-y-auto"
            id="create-modal"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
                    >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    >
                    </div>
                    <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title"
                        >
                            Create Announcement
                        </h3>
                        <div className="mt-2">
                        <input type="text" placeholder="title of announcement" className="input input-bordered w-full max-w-xs" />
                        </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <Link
                        href="/announcements"
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                        OK
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}