import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BlogHero } from '../../components/BlogHero';
import { blogData } from '../../constants/blogData';

const Post = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setBlog(blogData[router.query.id]);
      setLoading(false);
    }
  }, [router.query]);

  return (
    <>
      {/* <div className="bg-gray-50 min-h-screen ">
        <h1 className="center text-center text-4xl m-8">{blog.title}</h1>
        <div className="">

        </div>
      </div> */}
      {blog && (
        <div>
          <BlogHero blogData={blog} />
          <div className="text-xl whitespace-pre-wrap px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-30 text-black">
            {blog.content}
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
