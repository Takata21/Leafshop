import Image from "next/image"
import Link from "next/link"
import { NavMenu } from "./Navmenu"
import { Button } from "../ui/button"
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
export function Navbar() {
  return (
    <header className="h-16 border-b border-[#e5e7eb] flex items-center justify-between">
      <div className="px-8 flex items-center gap-6 flex-[2]">
        <div className="">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" width={24} height={24} alt="logo" />
            <span className="font-bold">Leafshop</span>
          </Link>
        </div>
        <div className="">
          <NavMenu />
        </div>
      </div>
      <div className=" flex-1">
        <nav className="flex items-center gap-2">
          <div className="flex items-center shadow-sm rounded-md border border[#e5e7eb] px-3 py-2 gap-2">
            <MdOutlineSearch size={16} color="#09090b" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search products..."
              className="text-sm focus-visible:outline-none"
            />
          </div>
          <Button>
            <MdOutlineShoppingCart />
          </Button>
          <div className="">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild className="">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  )
}
