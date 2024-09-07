function BlogCreateHeaderItem({register, title}) {
  return (
    <div>
        <div className=" mb-5">
          <label className=" mb-5 block flex-grow text-2xl text-themeWhite" htmlFor="text">
            Blog Title
          </label>
          <input
            className=" flex-grow-0 border block w-[100%] rounded-md focus:border-borderColorHover focus:outline-none py-1 px-4  border-subtitleColor  bg-transparent text-white"
            type="text"
            {...register(title)}
          />
        </div>
    </div>
  )
}

export default BlogCreateHeaderItem
 