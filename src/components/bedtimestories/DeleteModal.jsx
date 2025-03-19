import { deactivate } from "../../assets/export";
import { useDelete } from "../../hooks/api/Delete";
import { processDelete } from "../../lib/utils";

const DeleteModal = ({ isOpen, onClose, onConfirm, storyId, setUpdate }) => {
  if (!isOpen) return null;
  const { loading, deleteData } = useDelete(setUpdate, onClose);
  const handleDelete = async () => {
    deleteData("/admin/deleteStories", storyId, processDelete);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-10 rounded-[26px] shadow-md text-white p-8 w-[455px] h-[367px]">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl p-4 rounded-full mb-1">
            {/* Replace the icon with the deactivate image */}
            <img src={deactivate} alt="Deactivate" className="w-full h-full" />
          </div>
          <h2 className="text-[24px] font-semibold mb-2">Are you Sure </h2>
          <p className="text-[16px] font-light text-white mb-6 capitalize">
            you want to delete this Bedtime story?
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="bg-white/15 w-[100px] hover:bg-white/25 text-white px-6 py-2 rounded-full"
            >
              No
            </button>
            <button
              onClick={() => handleDelete(storyId)}
              className="bg-gradient-to-r from-[#000086] w-[100px] to-[#CEA3D8] hover:bg-gradient-to-r
               hover:from-[#1d0086] hover:to-[#d5a6df] px-6 py-2 rounded-full"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                </div>
              ) : (
                <div>Yes</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
