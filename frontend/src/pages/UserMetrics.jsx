import MultiStepForm from "@/components/MultiStepForm"
import BGGradient from "@/components/BGGradient"

const UserMetrics = () => {
  return (
    <>
          <BGGradient offset={-200}/>
        <div className="p-4 mx-auto w-full md:max-w-7xl">
            <MultiStepForm />
        </div>
    </>
  )
}

export default UserMetrics