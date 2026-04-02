"use client"

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
            RESOURCES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-[#282828] mb-3">Constitution</h3>
            <p className="text-sm text-foreground leading-relaxed">
              Access the official constitution of the MTCM Foundation, outlining governance, objectives, and operational structure.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-bold text-[#282828] mb-3">Accountability</h3>
            <p className="text-sm text-foreground leading-relaxed">
              The organization maintains proper financial records and undergoes annual audits in accordance with regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

