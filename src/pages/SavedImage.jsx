import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SavedImage() {
  const { fileName } = useParams();
  const [savedImg, setSavedImg] = useState('');

  useEffect(() => {
    async function getImage() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/api/download/${fileName}`,
          {
            responseType: 'blob',
          }
        );
        const imageUrl = URL.createObjectURL(res.data);
        setSavedImg(imageUrl);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    getImage();
  }, [fileName]);
  return (
    <>
      <div className="bg-[#e5e7eb] dark:bg-gray-800 dark:text-white min-h-screen">
        <Navbar />

        <div className="mt-28 mx-6 sm:mx-20 md:mx-40 lg:mx-90  bg-white dark:bg-[#4D5562] rounded-md p-1.5">
          <div className="border border-dashed  rounded-md  w-full h-75">
            {savedImg ? (
              <img src={savedImg} alt="" className="w-full h-full" />
            ) : (
              <p>Loading Image ...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedImage;
