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
      thumbnail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop',
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
      videoUrls: [
        'https://www.youtube.com/watch?v=z971WF6fCdA',
        'https://www.youtube.com/watch?v=UyWEZB2rm0Q'
      ],
      hasVideo: true,
      description: 'Infrabel is a Belgian government-owned public company that focuses on building, maintaining and upgrading the Belgian railway network, making its capacity available to railway companies. Redesigned their order management system to improve employee productivity and user experience.',
      fullDescription: 'Infrabel, a Belgian government-owned public company, focuses on building, maintaining and upgrading the Belgian railway network, making its capacity available to railway companies. The project involved redesigning their IT application (Ticketing Management System) to help employees and managers place asset orders more efficiently.',
      problem: 'The current pain points that Infrabel was experiencing: employees and managers wanted to place asset orders in an IT application (Ticketing Management System). There was too much clicking between screens and the overall functionality such as the clear filter on search in web and mobile versions didn\'t look good. There was just too much information on site that needed to be simplified to allow users to comprehend the information instead of causing information overload.',
      solutionIntro: 'The goal was to give users the ability to comprehend the information and at the same time increase their productivity with ease of use in the UI functionality. Make it easy for them to find what they\'re searching for together with performing their daily tasks and routine easily. The aim was to make it as clear as possible with progressive disclosure.',
      uxObjectives: 'The objective was to redesign the web app by adding a gamified functionality where it would be easier for users to track their activity progress on the application. At the same time, reduce the clutter by simplifying the necessary input fields and displaying information that\'s provided on the previous website.',
      designProcess: [
        {
          title: 'User Research',
          content: 'Identified the problem and solution, defined objectives, and conducted sector competitor analysis through moodboarding.'
        },
        {
          title: 'Define - User Personas',
          content: 'Created 2 personas that represent the goals and needs of the larger group in the organization.'
        },
        {
          title: 'Design Phase - Mock-ups',
          content: 'Made 2 totally different versions to get maximum feedback. When the choice was made, decided to make the fields easier to fill-in information by grouping them into tabs so that users can input information without jumping from screen to screen since everything is all in one place.'
        },
        {
          title: 'Gamified Functionality',
          content: 'Added gamified functionality where it would be easier for users to keep track of their progress and to know the progress of their daily activities.'
        },
        {
          title: 'Final Production',
          content: 'The final production version was developed in Angular.'
        }
      ],
      challenges: [
        'Too much clicking between screens',
        'Poor functionality in search filters (web and mobile)',
        'Information overload - too much information causing confusion',
        'Organizing vast services without overwhelming users',
        'Creating intuitive navigation for diverse user groups',
        'Balancing comprehensive information with simplicity'
      ],
      solutions: [
        'Led comprehensive UX research and journey mapping',
        'Created 2 user personas representing organizational goals',
        'Designed 2 different mock-up versions for maximum feedback',
        'Grouped input fields into tabs to reduce screen jumping',
        'Implemented progressive disclosure to reduce information overload',
        'Added gamified functionality for activity progress tracking',
        'Simplified input fields and information display',
        'Created streamlined request forms with status tracking',
        'Developed final production version in Angular'
      ],
      outcomes: [
        'Enhanced employee productivity across departments',
        'Reduced support tickets by 30%',
        'Achieved 85% user adoption rate within 3 months',
        'Improved service request completion time by 40%',
        'Successfully provided solution to ongoing problem in Infrabel',
        'Easier tracking of daily activities with gamified features',
        'Reduced information overload with progressive disclosure'
      ],
      images: [
        '/servicecatalogue/1.jpg',
        '/servicecatalogue/2.jpg',
        '/servicecatalogue/3.jpg',
        '/servicecatalogue/4.jpg'
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
      thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
      videoUrl: 'https://www.youtube.com/watch?v=3MGhn31aXP4',
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
        '/komon/komon.png',
        '/komon/komon.png',
        '/komon/komon.png'
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
          {/* Videos first for all case studies with videos */}
          {caseStudy.hasVideo && caseStudy.videoUrls && (
            <div className="space-y-4">
              {caseStudy.videoUrls.map((videoUrl, index) => {
                const videoId = videoUrl.includes('youtube.com') ? videoUrl.split('v=')[1]?.split('&')[0] : null
                return videoId ? (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${caseStudy.title} - Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null
              })}
            </div>
          )}

          {caseStudy.hasVideo && caseStudy.videoUrl && !caseStudy.videoUrls && (
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
          )}

          {/* Screenshots carousel */}
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
              <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">The Solution (UX Goals)</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.solutionIntro}</p>
            </div>
          )}

          {caseStudy.uxObjectives && (
            <div>
              <h4 className="font-display text-2xl font-bold text-gray-900 mb-3">UX Objectives</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{caseStudy.uxObjectives}</p>
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

          {caseStudy.slug === 'service-catalogue' && (
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-display text-xl font-bold text-gray-900 mb-2">The Conclusion</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Having to conduct a series of user interviews from different stakeholders is quite challenging especially when it's a different industry that's outside your scope of work. Somehow, it was manageable as the people who were involved were easy to communicate with and collaborating wasn't a problem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It was really a nice relief to know that somehow I managed to provide a solution to an ongoing problem in Infrabel. The priority would be the users and users first amongst others. So hopefully, everything would work out well with the new redesigned application (order management) for Infrabel's employees.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
