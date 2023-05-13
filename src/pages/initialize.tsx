import ImageActionLayout from '~/components/Layout/ImageActionLayout'

export default function InitializePage() {
  const onInitialize = () => {
    //TODO on deposit
  }

  return (
    <div className="flex h-full w-full items-center justify-end">
      <ImageActionLayout
        imageSrc={'/background.png'}
        imageAlt={'bg'}
        actionNode={
          <button
            className="rounded bg-primary-600 p-4 text-3xl font-semibold text-white"
            onClick={onInitialize}
          >
            Initialize
          </button>
        }
      />
    </div>
  )
}
