import { useForm } from "react-hook-form";
import BlogCreateHeaderItem from "./BlogCreateHeaderItem";
import {
  IoCloudUploadOutline,
  IoCheckmarkCircle,
  IoReload,
} from "react-icons/io5";

function BlogsHeading({
  value,
  setValue,
  isSubmitting,
  onSubmissionStart,
  onSubmissionComplete,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    // Validation
    if (!data.BlogTitle?.trim()) {
      onSubmissionComplete(false, "Blog title is required");
      return;
    }

    if (!value?.trim()) {
      onSubmissionComplete(false, "Blog content is required");
      return;
    }

    if (!data.file?.[0]) {
      onSubmissionComplete(false, "Cover photo is required");
      return;
    }

    onSubmissionStart();

    try {
      const formData = new FormData();
      formData.append("BlogTitle", data.BlogTitle.trim());
      formData.append("BlogImage", data.file[0]);

      // Extract base64 images from the BlogContent
      const content = value;
      const imageRegex = /<img[^>]+src="([^">]+)"/g;
      const base64Images = [];
      let match;
      while ((match = imageRegex.exec(content)) !== null) {
        if (match[1].startsWith("data:")) {
          base64Images.push(match[1]);
        }
      }

      let modifiedContent = content;

      // Only process base64 images if they exist
      if (base64Images.length > 0) {
        try {
          // Upload base64 images and get back URLs
          const imageUrls = await Promise.all(
            base64Images.map(async (base64Image) => {
              const imageFormData = new FormData();
              imageFormData.append("image", base64ToFile(base64Image));

              const response = await fetch(
                "http://localhost:3000/upload-image",
                {
                  method: "POST",
                  body: imageFormData,
                },
              );

              if (!response.ok) {
                throw new Error(`Image upload failed: ${response.statusText}`);
              }

              const result = await response.json();
              return result.url;
            }),
          );

          // Replace base64 images with uploaded image URLs
          base64Images.forEach((base64Image, index) => {
            modifiedContent = modifiedContent.replace(
              base64Image,
              imageUrls[index],
            );
          });
        } catch (imageError) {
          console.log(
            "Image upload failed, proceeding without image replacement:",
            imageError,
          );
          // Continue with original content if image upload fails
        }
      }

      formData.append("BlogContent", modifiedContent);

      const response = await fetch("http://localhost:3000/blog", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog published successfully:", result);
        reset();
        setValue("");
        onSubmissionComplete(true, "Blog published successfully!");
      } else {
        throw new Error(`Server error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Blog submission error:", error);
      onSubmissionComplete(
        false,
        "Failed to publish blog. Please check your connection and try again.",
      );
    }
  }

  // Function to convert base64 image to a File object
  function base64ToFile(base64String) {
    try {
      const byteString = atob(base64String.split(",")[1]);
      const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      return new File([blob], "image.png", { type: mimeString });
    } catch (error) {
      console.error("Error converting base64 to file:", error);
      throw new Error("Invalid image format");
    }
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Blog Title */}
        <BlogCreateHeaderItem
          register={register}
          title="BlogTitle"
          error={errors.BlogTitle}
        />

        {/* Cover Photo */}
        <div>
          <label className="mb-4 block text-xl font-semibold text-themeWhite">
            Cover Photo
          </label>
          <div className="relative">
            <label
              htmlFor="file"
              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-borderColor bg-backgroundColorSecondary/50 transition-colors duration-300 hover:bg-backgroundColorSecondary"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <IoCloudUploadOutline className="mb-3 h-8 w-8 text-subtitleColor" />
                <p className="mb-2 text-sm text-themeDarkshade">
                  <span className="font-semibold text-subtitleColor">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-themeDarkshade">
                  PNG, JPG or JPEG (MAX. 5MB)
                </p>
              </div>
              <input
                id="file"
                type="file"
                className="hidden"
                accept="image/*"
                {...register("file")}
              />
            </label>
          </div>
          {errors.file && (
            <p className="mt-2 text-sm text-red-400">{errors.file.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-backgroundColor inline-flex min-w-[200px] items-center justify-center gap-3 rounded-lg border border-subtitleColor bg-subtitleColor px-8 py-4 font-semibold transition-all duration-300 hover:bg-subtitleColor/90 disabled:bg-subtitleColor/50"
          >
            {isSubmitting ? (
              <>
                <IoReload className="h-5 w-5 animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                <IoCheckmarkCircle className="h-5 w-5" />
                Publish Article
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogsHeading;
