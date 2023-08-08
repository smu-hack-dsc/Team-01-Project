const TagCard = ({ title, handleTag }) => {
  const handleSelect = (interest) => {
    handleTag(interest);
  };

  return (
    <div>
      <div className="py-1">
        <button
          className="flex justify-center items-center px-4 py-2 rounded-lg text-black hover:bg-gray-200 font-DMSans font-normal "
          onClick={() => handleTag(title)}
        >
          <div className="flex flex-col justify-center font-DMSans md:text-sm lg:text-lg capitalize">
            {title}
          </div>
        </button>
      </div>
    </div>
  );
};

export default TagCard;
