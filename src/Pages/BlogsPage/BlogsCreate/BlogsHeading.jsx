import { useForm } from "react-hook-form";
import BlogCreateHeaderItem from "./BlogCreateHeaderItem";
import { IoCloudUploadOutline } from "react-icons/io5";

function BlogsHeading({ value, setError }) {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    if (!data.BlogTitle || !value || !data.file?.[0]) {
      setError("All fields are required");
      return;
    }

    setError(null);

    try {
      const formData = new FormData();
      formData.append("BlogTitle", data.BlogTitle);
      formData.append("BlogImage", data.file[0]);

      // Extract base64 images from the BlogContent
      const content = value;
      const imageRegex = /<img[^>]+src="([^">]+)"/g;
      const base64Images = [];
      let match;
      while ((match = imageRegex.exec(content)) !== null) {
        base64Images.push(match[1]);
      }

      // Upload base64 images and get back URLs
      const imageUrls = await Promise.all(
        base64Images.map(async (base64Image) => {
          const imageFormData = new FormData();
          imageFormData.append("image", base64ToFile(base64Image));

          const response = await fetch("http://localhost:3000/upload-image", {
            method: "POST",
            body: imageFormData,
          });

          const result = await response.json();
          return result.url; // Assume server returns the URL of the uploaded image
        }),
      );

      // Replace base64 images with uploaded image URLs
      let modifiedContent = content;
      base64Images.forEach((base64Image, index) => {
        modifiedContent = modifiedContent.replace(
          base64Image,
          imageUrls[index],
        );
      });

      // Now that images are replaced, add modified content to formData
      formData.append("BlogContent", modifiedContent);

      const response = await fetch("http://localhost:3000/blog", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to convert base64 image to a File object
  function base64ToFile(base64String) {
    const byteString = atob(base64String.split(",")[1]);
    const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });
    return new File([blob], "image.png", { type: mimeString });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BlogCreateHeaderItem register={register} title={"BlogTitle"} />
        <div className="mb-10">
          <h4
            className="mb-3 block flex-grow text-2xl text-themeWhite"
            htmlFor="file"
          >
            <span>Cover photo</span>
          </h4>
          <label
            htmlFor="file"
            className="inline-flex cursor-pointer items-center justify-center gap-2"
          >
            <div className="text-2xl text-subtitleColor">
              <IoCloudUploadOutline />
            </div>
            <input
              id="file"
              className="cursor-pointer text-subtitleColor"
              type="file"
              {...register("file")}
            />
          </label>
        </div>

        <button
          type="submit"
          className="absolute bottom-0 left-[50%] inline w-[50%] translate-x-[-50%] translate-y-[100px] border border-borderColor px-5 py-2 text-lg font-medium text-subtitleColor"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default BlogsHeading;
