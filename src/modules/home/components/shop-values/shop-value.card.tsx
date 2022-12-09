import Image from "next/image"

interface Props {
  title: string
  iconPath?: string
  description: string
}

const ShopValueCard = ({ title, description }: Props) => {
  return (
    <div className="flex w-full flex-col items-center text-center p-6">
      <div className="relative w-12 aspect-square mb-8">
        <Image alt="" src="/logo.png" layout="fill" objectFit="cover" className="absolut inset-0"/>
      </div>
      <h3 className="mb-4 text-[17px]">{title}</h3>
      <p className="text-[14px] text-slate-600">{description}</p>
    </div>
  )
}

export default ShopValueCard
