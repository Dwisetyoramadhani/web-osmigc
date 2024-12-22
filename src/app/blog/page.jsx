import Image from "next/image";

const page = () => {
  const posts = [
    {
      category: "Classmeeting",
      title: "Classmeeting - Lomba Cerdas Cermat",
      image: "/assets/cc.jpg",
      date: "December 16, 2024",
    },
    {
      category: "Classmeeting",
      title: "Classmeeting - Lomba Fun Game",
      image: "/assets/fn.jpg",
      date: "December 16, 2024",
    },
    {
      category: "Classmeeting",
      title: "Classmeeting - PBB",
      image: "/assets/pbb.jpg",
      date: "December 16, 2024",
    },
    {
      category: "Classmeeting",
      title: "Classmeeting - PBB",
      image: "/assets/pbb.jpg",
      date: "December 16, 2024",
    },
    {
      category: "Classmeeting",
      title: "Classmeeting - PBB",
      image: "/assets/pbb.jpg",
      date: "December 16, 2024",
    },
    {
      category: "Classmeeting",
      title: "Classmeeting - PBB",
      image: "/assets/pbb.jpg",
      date: "December 16, 2024",
    },
  ];
  return (
    <>
      <div className="px-8 md:px-16 lg:px-24 py-24">
        <h2 className="text-3xl font-bold mb-8">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <span className="text-purple-600 font-bold text-sm">
                  {post.category.toUpperCase()}
                </span>
                <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
