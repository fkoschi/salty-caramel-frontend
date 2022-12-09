import { Popover, Transition } from "@headlessui/react"
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-full"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href="/shop" passHref>
              <a className="relative flex h-full">
                <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200"
                  )}
                  onClick={() => push("/store")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>
                </Popover.Button>
              </a>
            </Link>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
              >
                <div className="relative bg-white py-8">
                  <div className="flex items-start content-container">
                    <div className="flex flex-col flex-1 max-w-[30%]">
                      <h3 className="text-base-semi text-gray-900 mb-4">
                        Collections
                      </h3>
                      <div className="flex items-start">
                        {collections &&
                          chunk(collections, 6).map((chunk, index) => {
                            return (
                              <ul
                                key={index}
                                className="min-w-[152px] max-w-[200px] pr-4"
                              >
                                {chunk.map((collection) => {
                                  return (
                                    <div key={collection.id} className="pb-3">
                                      <Link
                                        href={`/collections/${collection.id}`}
                                      >
                                        <a onClick={() => setOpen(false)}>
                                          {collection.title}
                                        </a>
                                      </Link>
                                    </div>
                                  )
                                })}
                              </ul>
                            )
                          })}
                        {loadingCollections &&
                          repeat(6).map((index) => (
                            <div
                              key={index}
                              className="w-12 h-4 bg-gray-100 animate-pulse"
                            />
                          ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-4">
                        {products?.slice(0, 3).map((product) => (
                          <ProductPreview {...product} key={product.id} />
                        ))}
                        {loadingProducts &&
                          repeat(3).map((index) => (
                            <SkeletonProductPreview key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
