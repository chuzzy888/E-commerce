import './Display.css';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { BiCart } from 'react-icons/bi';
import { BsFillStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useCart } from 'react-use-cart'; // Import the useCart hook
import './Home.css';
import axios from 'axios';
 




function Display() {
 



  const [data, setdata] = useState([]);
  const [record, setrecord] = useState([]);
  const { addItem, cartTotalItems, totalUniqueItems } = useCart(); // Initialize useCart

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/chuzzy888/e2db45aa56c1a2e179cfcd502fb521ff/raw/0a992f126ca304aeb3ac782edfc573f941a507e0/accessories.json'
      )
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
        setrecord(res.data);
      })
      .catch((error) => console.error('unable to fetch'));
  }, []);

  const Filter = (event) => {
    setrecord(data.filter((f) => f.name.toLowerCase().includes(event.target.value)));
  };

  const handleAddToCart = (item) => {
    addItem(item); // Add the selected item to the cart
  };


  return (
    <div className='  '>

      <div className='bg-green-400 text-white h-10 flex justify-center items-center '>
        <p className='my-1 text-sm'>Grand opening <span className='font-bold'>up to 15%</span>of all items. Only <span className='font-bold'>3 days left</span></p>


      </div>
      <div  >
      <div>
      <input type="text" name="text" className="input my-4" placeholder="Search Computer" onChange={Filter}  />
      <div className="9 mt-5 ">
        <div className="row">
          {record.map((list) => {
            return (
              <div
                key={list.id}
                className="col-lg-4 col-md-6 mb-4 flex justify-center items-center"
              >
                <Card style={{ width: '16rem' }} className="product-card">
                  <Card.Img variant="top" src={list.image} className="product-image" />
                  <Card.Body className="bg-white">
                    <h6 className="font-serif mx-5 text-gray-600 product-name">{list.name}</h6>
                    <div className="flex">
                      <h6 className="text-red-500">
                        {' '}
                        <BsFillStarFill />
                      </h6>
                      <h6 className="text-red-500">
                        {' '}
                        <BsFillStarFill />
                      </h6>
                      <h6 className="text-red-500">
                        {' '}
                        <FaStarHalfAlt />
                      </h6>
                    </div>
                    <div className="flex justify-between items-center">
                      <h5 className="text-green-600">
                        <span className="text-green-500">$ </span>
                        {list.price}
                      </h5>
                      <button
                        onClick={() => handleAddToCart(list)}
                        variant="success"
                        className="add-to-cart-button"
                      >
                        <h6 className="text-white font-black mt-1 flex justify-center items-center">                         
                         <span className='text-green-900'>+</span>
                         <BiCart />

                        </h6>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {/* Display cart information */}
        <h3 className='text-white'>Cart Summary</h3>
        <p className='text-white'>Total Items in Cart: {cartTotalItems}</p>
        <p className='text-white'>Total Unique Items in Cart: {totalUniqueItems}</p>
      </div>
    </div>
        
    
  </div>
  
 


    

        </div>
    


  )
}

export default Display














