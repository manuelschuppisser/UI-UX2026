const CaseStudy = ({ caseStudy, index, onSelect }) => {
  return (
    <div 
      className="scale-in group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100"
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onSelect}
    >
      <div className="flex flex-col md:flex-row gap-6 p-8 md:p-10">
        {caseStudy.thumbnail && (
          <div className="flex-shrink-0">
            <img 
              src={caseStudy.thumbnail} 
              alt={caseStudy.title}
              className="w-full md:w-40 h-40 object-cover rounded-lg"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
                  {caseStudy.title}
                </h3>
                <span className="text-sm text-gray-500 font-medium">{caseStudy.timeframe}</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {caseStudy.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{caseStudy.role}</span>
            <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
              <span className="text-sm">View Details</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
