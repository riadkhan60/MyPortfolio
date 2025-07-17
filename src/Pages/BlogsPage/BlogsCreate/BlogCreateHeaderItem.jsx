function BlogCreateHeaderItem({ register, title, error }) {
  return (
    <div>
      <label
        className="mb-4 block text-xl font-semibold text-themeWhite"
        htmlFor={title}
      >
        Blog Title
      </label>
      <input
        id={title}
        className={`w-full rounded-xl border bg-backgroundColorSecondary px-4 py-3 text-themeWhite placeholder-themeDarkshade transition-all duration-300 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500/50"
            : "border-borderColor focus:border-subtitleColor focus:ring-subtitleColor/50"
        }`}
        type="text"
        placeholder="Enter an engaging title for your article..."
        {...register(title, {
          required: "Blog title is required",
          minLength: {
            value: 5,
            message: "Title must be at least 5 characters long",
          },
          maxLength: {
            value: 100,
            message: "Title must be less than 100 characters",
          },
        })}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
      <p className="mt-2 text-sm text-themeDarkshade">
        Write a clear, descriptive title that captures the essence of your
        article
      </p>
    </div>
  );
}

export default BlogCreateHeaderItem;
