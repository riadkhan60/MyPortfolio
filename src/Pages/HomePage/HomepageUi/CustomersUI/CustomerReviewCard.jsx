function CustomerReviewCard({ review }) {
  // Highlights are facts, not someone's words, so they get no quote marks; same size and colour.
  const Text = review.highlight ? "p" : "q";
  return (
    <div>
      <Text className=" mb-[40px] text-[30px] text-themeDarkshade max-md:text-[20px]">
        {review.quote}
      </Text>
      <h4 className=" mt-10 text-[30px] text-[#ddd]">{review.name}</h4>
      <h5 className=" text-[18px] text-[#888]">{review.company}</h5>
    </div>
  );
}

export default CustomerReviewCard;
