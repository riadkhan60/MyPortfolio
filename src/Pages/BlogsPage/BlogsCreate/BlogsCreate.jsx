import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Quillcss.css";
import BlogsHeading from "./BlogsHeading";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["clean"],
];

function BlogsCreate() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmissionStart = () => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
  };

  const handleSubmissionComplete = (isSuccess, message) => {
    setIsSubmitting(false);
    if (isSuccess) {
      setSuccess(true);
      setValue("");
      setError(null);
    } else {
      setError(message);
      setSuccess(false);
    }
  };

  return (
    <div className="bg-backgroundColor min-h-screen py-12 lg:py-20">
      <div className="w-full px-[15px] sm:px-[20px] lg:px-[12%]">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h4 className="mb-4 text-[18px] font-medium uppercase tracking-[1px] text-subtitleColor">
            Content Creation
          </h4>
          <h1 className="mb-6 text-[40px] font-bold leading-tight text-themeWhite max-md:text-[28px]">
            Share Your Insights
          </h1>
          <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-themeDarkshade">
            Create and publish articles about AI research, tech innovations, and
            development insights
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-center text-red-400">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
            <p className="text-center text-green-400">
              🎉 Blog post published successfully!
            </p>
          </div>
        )}

        {/* Form Section */}
        <div className="mx-auto max-w-4xl">
          <BlogsHeading
            setError={setError}
            value={value}
            setValue={setValue}
            isSubmitting={isSubmitting}
            onSubmissionStart={handleSubmissionStart}
            onSubmissionComplete={handleSubmissionComplete}
          />

          {/* Editor Section */}
          <div className="mb-8">
            <label className="mb-4 block text-xl font-semibold text-themeWhite">
              Content
            </label>
            <div className="overflow-hidden rounded-xl border border-borderColor bg-backgroundColorSecondary">
              <ReactQuill
                modules={{
                  toolbar: toolbarOptions,
                }}
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Start writing your article..."
                className="quill-dark"
              />
            </div>
            <p className="mt-2 text-sm text-themeDarkshade">
              Use the toolbar above to format your content. You can add images,
              links, and code blocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsCreate;
