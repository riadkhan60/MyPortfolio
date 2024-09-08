function BlogSideListItem({data}) {
  console.log(data)
  return (
    <div className="blogs-item border-b-borderColor pb-2 max-md:mb-6 lg:border-b">
      <img
        className="aspect-[413/314]  rounded-md object-cover"
        src={data.image}
        alt=""
      />
      <h6 className=" mt-6 text-[15px] uppercase   text-themeDarkshade">
        {data.title}
      </h6>
      <p className=" mt-4 text-[18px] font-normal text-[#ddd]">
        {data.content}
      </p>
    </div>
  );
}

export default BlogSideListItem;
