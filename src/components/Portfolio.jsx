import { useState } from 'react'
import CaseStudy from './CaseStudy'

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null)

  const caseStudies = [
    {
      id: 1,
      title: 'Click and Ride',
      timeframe: '2020-2021',
      role: 'UX/UI Designer',
      description: 'A web-based application for ordering railway capacities in Belgium, allowing users to book tram lines efficiently on any device. The goal was to replace manual processes (emails/calls) that caused delays and errors with a streamlined, mobile-friendly system.',
      challenges: [
        'Adapting to a new industry with complex requirements',
        'Ensuring mobile usability for on-the-go transportation managers',
        'Replacing legacy manual booking processes',
        'Minimizing errors in capacity reservations'
      ],
      solutions: [
        'Conducted extensive user research and created detailed personas (e.g., transportation managers)',
        'Designed intuitive workflows, wireframes, and interactive prototypes',
        'Implemented minimalist branding with smart filters, overlays, and booking wizards',
        'Created an order management dashboard for tracking, editing, and status checks'
      ],
      outcomes: [
        'Reduced booking time by 60%',
        'Minimized booking errors by 75%',
        'Improved user satisfaction scores significantly',
        'Streamlined communication between operators'
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'
      ],
      color: 'from-blue-600 to-blue-800',
      accentColor: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Service Catalogue',
      timeframe: '2021-2023',
      role: 'Lead UX Designer',
      description: 'An enterprise-level IT service catalog platform designed to centralize and simplify access to company services, requests, and management for employees.',
      challenges: [
        'Organizing vast services without overwhelming users',
        'Integrating with existing ITSM tools like ServiceNow',
        'Creating intuitive navigation for diverse user groups',
        'Balancing comprehensive information with simplicity'
      ],
      solutions: [
        'Led comprehensive UX research and journey mapping',
        'Designed categorized listings with advanced search filters',
        'Created streamlined request forms with status tracking',
        'Implemented card-based UI for easy navigation and discovery',
        'Integrated seamlessly with ServiceNow workflows'
      ],
      outcomes: [
        'Enhanced employee productivity across departments',
        'Reduced support tickets by 30%',
        'Achieved 85% user adoption rate within 3 months',
        'Improved service request completion time by 40%'
      ],
      images: [
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
      ],
      color: 'from-purple-600 to-purple-800',
      accentColor: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Komon App',
      timeframe: '2023-2026',
      role: 'Lead UX/UI Designer',
      description: 'A mobile application for independents and freelancers to manage travel, expenses, and reimbursements seamlessly, with features for tracking trips, scanning receipts, and generating reports.',
      challenges: [
        'Handling sensitive financial data securely',
        'Ensuring cross-platform compatibility (iOS/Android)',
        'Designing for on-the-go usage scenarios',
        'Simplifying complex expense categorization'
      ],
      solutions: [
        'Designed end-to-end UX/UI from wireframing to high-fidelity prototypes',
        'Integrated OCR technology for automatic receipt scanning',
        'Implemented real-time expense categorization with smart suggestions',
        'Created intuitive dashboard visualizations for financial insights',
        'Emphasized intuitive gestures and minimal input for mobile-first experience'
      ],
      outcomes: [
        'Streamlined expense management for 10,000+ users',
        'Saved users an average of 3 hours per week on admin tasks',
        'Increased accuracy in expense reporting by 90%',
        'Achieved 4.8-star rating on app stores'
      ],
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      ],
      color: 'from-green-600 to-green-800',
      accentColor: 'bg-green-500'
    }
  ]

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three projects that showcase user-centered design
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index}
              onSelect={() => setSelectedCase(caseStudy)}
            />
          ))}
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal 
          caseStudy={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </section>
  )
}

const CaseStudyModal = ({ caseStudy, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
          <h3 className="font-display text-3xl font-bold text-gray-900">{caseStudy.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
            <img 
              src={caseStudy.images[currentImage]} 
              alt={`${caseStudy.title} - Screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {caseStudy.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${caseStudy.accentColor} text-white p-4 rounded-lg`}>
              <span className="text-sm font-semibold opacity-90">Timeframe</span>
              <p className="text-lg font-bold">{caseStudy.timeframe}</p>
            </div>
            <div className={`${caseStudy.accentColor} text-white p-4 rounded-lg`}>
              <span className="text-sm font-semibold opacity-90">Role</span>
              <p className="text-lg font-bold">{caseStudy.role}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">Overview</h4>
            <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.description}</p>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-gray-900 mb-4">Challenges</h4>
            <ul className="space-y-2">
              {caseStudy.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`${caseStudy.accentColor} text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold`}>
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-2">
              {caseStudy.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className={`w-6 h-6 flex-shrink-0 mt-0.5 ${caseStudy.accentColor.replace('bg-', 'text-')}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold text-gray-900 mb-4">Outcomes</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.outcomes.map((outcome, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-900">
                  <p className="text-gray-700 font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
