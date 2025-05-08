import ThisMonthCard from "./ThisMonthCard"

const categoriesList = [
        {
          imageUrl: "productImages/product5.png",
          name: "The North Coat",
          price: 20000,
          stock: 45
        },
        {
          imageUrl: "productImages/product2.png",
          name: "Gucci duffle bag",
          price: 10000,
          stock: 19
        },
        {
          imageUrl: "productImages/product3.png",
          name: "RGB liquid CPU Cooler",
          price: 13000,
          stock: 10
        },
        {
          imageUrl: "productImages/product4.png",
          name: "Small BookSelf",
          price: 14000,
          stock: 34
        }
    ]

const ThisMonth = () => {
 
  return (

    <div className='mt-20'>
      <div className='h-[40px] flex items-center'>
        <div className='bg-[#DB4444] w-[20px] h-full rounded'></div> <p className='text-red-600 text-[16px] font-[600] ml-4'>Category</p>
      </div>
      <div className='flex items-center mt-2'>
        <h2 className='text-[36px] font-[600] mt-3 mr-21'>Browse By Category</h2>
       
        <div className='ml-auto mr-10'>
          <button className='buttons'>View All</button>
        </div>
      </div>

      <div className='mt-10 flex gap-15' >
        {categoriesList.map((item)=>{
                return <ThisMonthCard imageUrl={item.imageUrl} name={item.name} price={item.price} stock={item.stock} />
            })}
      </div>
    </div>
  )
}

export default ThisMonth;