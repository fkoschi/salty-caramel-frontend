import ArrowRight from "@modules/common/icons/arrow-right"

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-2 content-container gap-6 py-6 mt-14">
        
        <div className="card hover:cursor-pointer">
          <div className="card-zoom h-[60vh]">
            <div className="card-zoom-image bg-category-two"></div>
          </div>
          <div className="flex items-center">
            <p className="pl-1.5 py-4 mr-2">Kategorie 1</p>
            <ArrowRight className="card-icon" />
          </div>
        </div>
    
        <div className="card hover:cursor-pointer">
          <div className="card-zoom h-[55vh]">
            <div className="card-zoom-image bg-category-one"></div>
          </div>
          <div className="flex items-center">
            <p className="pl-1.5 py-4 mr-2">Kategorie 2</p>
            <ArrowRight className="card-icon" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Categories
