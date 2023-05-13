import ImageActionLayout from '~/components/Layout/ImageActionLayout'

const DefendantVeredict: React.FC = () => {
  const guiltyStatus: 'Guilty' | 'Not Guilty' = 'Guilty'
  const sentenceTime = 12301

  return (
    <>
      <ImageActionLayout
        imageSrc="/defendant.png"
        imageAlt="defendant"
        actionNode={
          <div className="flex flex-col items-center gap-40">
            <h1 className="px-5 text-6xl font-bold text-primary-600 underline">
              Defendant
            </h1>
            <div className="flex flex-col items-center gap-20">
              <div className="flex items-center gap-20">
                <h3 className="text-2xl font-medium text-primary-600">
                  ***Transaction Hash***
                </h3>
              </div>
              <h3 className="text-5xl font-medium text-primary-600">
                {guiltyStatus}
              </h3>

              <h4 className="flex gap-5 text-2xl font-medium text-primary-600">
                <span>Sentence time</span>
                <span>{sentenceTime}</span>
              </h4>
            </div>
          </div>
        }
      />
    </>
  )
}
export default DefendantVeredict
