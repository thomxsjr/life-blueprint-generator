import CircularMetricCard from './CircularMetricCard'


const features = [
    {
        metric:
            <CircularMetricCard
                title="Career"
                value={68}
            />
    },
    {
        metric:
            <CircularMetricCard
                title="Health"
                value={52}
            />
    },
    {
        metric:
            <CircularMetricCard
                title="Finance"
                value={85}
            />
    },
]

const ScoreMetrics = () => {

            
        
    return (
        <section className="px-4 py-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="mt-12">
                    <ul className="grid gap-y-20 gap-x-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            
                            <li key={idx} className="bg-white/40 border border-white border-opacity-55 rounded-4xl p-6 flex flex-col items-center text-center hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_20px_rgba(221,147,234,_0.3)]">
                                <div className="flex items-center justify-center">
                                    {item.metric}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
      
}

export default ScoreMetrics