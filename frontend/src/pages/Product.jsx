import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId } = useParams();
  // console.log(productId);
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  //  const [productData, setProductData] = useState({
  //   image: [],
  //   sizes: [],
  //   name: '',
  //   price: 0,
  //   description: '',
  //   category: '',
  //   subCategory: '',
  //   _id: ''
  // });
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=> {
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        // console.log(item);
        return null;
      }
    })
  }

//   const fetchProductData = () => {
//   const foundProduct = products.find((item) => item._id === productId);
//   if (foundProduct) {
//     setProductData(foundProduct);
//     setImage(Array.isArray(foundProduct.image) ? foundProduct.image[0] : '');
//   }
// };

  useEffect(() => {
    fetchProductData()
  },[productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/** Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/**Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=> (
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt=""/>
          </div>

        </div>

        {/**-----Product Info------ */}
        <div className='flex-1'>

          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="star-icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3 5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="star-dull-icon" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='text-sm font-small'>Inclusive of all taxes</p>
          <p className='mt-5 text-gray-700 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=> (
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-10 sm:w-4/5' />
          <div className='text-sm text-gray-500 flex flex-col mt-5 gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available for this product</p>
            <p>Easy return and exchange policy</p>
          </div>

        </div>

      </div>
      
      {/**-------Description & Review Section --------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>This product combines modern design with high-quality materials to deliver both style and functionality. Whether you're using it casually or for special occasions, it offers a comfortable, reliable experience tailored to your needs.</p>
          <p>Built to last and easy to maintain, it’s crafted with attention to detail and tested for durability. Its sleek finish and versatile use make it a standout addition to your lifestyle or a thoughtful gift option.</p>
        </div>

      </div>

      {/** Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product



