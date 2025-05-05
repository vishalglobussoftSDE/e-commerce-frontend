import React from 'react';
import product from '../assets/MonitorCartSmall.png';
import payCards from '../assets/payCards.png';
import '../App.css';
import PathLocation from '../components/PathLocation';
import Header from '../components/Header';

const CheckOut = () => {
    
  return (
    <>
      <PathLocation/>
      <div className='container mt-15 mb-25'>      
            <div>
              <h2 className='text-[36px] tracking-wide font-[500]'>Billing Deatils</h2>
              <div>
                <form className='flex content-between'>
                  <div className='w-[470px]'>
                    <div className='my-[24px]'>
                      <label htmlFor='firstName' className='leading-[24px]'>First Name<sup>*</sup></label>
                      <input type='text' id='firstName' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='companyName' className='leading-[24px]'>Company Name</label>
                      <input type='text' id='companyName' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='address1' className='leading-[24px]'>Street Address<sup>*</sup></label>
                      <input type='text' id='address1' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='address2' className='leading-[24px]'>Apartment, floor, etc. (optional)</label>
                      <input type='text' id='address2' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='address3' className='leading-[24px]'>Town/City<sup>*</sup></label>
                      <input type='text' id='address3' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='phoneNumber' className='leading-[24px]'>Phone Number<sup>*</sup></label>
                      <input type='text' id='phoneNumber' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='my-[24px]'>
                      <label htmlFor='email' className='leading-[24px]'>Email Address<sup>*</sup></label>
                      <input type='email' id='email' className='bg-gray-100 w-full h-[50px] rounded-[4px]'></input>
                    </div>
                    <div className='flex'>
                      <input type='checkbox' className='size-[24px] mr-4 cursor-pointer' id='saveInfo'></input>
                      <label htmlFor='saveInfo' className='cursor-pointer'>Save the information for faster check-out next time</label>
                    </div>
                  </div>
                  <div className='w-[527px] ml-[100px]'>
                    <div className='flex items-center w-[425px] my-[16px]'>
                      <img className='inline mr-[10px]' src={product}></img>
                      <p>Product Name</p>
                      <p className='ml-auto'>Total</p>
                    </div>
                    <div className='flex w-[425px] my-[16px]'>
                      <p>Subtotal:</p>
                      <p className='ml-auto'>1000</p>
                    </div>
                    <div className='flex border-y-1 py-3 border-gray-300 w-[425px] my-[16px]'>
                      <p>Shopping</p>
                      <p className='ml-auto'>Free</p>
                    </div>
                    <div className='flex w-[425px] my-[16px]'>
                      <p>Total:</p>
                      <p className='ml-auto'>1000</p>
                    </div>                
                    <div className='w-[425px] my-[16px]'> 
                      <div className='flex justify-between items-center my-[16px]'>
                        <span><input type='radio' name='payType'></input><label className='p-3'>Bank</label></span>
                        <img src={payCards}></img>                      
                      </div>
                      <span><input type='radio' name='payType'></input><label className='p-3'>Cash on Delivery</label></span>
                    </div>
                    <div className='my-[16px]'>
                      <input type='text' placeholder='Coupon Code' className='w-[300px] h-[56px] border-[1px] rounded-[4px] mr-[15px] border-gray-400 pl-[24px]'></input>
                      <button className='buttons'>Apply Coupon</button>
                    </div>  
                    <button type='submit' className='buttons mt-4'>Place Order</button>    
                  </div>

                </form>
              </div>
            </div>        
      </div>
    </>
  )
}

export default CheckOut;