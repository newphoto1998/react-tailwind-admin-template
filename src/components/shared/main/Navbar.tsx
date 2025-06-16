import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import DarkSwitch from "./DarkSwitch";

export default function Navbar() {




  // สร้างตัวแปรเก็บ state เปิด/ปิดเมนู
  const [isOpen, setIsOpen] = React.useState(false);


  // สร้างตัวแปรเก็บ state เปิด/ปิดเมนูย Producs และ Features
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = React.useState(false);


  // สร้างตัวแปรเก็บ location จาก router
  const location = useLocation();


  // Refs for click outside to close the menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const productMenuRef = useRef<HTMLLIElement>(null);
  const featureMenuRef = useRef<HTMLLIElement>(null); 


   // เพิ่ม ref สำหรับ mobile menu button
  const menuButtonRef = useRef<HTMLButtonElement>(null)


// Click outside handler
    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        const target = event.target as Node
        // ไม่ปิดเมนูถ้าคลิกที่ปุ่ม
        if (menuButtonRef.current?.contains(target)) {
        return
        }

        // ถ้าคลิกนอกเมนูให้ปิด
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
       
            setIsOpen(false)
        }
        if (productMenuRef.current && !productMenuRef.current.contains(target)) {
             
            setIsProductsOpen(false)
        }
        if (featureMenuRef.current && !featureMenuRef.current.contains(target)) {
            setIsFeaturesOpen(false)
        }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  // Menu หลักของเว็บไซต์
  const navigation = [
    { name: "Company", path: "/company" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  // เมนูย่อยของ Products
  const productMenu = [
    { name: "Product 1", path: "/products/1" },
    { name: "Product 2", path: "/products/2" },
    { name: "Product 3", path: "/products/3" },
  ];

  // เมนูย่อยของ featureMenu
  const featureMenu = [
    { name: "Feature 1", path: "/features/1" },
    { name: "Feature 2", path: "/features/2" },
    { name: "Feature 3", path: "/features/3" },
  ];

    // Render dropdown items for mobile and desktop navigation 
  const renderDropdownItems = (items: typeof productMenu, indent: boolean = false) => {
    return items.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className={`block w-full px-4 py-2 text-lg font-normal text-left hover:bg-gray-100 dark:hover:bg-gray-700
          ${indent ? 'pl-8' : ''}`}
      >
        {item.name}
      </Link>
    ))
  }


   // สร้างฟังก์ชันเปิดปิดเมนู handleMenuClick
  const handleMenuClick = () => {
    setIsOpen(false)
    setIsProductsOpen(false)
    setIsFeaturesOpen(false)
  }

   // แยก handler สำหรับปุ่ม mobile menu
  const handleMobileMenuClick = () => {

    setIsOpen(!isOpen)
    
    // ปิด dropdown อื่นๆ ด้วย
    setIsProductsOpen(false)
    setIsFeaturesOpen(false)
  }

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-8 py-4 xl:px-0">
        <nav className="relative flex flex-wrap items-center 
        justify-between mx-auto lg:justify-between max-w-screen-xl">
     
            {/* Logo  */}
            <div>
                <Link to="/">
                    <span className="flex items-center space-x-2 text-2xl font-semibold dark:text-white">
                        <span>
                          <img src="/images/wrlogo.png" alt="" className="w-8" />
                        </span>
                        <span>WindReact</span>
                    </span>
                 </Link>
            </div>
       
             {/* Desktop menu */}
            <div className="hidden text-center lg:flex lg:items-center">
               <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex"> 
                {/* Product Dropdown */}
                <li className="relative mr-3" ref={productMenuRef}>
                  <button
                    onClick={() => {
                      setIsProductsOpen(!isProductsOpen);
                      setIsFeaturesOpen(false);
                    }}
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-hidden"
                  >
                    Products
                    <svg
                      className={`ml-2 h-5 w-5 transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  
                  {isProductsOpen && (
                    <div className="absolute left-0 w-48 mt-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                      <div className="py-1">
                        {productMenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block w-full px-4 py-2 text-lg font-normal text-left hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* Features Dropdown */}
                <li  className="relative mr-3" ref={featureMenuRef}>
                  <button
                    onClick={() => {
                      setIsFeaturesOpen(!isFeaturesOpen);
                      setIsProductsOpen(false); 
                    }}
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-hidden"
                  >
                    Features
                    <svg
                      className={`ml-2 h-5 w-5 transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  
                  {isFeaturesOpen && (
                    <div className="absolute left-0 w-48 mt-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                      <div className="py-1">
                        {featureMenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block w-full px-4 py-2 text-lg font-normal text-left hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                {/* Other navigation items */}
                {navigation.map((item) => (
                  <li className="mr-3" key={item.name}>
                    <Link
                      to={item.path}
                      onClick={handleMenuClick}
                      className={`inline-block px-4 py-2 text-lg font-normal rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-hidden
                        ${location.pathname === item.path ? 'text-indigo-600' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
            </div>

            {/* get started and dark mode */}
            <div className="flex items-center gap-3 mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
              <DarkSwitch/>
              <div className="hidden mr-3 lg:flex">
              <Link
                to="/login"
                className="inline-block px-6 py-2 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-hidden"
              >
                เข้าสู่ระบบ
              </Link>
              </div>
            </div>

 


           
          {/* Mobile menu button - เพิ่ม ref */}
          <button
            ref={menuButtonRef}
            onClick={handleMobileMenuClick}
            className="px-2 py-1 text-gray-500 dark:text-gray-400 rounded-md lg:hidden hover:text-indigo-500 dark:hover:text-indigo-400 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-hidden"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          {/* Mobile menu panel */}
          {isOpen && (
            <div ref={mobileMenuRef} className="flex flex-wrap w-full my-5 lg:hidden">
              {/* Products in mobile */}
              <button
                onClick={() => {
                  setIsProductsOpen(!isProductsOpen);
                  setIsFeaturesOpen(false);
            
                }}
                className="cursor-pointer flex items-center justify-between w-full px-4 py-2 text-lg font-normal text-left hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <span>Products</span>
                <svg
                  className={`ml-2 h-5 w-5 transform ${isProductsOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="w-full bg-gray-50 dark:bg-gray-800">
                  {renderDropdownItems(productMenu, true)}
                </div>
              )}

              {/* Features in mobile */}
              <button
                onClick={() => {
                  setIsFeaturesOpen(!isFeaturesOpen)
                  setIsProductsOpen(false)
                }}
                className="cursor-pointer flex items-center justify-between w-full px-4 py-2 text-lg font-normal text-left hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
              >
                <span>Features</span>
                <svg
                  className={`ml-2 h-5 w-5 transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isFeaturesOpen && (
                <div className="w-full bg-gray-50 dark:bg-gray-800">
                  {renderDropdownItems(featureMenu, true)}
                </div>
              )}

              {/* Other navigation items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`w-full px-4 py-2 text-lg font-normal text-left hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400
                    ${location.pathname === item.path ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Get Started button */}
              <Link
                to="/login"
                className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
