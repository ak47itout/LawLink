import BlogCard from '../components/BlogCard';

import blogInfo from '../BlogData.json';

const Blogs = () => {
  // const blogData = [
  //   {
  //     title: "First Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  //   {
  //     title: "Second Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  //   {
  //     title: "Third Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  //   {
  //     title: "First Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  //   {
  //     title: "Second Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  //   {
  //     title: "Third Blog",
  //     subject:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam repudiandae voluptatibus ab magni, reprehenderit hic aut repellendus, dolor eaque architecto, quae libero atque aperiam ratione unde recusandae qui maxime?",
  //     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa vitae ipsum ullamcorper pretium. Praesent id laoreet quam, at interdum quam. Sed ultrices felis eget commodo bibendum. Donec tempus vestibulum ante, sed imperdiet risus. Proin eget libero sed mi venenatis faucibus. Phasellus ultrices magna justo, quis fringilla nisl lacinia a. Vivamus condimentum vehicula turpis, id feugiat leo interdum ut. Curabitur ipsum augue, luctus non nunc dapibus, vulputate egestas dolor. Ut vitae porttitor metus. In eget velit placerat, suscipit nibh non, egestas quam. Proin tristique orci eget nisi semper, a volutpat ipsum laoreet. Fusce sit amet lorem id sem tincidunt lobortis. Ut eget vestibulum nisl, eu sagittis eros. Suspendisse pretium ipsum in neque pretium consequat a in dolor. Integer non dui a purus malesuada semper. Donec ipsum metus, posuere et purus vel, molestie congue arcu. \

  //     Ut tempus, augue in ultrices eleifend, augue ligula rutrum odio, quis venenatis nulla nibh nec dui. Phasellus ornare iaculis ex a aliquet. Aenean in justo nec risus lobortis interdum a a magna. In viverra dignissim mi, laoreet mattis ligula sodales aliquam. Quisque elementum in metus eget posuere. Fusce posuere, erat in blandit suscipit, sem orci viverra enim, quis dapibus urna lorem non turpis. Sed lorem elit, lobortis ac iaculis nec, luctus sed odio. Praesent sit amet lobortis mi, id ornare arcu. Fusce tempus convallis diam non viverra. Maecenas id rutrum nisi.

  //     Vivamus sed urna a libero molestie accumsan at ac risus. In consequat sed risus in fermentum. Curabitur imperdiet, eros in varius ultrices, felis urna ornare neque, vel pellentesque urna dui eget turpis. Pellentesque vitae lacus in est suscipit varius. Nullam interdum bibendum dictum. Fusce non tortor sit amet felis ultrices elementum sodales sed ipsum. Proin a vulputate odio, a tristique lacus. Praesent non viverra odio. Aenean dapibus efficitur ultrices. Maecenas mollis risus quis elit aliquet, ut venenatis ipsum molestie. Vestibulum accumsan sem commodo ante blandit vulputate luctus luctus urna. Suspendisse cursus non libero non consequat. Nam vitae tortor tempus, hendrerit nisi sit amet, facilisis arcu. Fusce in nunc non ipsum commodo suscipit eu et nisi. Quisque ut condimentum quam. Proin sit amet est ultricies, mattis mi nec, congue velit.

  //     `,
  //     author: "John Doe",
  //   },
  // ];
  // console.log(blogData)
  // const blogList = data.blogData.map((data) => <Card cardData={data} />);

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="center text-center text-4xl m-8 text-black font-bold ">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
        {blogInfo.blogData.map((data) => (
          <div className="inline-block rounded-md" key={data.id}>
            <BlogCard cardData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
