import React from 'react'

function Students() {
  const videos = [
    '/videos/student1.mp4',
    '/videos/student2.mp4',
    '/videos/student3.mp4',
    '/videos/student4.mp4',
    '/videos/student5.mp4',
    // Add more as needed
  ]

  return (
    <div className='mx-6 lg:mx-12 xl:mx-24 py-24'>
      {/* Text Row */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8'>
        <h3 className="bungee-shade-regular text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          Hear from Our Learners
        </h3>
        {/* <div className=' text-base md:text-lg space-y-2 max-w-2xl'>
          <p>Many learners have launched their own startups after completing our courses.</p>
          <p>Some have chosen freelancing as a career and are delivering successful projects.</p>
          <p>Others have taken their skills abroad or used them to scale their family businesses.</p>
        </div> */}
      </div>

      {/* Video Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`overflow-hidden h-[500px] rounded-xl ${
              index % 2 === 1 ? 'mt-8' : ''
            }`}
          >
            <video
              src={video}
              controls
              autoPlay
              className='w-full h-[100%] object-cover rounded-xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
