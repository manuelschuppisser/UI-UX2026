import { useState, useEffect } from 'react'
import CaseStudy from './CaseStudy'

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const caseStudy = caseStudies.find(cs => cs.slug === hash)
        if (caseStudy) {
          setSelectedCase(caseStudy)
        }
      } else {
        setSelectedCase(null)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectCase = (caseStudy) => {
    window.location.hash = caseStudy.slug
    setSelectedCase(caseStudy)
  }

  const handleCloseModal = () => {
    window.history.pushState('', document.title, window.location.pathname + window.location.search)
    setSelectedCase(null)
  }

  const caseStudies = [
    {
      id: 1,
      slug: 'click-and-ride',
      title: 'Click and Ride',
      timeframe: '2020-2021',
      role: 'UX/UI Designer',
      thumbnail: '/clickandride/clickand ride.png',
      description: 'A web-based application for ordering railway capacities in Belgium, allowing users to book tram lines efficiently on any device. The goal was to replace manual processes (emails/calls) that caused delays and errors with a streamlined, mobile-friendly system.',
      fullDescription: 'Click and Ride is an application for ordering railways in Belgium. Users can easily order on any platform because this is a web-based application. The main objective of this app is that it\'s easy to book tram lines on any device. An easy workflow was made from ordering to paying for the selected line, and it was also easy to manage the order that had been selected.',
      problem: 'Previously, there were several workflows that caused the order speed to decrease because they still use a manual system that uses email and then makes calls to order. This is not effective if there are many orders which will result in stacking and delays in ordering. As a result, users become increasingly disinterested in using the method and may no longer be interested in using the tram.',
      solutionIntro: 'Two main points were addressed: ensuring users didn\'t make mistakes ordering paths and could operate from mobile quickly, and allowing users to book transportation capabilities (paths) with different criteria such as time and specification that must match with train requirements.',
      designProcess: [
        {
          title: 'User Research',
          content: 'Identified the problem and solution, defined objectives, and conducted sector competitor analysis through moodboarding.'
        },
        {
          title: 'Define',
          content: 'Created a persona to represent user problems: Robert, a 42-year-old Belgian capacity transportation manager at SNCB with a good salary.'
        },
        {
          title: 'Design Process',
          content: 'Mapped the workflow to create flow solutions. Created several homescreen versions for stakeholder selection. Stakeholders opted for a minimalist style with changes to suit company branding.'
        },
        {
          title: 'Key Features',
          content: 'Path browser page with filters to set tram routes. Fast ordering process with overlays and wizards to prevent page reloading. Order management page to delete orders, track line status, and monitor tram readiness.'
        },
        {
          title: 'Mobile Adaptation',
          content: 'Mobile version was perfectly adapted to ensure users are comfortable booking tram lines from anywhere.'
        }
      ],
      challenges: [
        'Adapting to a new industry outside the usual scope of work',
        'Conducting user interviews with different stakeholders',
        'Ensuring mobile usability for on-the-go transportation managers',
        'Replacing legacy manual booking processes',
        'Minimizing errors in capacity reservations'
      ],
      solutions: [
        'Conducted extensive user research and created detailed personas (Robert, transportation manager)',
        'Mapped complete workflow before designing solutions',
        'Designed intuitive workflows, wireframes, and interactive prototypes',
        'Implemented minimalist branding with smart filters, overlays, and booking wizards',
        'Created special filters for setting tram routes not available in other applications',
        'Built order management dashboard for tracking, editing, and status checks',
        'Developed perfectly adapted mobile version for booking from anywhere'
      ],
      outcomes: [
        'Reduced booking time by 60%',
        'Minimized booking errors by 75%',
        'Improved user satisfaction scores significantly',
        'Streamlined communication between operators',
        'Enabled booking from any device with mobile-friendly interface'
      ],
      images: [
        '/clickandride/clickand ride.png',
        '/clickandride/clickand ride2.png',
        '/clickandride/clickand ride5.png',
        '/clickandride/clickandridepersonnas.jpg',
        '/clickandride/diragram clickandride.png'
      ],
      color: 'from-blue-600 to-blue-800',
      accentColor: 'bg-blue-500'
    },
    {
      id: 2,
      slug: 'service-catalogue',
      title: 'Service Catalogue',
      timeframe: '2021-2023',
      role: 'Lead UX Designer',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
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
      slug: 'komon-app',
      title: 'Komon App',
      timeframe: '2023-2026',
      role: 'Lead UX/UI Designer & Marketing Director',
      thumbnail: '/komon/komon.png',
      videoUrl: 'https://cdn.prod.website-files.com/66dab54814c77269fb11c52f/66dab54814c77269fb11c638_Capture%20Komon.png',
      hasVideo: true,
      description: 'Komon, a startup specializing in the calculation of mileage allowance for professional expenses, asked us to design their new SaaS and to direct the marketing campaign for customer acquisition. The goal of the project is to create a tailor-made tool allowing SMEs to manage their professional expenses, in particular those related to mobility.',
      fullDescription: 'Komon is a comprehensive SaaS solution designed specifically for SMEs to streamline the management of professional expenses, with a particular focus on mobility-related costs. As a startup specializing in mileage allowance calculations, Komon needed both a robust platform and an effective go-to-market strategy.',
      challenges: [
        'Creating an intuitive interface for complex mileage calculations',
        'Handling sensitive financial data securely',
        'Ensuring cross-platform compatibility (iOS/Android/Web)',
        'Designing for on-the-go usage scenarios',
        'Simplifying complex expense categorization',
        'Developing an effective customer acquisition strategy'
      ],
      solutions: [
        'Designed end-to-end UX/UI from wireframing to high-fidelity prototypes',
        'Created a tailor-made tool specifically for SME expense management',
        'Integrated automated mileage allowance calculation system',
        'Implemented real-time expense categorization with smart suggestions',
        'Developed intuitive dashboard visualizations for financial insights',
        'Directed comprehensive marketing campaign for customer acquisition',
        'Emphasized intuitive gestures and minimal input for mobile-first experience'
      ],
      outcomes: [
        'Successfully launched SaaS platform for SME market',
        'Streamlined expense management for thousands of users',
        'Saved users an average of 3 hours per week on admin tasks',
        'Increased accuracy in expense reporting by 90%',
        'Achieved strong customer acquisition through targeted marketing',
        'Achieved 4.8-star rating on app stores'
      ],
      images: [
        '/komon/komon.png',
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
              onSelect={() => handleSelectCase(caseStudy)}
            />
          ))}
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal 
          caseStudy={selectedCase} 
          onClose={handleCloseModal} 
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
          {caseStudy.hasVideo && caseStudy.videoUrl ? (
            <div className="space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 cursor-pointer group" onClick={() => window.open(caseStudy.videoUrl, '_blank')}>
                <img 
                  src={caseStudy.thumbnail} 
                  alt={`${caseStudy.title} - Video Thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-10 h-10 text-gray-900 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Click to watch video
                </div>
              </div>
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
            </div>
          ) : (
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
          )}

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
            <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.fullDescription || caseStudy.description}</p>
          </div>

          {caseStudy.problem && (
            <div>
              <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">The Problem</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.problem}</p>
            </div>
          )}

          {caseStudy.solutionIntro && (
            <div>
              <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">The Solution</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.solutionIntro}</p>
            </div>
          )}

          {caseStudy.designProcess && (
            <div>
              <h4 className="font-display text-2xl font-bold text-gray-900 mb-4">My Design Process</h4>
              <div className="space-y-6">
                {caseStudy.designProcess.map((step, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-lg text-gray-900 mb-2">{index + 1}. {step.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{step.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          {caseStudy.slug === 'click-and-ride' && (
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-display text-xl font-bold text-gray-900 mb-2">Conclusion</h4>
              <p className="text-gray-700 leading-relaxed">
                Conducting user interviews from different stakeholders was quite challenging, especially in a different industry outside the usual scope of work. This project provided valuable learning opportunities in a new field.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
