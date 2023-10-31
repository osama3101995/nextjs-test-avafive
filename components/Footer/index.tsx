import Link from "next/link";
import React from "react";
import "./style.css";
import Image from "next/image";
import logos from "../../public/images/footer-logos.svg";
import locationIcon from "../../public/images/location.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between py-8 px-16 bg-[--md-blue] max-sm:flex-col">
        
        <div className="sitemap flex basis-2/5 justify-between max-sm:flex-col">
            <div className="shopByCategory max-sm:mt-5">
            <h4>Shop by Category</h4>
            <div className="links">
                <Link href={"/skincare"}>Skincare</Link>
                <Link href={"/personal-care"}>Personal Care</Link>
                <Link href={"/handbags"}>Handbags</Link>
                <Link href={"/apparels"}>Apparels</Link>
                <Link href={"/watches"}>Watches</Link>
                <Link href={"/eye-wear"}>Eye Wear</Link>
                <Link href={"/jewellery"}>Jewellery</Link>
            </div>
            </div>

            <div className="About max-sm:mt-5">
            <h4>About</h4>
            <div className="links">
                <Link href={"/skincare"}>Contact Us</Link>
                <Link href={"/handbags"}>About Us</Link>
                <Link href={"/apparels"}>Careers</Link>
                <Link href={"/watches"}>Press</Link>
            </div>
            </div>

            <div className="shopByCategory max-sm:mt-5">
            <h4>Policy</h4>
            <div className="links">
                <Link href={"/skincare"}>Return Policy</Link>
                <Link href={"/handbags"}>Terms of Use</Link>
                <Link href={"/apparels"}>Sitemap</Link>
                <Link href={"/watches"}>Security</Link>
                <Link href={"/jewellery"}>Privacy</Link>
                <Link href={"/jewellery"}>EPR Compliance</Link>
            </div>
            </div>
        </div>
        <div className="socialMedia flex flex-col sm:items-end  max-sm:mt-12">
        <Image alt="footer-logos" src={logos}/>
        <div className="flex mt-7">
            <Image alt="location-icon" src={locationIcon}/>
            <p>United States</p>
        </div>
        <p className="mt-2 text-[#B6B6B6]">© 2021 | Cora Leviene All Rights Reserved</p>
        </div>

    

    </footer>
  );
};

export default Footer;
