"use client"

export function ProgramsSection() {
  const programs = [
    { title: "Poverty Alleviation", description: "Provision of welfare services aimed at reducing poverty." },
    { title: "Education Support", description: "Support through school fees, learning materials, and ICT access." },
    { title: "Healthcare Support", description: "Facilitating access to medical services and supplies." },
    { title: "Water & Sanitation", description: "Implementation of clean water and sanitation initiatives." },
    { title: "Agriculture & Food Security", description: "Promotion of sustainable farming and food production." },
    { title: "Rehabilitation Support", description: "Support for drug and alcohol rehabilitation efforts." },
    { title: "Social Welfare", description: "Support for vulnerable populations including the elderly and persons with disabilities." },
    { title: "Grants & Donations", description: "Providing assistance to deserving causes." },
    { title: "Advocacy", description: "Engagement with public and private institutions to advance community development." },
    { title: "Partnerships", description: "Collaboration with government and stakeholders." },
    { title: "Samia Women Business Expo", description: "Bring women in Samia to share ideas, build business groups, and expand opportunities." },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
            Programs Overview
          </h2>
        </div>

        <p className="text-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
          The MTCM Foundation implements a wide range of charitable programs designed to improve quality of life
          and empower communities across Kenya.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 w-3 h-3 rounded-full bg-[#fe0000]" />
                <div>
                  <h3 className="text-lg font-bold text-[#282828] mb-2">{program.title}</h3>
                  <p className="text-sm text-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

