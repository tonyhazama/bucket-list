import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RiAddLine, RiArrowLeftSLine } from 'react-icons/ri'
import BackButton from './back-button'
import Container from './container'

export default function AppHeader({title = ""}) {

  const router = useRouter();
  console.log(router)
  const showBack = router.pathname !== "/";

  return (
    <>
      <div className="p-4 shadow-md fixed w-full bg-white z-10">
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-1/3 flex">
              {showBack && (
                <Link href="/">
                  <a>
                    <RiArrowLeftSLine className="text-2xl cursor-pointer"/>
                  </a>
                </Link>
              )}
            </div>

            <div className="cursor-default w-1/3 text-center">Barito-do</div>
            
            <div className="w-1/3 flex justify-end">
              {!showBack && (
                <Link href="/add">
                  <a>
                    <RiAddLine className="text-2xl cursor-pointer"/>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="h-header"></div>
    </>
  )
}



// <div className="flex items-center cursor-pointer pr-2 w-1/3">
// <RiArrowLeftSLine className="mr-2 text-2xl" />
// {/* <span className="font-medium text-sm">Back</span> */}
// </div>
