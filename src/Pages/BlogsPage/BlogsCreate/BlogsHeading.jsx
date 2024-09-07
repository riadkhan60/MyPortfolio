import { useForm } from "react-hook-form";
import BlogCreateHeaderItem from "./BlogCreateHeaderItem";
import { IoCloudUploadOutline } from "react-icons/io5";
function BlogsHeading() {
  const { register, handleSubmit, watch } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  console.log(watch());

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BlogCreateHeaderItem register={register} title={"BlogTitle"} />
        <div className=" mb-10">
          <h4
            className=" mb-3 block flex-grow text-2xl text-themeWhite"
            htmlFor="file"
          >
            <span className=" ">Cover photo</span>
          </h4>
          <label
            htmlFor="file"
            className=" inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <div className="  text-2xl text-subtitleColor">
              <IoCloudUploadOutline />
            </div>
            <input
              id="file"
              className=" cursor-pointer  text-subtitleColor"
              type="file"
              accept="image/*"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default BlogsHeading;
