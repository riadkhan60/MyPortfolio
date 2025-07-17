function BlogSideListItem({ data }) {
  return (
    <div className="blogs-item border-b border-borderColor/30 pb-6 transition-all duration-300 hover:border-borderColor/60">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          className="aspect-[16/10] w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
          src={data.image}
          alt={data.title}
        />
        {data.category && (
          <div className="absolute left-3 top-3">
            <span className="rounded bg-backgroundColorSecondary/80 px-2 py-1 text-xs font-medium text-subtitleColor backdrop-blur-sm">
              {data.category}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h6 className="text-[16px] font-semibold leading-snug text-themeWhite transition-colors duration-300 group-hover:text-subtitleColor">
          {data.title}
        </h6>

        <p className="line-clamp-2 text-[14px] leading-relaxed text-themeDarkshade">
          {data.content}
        </p>

        {data.readTime && (
          <div className="flex items-center text-xs text-themeDarkshade/80">
            <svg
              className="mr-1 h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {data.readTime}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogSideListItem;
