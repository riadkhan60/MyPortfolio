import BlogsFullList from "../BlogsUi/BlogsFullList";
import BlogsSectionContainer from "../BlogsUi/BlogsSectionContainer";
import BlogsSideList from "../BlogsUi/BlogsSideList";
import BlogsSwiper from "../BlogsUi/BlogsSwiper";

function BlogsGrid() {
  return (
    <BlogsSectionContainer>
      <div className=" w-full gap-10 lg:grid lg:grid-cols-3 flex flex-col ">
        <div className=" lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 w-full">
          <BlogsSwiper />
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-6">
          <BlogsSideList />
        </div>
        <div className=" lg:row-auto lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-6">
         <BlogsFullList/>
        </div>
      </div>
    </BlogsSectionContainer>
  );
}

export default BlogsGrid;
