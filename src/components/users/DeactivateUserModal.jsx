import React from "react";
import { deactivate } from "../../assets/export";

const DeactivateUserModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-10 rounded-[26px] shadow-md text-white p-8 w-[455px] h-[367px]">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl p-4 rounded-full mb-1">
            {/* Replace the icon with the deactivate image */}
            <img src={deactivate} alt="Deactivate" className="w-full h-full" />
          </div>
          <h2 className="text-[24px] font-semibold mb-2">
            Deactivate User Account
          </h2>
          <p className="text-[16px] font-light text-white mb-6 capitalize">
            Deactivating This Account Will restrict User Access. This action can
            be reversed later. Please confirm to proceed.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="bg-white/15 hover:bg-white/25 text-white px-6 py-2 rounded-full"
            >
              Don’t Deactivate
            </button>
            <button
              onClick={onConfirm}
              className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] hover:bg-gradient-to-r
               hover:from-[#1d0086] hover:to-[#d5a6df] px-6 py-2 rounded-full"
            >
              Deactivate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactivateUserModal;
