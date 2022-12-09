import ShopValueCard from "./shop-value.card"

const ShopValues = () => {

  const data = [
    {
      title: 'Responsible Design',
      description: 'Designed with integrity and durably crafted for everyday use.'
    },
    {
      title: 'Sustainable Sourcing',
      description: 'We only partner with people who put the earth, and its people, first.'
    },
    {
      title: 'Transparent Pricing',
      description: 'We believe in accessible pricing and full transparency. Our pricing model is an open book.'
    },
    {
      title: 'Giving Back',
      description: 'Thanks to Mealshare, every purchase directly donates a meal to a youth in need.'
    }
  ]

  const Values = (): any => {
    return data.map((val, key) => {
      return <ShopValueCard key={key} title={val.title} description={val.description} />
    })
  }

  return (
    <div className="content-container grid grid-cols-1 xsmall:grid-cols-2 large:grid-cols-4 justify-center gap-5 mt-16">
      <Values />
    </div>
  )
}
export default ShopValues