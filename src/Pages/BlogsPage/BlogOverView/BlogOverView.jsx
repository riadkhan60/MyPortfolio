import MenuLayout from "../../../features/DrawerMenu/MenuLayout";
import NavMenu from "../../../features/DrawerMenu/NavMenu";
import BlogOverViewContainer from "./BlogOverViewContainer";
import BlogOverViewContent from "./BlogOverViewContent";

function BlogOverView() {
  return (
    <div>
      <div className=" h-full w-[100%] transition-all duration-0 ease-in-out max-lg:block">
        <div className=" bg-white">
          <NavMenu />
          <MenuLayout />
        </div>
      </div>
      <div>
        <BlogOverViewContainer>
          <BlogOverViewContent />
        </BlogOverViewContainer>
      </div>
    </div>
  );
}

export default BlogOverView;
