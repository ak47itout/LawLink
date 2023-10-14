export const BlogHero = (props) => {
  return (
    <div className="bg-indigo-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
                {props.blogData.title}
              </h2>
              <p className="text-base text-indigo-100 md:text-xl">
                {props.blogData.subject}
                {/* lorem ipsum */}
              </p>
              <h3 className="text-right text-white font-bold  md:text-xl">
                {' '}
                - by {props.blogData.author}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
