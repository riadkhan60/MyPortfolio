import MenuLayout from "../../features/DrawerMenu/MenuLayout";
import NavMenu from "../../features/DrawerMenu/NavMenu";
import BlogsGrid from "./Sections/BlogsGrid";
import BlogsHeading from "./Sections/BlogsHeading";

function BlogsPage() {
  return (
    <div className="bg-backgroundColor min-h-screen">
      <div className="h-full w-[100%] transition-all duration-0 ease-in-out max-lg:block">
        <div className="bg-white">
          <NavMenu />
          <MenuLayout />
        </div>
      </div>

      <main className="py-12 lg:py-20">
        <BlogsHeading />
        <div className="mt-16 lg:mt-24">
          <BlogsGrid />
        </div>
      </main>
    </div>
  );
}

export default BlogsPage;
