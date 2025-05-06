import React from "react";

const ProductSectionLayout = ({ title, subtitle,}) => {
  return (
    <div className="flex flex-col gap-[60px] p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px] items-center">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
          <div className="text-[#DB4444] font-medium">{subtitle}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">{title}</div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductSectionLayout;
