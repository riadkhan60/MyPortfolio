import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Quillcss.css";
import BlogsHeading from "./BlogsHeading";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],

  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

function BlogsCreate() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div>
      <div className="w-full px-[15px] max-md:mt-2 sm:px-[20px] lg:px-[12%]">
        <h1 className="my-5  text-center text-3xl text-themeWhite">
          Write Your Blog
        </h1>
        <BlogsHeading />
        <div>
          <ReactQuill
            modules={{
              toolbar: toolbarOptions,
            }}
            style={{
              color: "white",
            }}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogsCreate;
