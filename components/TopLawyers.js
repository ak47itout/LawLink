import { LawyerData } from '../constants/topLawyers';

const TopLawyers = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-black">
        <div className="mx-auto max-w-screen-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {LawyerData.title}
          </h2>

          <p className="text-gring-offset-warm-gray-500 mx-auto mt-4">
            {LawyerData.text}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          {LawyerData.cards.map((card) => (
            <div key={card.key}>
              <img
                alt="Woman"
                src={card.src}
                className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />

              <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p className="text-lg font-bold text-gray-700">
                  {card.lawyerName}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {card.specialization}
                </p>
                <p className="mt-4 text-sm text-gray-500">{card.description}</p>
                <div className="grid grid-cols-4 gap-2 mt-4 items-center">
                  {card.tags.map((tag) => (
                    <div
                      className="py-1 px-3 rounded-md text-sm border border-primary"
                      key={1}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopLawyers;
