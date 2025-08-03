import axios from 'axios';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

function FileUpload() {
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length === 0) return;

    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    console.log(acceptedFiles);

    setUploading(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_API}/api/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(res => {
        console.log(res.data.message);
        console.log(res.data.file.filename);
        const filePath = `/saved-image/${res.data.file.filename}`;
        navigate(filePath);
      })
      .catch(err => {
        console.error(`error uploading documenet ${err}`);
      })
      .finally(() => {
        setUploading(false);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.png', '.gif'] },
    maxSize: 1024 * 1024 * 2,
  });

  return (
    <div className="mt-28 mx-6 sm:mx-20 md:mx-40 lg:mx-90  bg-white dark:bg-[#4D5562] rounded-md">
      {uploading ? (
        <div className="py-10 px-20">
          <p className="text-center mb-4">
            <span className="font-medium">Uploading,</span> please wait..
          </p>

          <div class="loader-container mx-auto bg-[#e5e7eb] dark:bg-[#E5E7EB]">
            <div class="loader-bar bg-[#3662e3]"></div>
          </div>
        </div>
      ) : (
        <div {...getRootProps()} className=" cursor-pointer">
          <input {...getInputProps()} />
          <div className="  p-1.5 w-full h-75">
            <div className="border border-dashed  rounded-md h-full flex flex-col justify-center items-center">
              <img src="/images/exit.svg" alt="" className="mx-auto mb-5" />

              <div className="font-medium mb-1">
                {isDragActive ? (
                  <span>Drop the files here...</span>
                ) : (
                  <span>
                    Drag & drop a file or{' '}
                    <span className="text-[#3662E3]">browse files</span>
                  </span>
                )}
              </div>

              <p className="font-light">JPG, PNG or GIF - Max file size 2MB</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
