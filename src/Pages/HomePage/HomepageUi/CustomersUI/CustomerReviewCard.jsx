function CustomerReviewCard({ review }) {
  return (
    <div>
      <q className=" mb-[40px] text-[30px] text-themeDarkshade max-md:text-[20px]">
        {review.quote}
      </q>
      <h4 className=" mt-10 text-[30px] text-[#ddd]">{review.name}</h4>
      <h5 className=" text-[18px] text-[#888]">{review.company}</h5>
    </div>
  );
}

export default CustomerReviewCard;
