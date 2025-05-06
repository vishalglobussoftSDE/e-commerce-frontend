import React from 'react';
import iconsend from '../assets/iconsend.png';
import IconFacebook from '../assets/social-media-logo/IconFacebook.png';
import IconTwitter from '../assets/social-media-logo/IconTwitter.png';
import IconInstagram from '../assets/social-media-logo/IconInstagram.png';
import IconLinkedin from '../assets/social-media-logo/IconLinkedin.png';
import AppStore from '../assets/storeLogo/AppStore.png';
import PlayStore from '../assets/storeLogo/GooglePlay.png';
import QrCode from '../assets/storeLogo/QrCode.png';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-between flex-wrap gap-8 p-10'>
                {/* Subscription Section */}
                <div className='flex flex-col gap-4 max-w-[250px]'>
                    <h4 className='text-3xl font-semibold'>Exclusive</h4>
                    <p className='font-medium'>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className='border border-white rounded-sm'>
                        <div className='flex justify-between items-center px-2 py-1'>
                            <input
                                className='bg-black text-white border-none focus:outline-none placeholder-gray-400 w-full'
                                type="email"
                                placeholder='Enter Your Email'
                            />
                            <button>
                                <img src={iconsend} alt="Send email icon" className='w-5 h-5' />
                            </button>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-2 max-w-[250px]'>
                    <h5 className='text-lg font-semibold'>Support</h5>
                    <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

               
                <div className='flex flex-col gap-2 max-w-[250px]'>
                    <h5 className='text-lg font-semibold'>Account</h5>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>My Cart</p>
                    <p>My Wishlist</p>
                    <p>Shop</p>
                </div>

               
                <div className='flex flex-col gap-2 max-w-[250px]'>
                    <h5 className='text-lg font-semibold'>Quick Link</h5>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

             
                <div className='flex flex-col gap-4 max-w-[250px]'>
                    <h5 className='text-lg font-semibold'>Download App</h5>
                    <p className='text-[#B3B3B3] font-medium text-[12px] leading-[18px]'>
                        Save $3 with App New User Only
                    </p>
                    <div className='flex gap-4'>
                        <img src={QrCode} alt="QR Code for App Download" className='w-20 h-20' />
                        <div className='flex flex-col gap-2 justify-center'>
                            <img src={PlayStore} alt="Google Play Store" className='w-24' />
                            <img src={AppStore} alt="Apple App Store" className='w-24' />
                        </div>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <img src={IconFacebook} alt="Facebook" className='w-6 h-6' />
                        <img src={IconTwitter} alt="Twitter" className='w-6 h-6' />
                        <img src={IconInstagram} alt="Instagram" className='w-6 h-6' />
                        <img src={IconLinkedin} alt="LinkedIn" className='w-6 h-6' />
                    </div>
                </div>

            </div>
            <div className="copyrightSection border-t border-gray-700 mt-8">
    <p className='text-center text-[14px] leading-[20px] font-medium text-gray-400 py-4'>
        &copy; 2023 Exclusive. All rights reserved.
    </p>
</div>

        </div>
    );
};

export default Footer;
