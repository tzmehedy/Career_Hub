import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-gray-100 rounded-lg p-3 space-y-3">
      <img src={logo} alt="" />
      <h1 className="text-xl font-bold">{category_name}</h1>
      <p>{availability}</p>
    </div>
  );
};

Category.propTypes ={
    category:PropTypes.Object
}

export default Category;
