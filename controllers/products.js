const Product = require("../models/product");
const { options } = require("../routes/products");



const getAllProducts = async (req,res) =>{
let page = Number(req.query.page) || 1 ;
let limit = Number(req.query.limit) ||3;
let skip = (page-1) * limit;

apiData = apiData.skip(skip).limit(limit)


    const { company,name,fetured,sort,select } = req.query
    const queryObject = {};


    if (company) {
      queryObject.company = { $regex: company, $options: "i" };;
      
    }
     if (fetured) {
       queryObject.fetured = { $regex: fetured, $options: "i" };
     }
    let apiData = Product.find(queryObject)
    if (name) {
        let sortFix = sort.replace(","," ")
      apiData = apiData.sort(sortFix)
      
    }
     if (sort) {
       queryObject.name = { $regex: name, $options: "i" };
     }

     if (select){
        
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
     }

console.log(queryObject);

    const myData = await apiData 
    res.status(200).json({myData , nbHits: myData.length})
}

const getAllProductsTestings = async (req,res) =>{
   const myData = await Product.find(req.query).select("name")
   res.status(200).json({myData})
}


module.exports = {getAllProducts, getAllProductsTestings}