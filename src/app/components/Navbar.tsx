import Link  from "next/link"


function Navbar(){
    return(
        <div>
<ul className="flex space-x-10 py-5  bg-red-200 items-center justify-center">
    <li className="flex items-center px-4 py-2 bg-red-500 text-white hover:bg-black hover:text-gray-200 border-color: rgb(156 163 175);">
        <Link href="/">Home</Link> <br /></li>
    <li>
        <Link href="/about">About</Link> <br /></li>
    <li>
        <Link href="/gallery">Gallery</Link></li>
    <li>
        <Link href="contact">Contact us</Link></li>
</ul>





    </div>
    )
}

export default Navbar