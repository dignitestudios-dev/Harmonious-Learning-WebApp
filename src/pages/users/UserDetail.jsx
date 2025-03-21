import React, { useState } from "react";
import DeactivateUserModal from "../../components/users/DeactivateUserModal";
import { useNavigate, useParams } from "react-router-dom";
import { olivia } from "../../assets/export";
import { useUsersDetail } from "../../hooks/api/Get";
import UserDetailLoader from "../../components/users/UserDetailLoader";

const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeactivate = () => {
    setModalOpen(false);
  };

  const { data, loading } = useUsersDetail(`/admin/user/${id}`, 1);

  return (
    <div className="w-full min-h-screen overflow-auto text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="text-white text-[14px] font-light mb-2"
      >
        &larr; Back
      </button>

      <h1 className="text-[36px] font-bold mb-6">Users Profile</h1>

      {/* User Info */}
      <div
        className="bg-[#00000044] border-[#000] rounded-[26px] shadow-md p-6
       flex items-center justify-between h-[162px]"
      >
        <div className="flex items-center space-x-4 ">
          <img
            src={data?.profilePicture}
            alt={data?.name}
            className="w-24 h-24 rounded-full border-4 border-purple-500"
          />
          <div>
            <h2 className="text-[20px] font-semibold leading-[36px] ">
              {data?.name}
            </h2>
            <p className="text-[16px] font-thin text-white/45 leading-[26px]">
              {data?.email}
            </p>
          </div>
        </div>
        {/* <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] hover:from-[#1d0086] hover:to-[#d5a6df] px-6 py-2
          w-[199px] h-[49px] rounded-full text-[16px] font-medium"
        >
          Deactivate User
        </button> */}
      </div>

      {/* Children Info */}
      <h2 className="text-[24px] font-semibold my-6">
        Children {data?.children?.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {loading
          ? [...Array(3)].map((_, index) => <UserDetailLoader key={index} />)
          : data?.children?.map((child, index) => (
              <div
                key={index}
                className="bg-[#00000044] border-[#000] rounded-[26px] shadow-md p-6 "
              >
                <div className="flex items-center space-x-4 mb-4 border-b pb-4 border-white/15">
                  <img
                    src={child?.profilePicture}
                    alt={child?.profileName}
                    className="w-16 h-16 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="text-[18px] font-medium">
                      {child?.profileName}
                    </h3>
                    <p className="text-[16px] text-white/90 font-light">
                      {new Date().getFullYear() -
                        new Date(child?.dob).getFullYear()}{" "}
                      Years
                    </p>
                  </div>
                </div>

                <h4 className="text-[24px] font-semibold mb-2 leading-[32px]">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {child?.preferences?.map((interest, i) => (
                    <span
                      key={i}
                      className="px-6 py-2 leading-[22px] my-1 font-extralight text-sm rounded-full bg-transparent border border-gray-600"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
      </div>

      {/* Modal */}
      <DeactivateUserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeactivate}
      />
    </div>
  );
};

export default UserDetail;
