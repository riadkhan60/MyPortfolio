function BlogSideListItem() {
  return (
    <div className="blogs-item lg:border-b border-b-borderColor pb-2 max-md:mb-6">
      <img
        className="aspect-[413/314]  rounded-md object-cover"
        src="https://source.unsplash.com/random/?webdeveloper"
        alt=""
      />
      <h6 className=" mt-6 text-[15px] uppercase   text-themeDarkshade">
        12th September 2023
      </h6>
      <p className=" mt-4 text-[18px] font-normal text-[#ddd]">
        Five Solid Evidences Attending Design Is Good For Your Career
        Development.
      </p>
    </div>
  );
}

export default BlogSideListItem;
