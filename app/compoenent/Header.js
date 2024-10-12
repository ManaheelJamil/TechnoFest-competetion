import Image from "next/image"
import Link from "next/link"
const Header = () => {
    return (
        <>
            <div className="bg-black flex items-center justify-between w-[90%] mx-auto text-white text-center  font-bold w-full p-3">
                <Image src="" alt="logo" width={40} height={40} />
                <div>
                    <ul className="flex items-center space-x-5">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About us</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">Contact us</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Header